"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-blue-900 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSceneWrapper() {
  return <HeroScene />;
}
