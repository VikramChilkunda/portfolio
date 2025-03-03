"use client";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <LazyMap />
    </main>
  );
}