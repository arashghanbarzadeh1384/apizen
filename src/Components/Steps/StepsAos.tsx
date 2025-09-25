"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Steps from "./Steps";

export default function FeatureAos() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return <Steps />;
}
