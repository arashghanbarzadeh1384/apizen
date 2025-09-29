"use client";
import { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FeatureAnimatorProps {
  children: ReactNode;
}

export default function FeatureAnimator({ children }: FeatureAnimatorProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      // انیمیشن تیتر
      tl.from(".feature-titlefeature-title", {
        duration: 2.5,
        y: 60,
        opacity: 0,
      });

      // underline
      tl.from(
        ".feature-title-underline",
        {
          duration: 2.5,
          width: 0,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.8"
      ); 
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
