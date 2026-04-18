"use client";

import dynamic from "next/dynamic";

const SocialProof = dynamic(() => import("./SocialProof"), { ssr: false });
const GrowthChart = dynamic(() => import("./GrowthChart"), { ssr: false });
const BookingSection = dynamic(() => import("./BookingSection"), { ssr: false });

export default function ClientSections() {
  return (
    <>
      <SocialProof />
      <GrowthChart />
      <BookingSection />
    </>
  );
}
