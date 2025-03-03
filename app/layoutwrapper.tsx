"use client"; // Need this file since layout.tsx must be a server component, and we cannot call usePathname() in a server component

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const excludedPaths = ["/"];

    if (excludedPaths.includes(pathname)) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            { children }
        </>
  );
}
