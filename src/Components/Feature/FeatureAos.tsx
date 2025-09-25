"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Feature from "./Feature";

export default function FeatureAos() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return <Feature />;
}
