'use client'

import { usePathname, useRouter } from "next/navigation";
import { scroller } from "react-scroll";

export function useScrollOrNavigate() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  return (sectionId) => {
    if (isHomePage) {
      scroller.scrollTo(sectionId, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    } else {
      router.push(`/?scroll=${sectionId}`);
    }
  };
}
