"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";

export default function AboutWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return <About />;
}
