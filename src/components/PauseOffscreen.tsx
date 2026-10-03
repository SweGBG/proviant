"use client";

import { useEffect } from "react";

/** Pauses CSS animations in sections that are out of view (smoother scrolling, less battery). */
export default function PauseOffscreen() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-anim]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("off", !e.isIntersecting)),
      { rootMargin: "100px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
