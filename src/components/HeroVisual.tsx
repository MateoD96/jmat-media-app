"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, SpotLight, Environment, Center } from "@react-three/drei";
import * as THREE from "three";

// Shared drag state — no React re-renders
const drag = {
  active: false,
  lastX: 0,
  lastY: 0,
  velX: 0,
  velY: 0,
};

const accumulated = { x: 0, y: 0 };

function useDragRotation(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const sensitivity = 0.008;

    const onDown = (e: PointerEvent) => {
      drag.active = true;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      drag.velX = 0;
      drag.velY = 0;
      el.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (!drag.active) return;
      const dx = e.clientX - drag.lastX;
      const dy = e.clientY - drag.lastY;
      drag.velX = dx * sensitivity;
      drag.velY = dy * sensitivity;
      accumulated.y += drag.velX;
      accumulated.x += drag.velY;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
    };

    const onUp = () => {
      drag.active = false;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [containerRef]);
}

function LogoModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/logo_figure.glb");

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;

    if (!drag.active) {
      // Momentum: decay velocity into accumulated rotation
      drag.velX *= 0.95;
      drag.velY *= 0.95;
      accumulated.y += drag.velX;
      accumulated.x += drag.velY;

      // Auto-spin when idle
      accumulated.y += 0.003;
    }

    // Smooth lerp toward accumulated target
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      accumulated.x,
      0.12
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      accumulated.y,
      0.12
    );

    // Float — independent of drag
    groupRef.current.position.y = Math.sin(t * 0.65) * 0.12;
  });

  return (
    <group ref={groupRef} scale={1.6}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <Center>
          <primitive object={scene} />
        </Center>
      </group>
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.2} color="#B9A8F6" />
      <SpotLight
        position={[3, 4, 2]}
        intensity={80}
        color="#8A51BB"
        angle={0.5}
        penumbra={0.8}
        castShadow
      />
      <SpotLight
        position={[-3, -2, 3]}
        intensity={20}
        color="#B9A8F6"
        angle={0.6}
        penumbra={1}
      />
      <pointLight position={[0, 0, 6]} intensity={60} color="#8A51BB" />
      <pointLight position={[0, 4, 2]} intensity={30} color="#EFE5FE" />
    </>
  );
}

function Placeholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-2xl border border-[rgba(138,81,187,0.3)] animate-pulse bg-[rgba(138,81,187,0.05)]" />
    </div>
  );
}

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  useDragRotation(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none",
        touchAction: "none",
        cursor: "grab",
      }}
    >
      <Suspense fallback={<Placeholder />}>
        <Canvas
          camera={{ position: [0, 0, 21], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent", border: "none", outline: "none", display: "block" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <SceneLights />
          <LogoModel />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  );
}
