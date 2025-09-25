"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import TextHeader from "./TextHeader";
import AOS from "aos";
import "aos/dist/aos.css";

type NavLink = { href: string; label: string };

const LINKS: NavLink[] = [
  { href: "#features", label: "ویژگی ها" },
  { href: "#about", label: "درباره ما" },
  { href: "#faq", label: "سؤالات متداول" },
];

export default function Menu() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const asideRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const resizeTimeout = useRef<number | null>(null);
  const rafPending = useRef(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((s) => !s), []);

  // --- AOS initialization ---
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // --- Navbar scroll ---
  useEffect(() => {
    const onScroll = () => {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(() => {
        setShowNavbar(window.scrollY > 50);
        rafPending.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Resize handling ---
  useEffect(() => {
    const onResize = () => {
      if (resizeTimeout.current) window.clearTimeout(resizeTimeout.current);
      resizeTimeout.current = window.setTimeout(() => {
        if (window.innerWidth >= 768) setMobileOpen(false);
      }, 150);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimeout.current) window.clearTimeout(resizeTimeout.current);
    };
  }, []);

  // --- Keyboard handling ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }

      if (e.key === "Tab" && mobileOpen && asideRef.current) {
        const focusables = asideRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // --- Body overflow for mobile ---
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        const container = asideRef.current;
        if (!container) return;
        const focusable = container.querySelector<HTMLElement>(
          'button, a[href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) focusable.focus();
      });
    } else {
      document.body.style.overflow = prevOverflow || "";
      requestAnimationFrame(() => triggerRef.current?.focus());
    }

    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [mobileOpen]);

  const DesktopLinks = useMemo(
    () =>
      LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="flex items-center gap-2 hover:opacity-90"
          data-aos="zoom-in"
        >
          <span>{l.label}</span>
        </Link>
      )),
    []
  );

  const MobileLinks = useMemo(
    () =>
      LINKS.map((l) => (
        <li key={l.href} data-aos="fade-right">
          <Link
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 text-lg py-2 px-2 rounded-md hover:bg-gray-100"
          >
            <span>{l.label}</span>
          </Link>
        </li>
      )),
    []
  );

  return (
    <>
      <header dir="rtl" aria-label="هدر سایت">
        <nav
          className={`fixed top-0 left-0 w-full h-[88px] bg-[#f77e2d28] backdrop-blur-md shadow-md z-50 transform transition-all duration-300 ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
          role="navigation"
          aria-hidden={!showNavbar}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center justify-between">
            <div className="hidden md:flex items-center gap-8 text-[18px] text-[#1A1A1A]">
              {DesktopLinks}
            </div>

            <div className="flex-shrink-0">
              <Link href="/" className="inline-block">
                <Image
                  src="/Images/logo.png"
                  alt="لوگو"
                  width={100}
                  height={100}
                  priority
                  data-aos="zoom-in"
                />
              </Link>
            </div>

            <button
              ref={triggerRef}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
              data-aos="fade-left"
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </nav>

        <div className="relative w-full h-[600px]">
          <Image
            src="/Images/Header.png"
            alt="هدر"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/0 backdrop-blur-[10px]"></div>
          <div
            className="relative container mx-auto px-4 md:px-8 lg:px-16 py-6"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between text-[20px] md:text-[25px] text-[#1A1A1A]">
              <div className="hidden md:flex gap-[100px]">{DesktopLinks}</div>

              <div className="md:block hidden -mt-6">
                <Image
                  src="/Images/logo.png"
                  alt="لوگو"
                  width={150}
                  height={150}
                  className="-mt-4"
                  data-aos="zoom-in"
                />
              </div>

              <div className="md:hidden flex justify-center w-full">
                <Image
                  src="/Images/logo.png"
                  alt="لوگو"
                  width={300}
                  height={300}
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <TextHeader />
          </div>
        </div>

        {mobileOpen && (
          <div
            className="fixed inset-0 z-60 bg-black/40 md:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}

        <aside
          ref={(el) => (asideRef.current = el)}
          className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-xl z-70 transform transition-transform duration-300 md:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="منوی موبایل"
        >
          <div className="p-4 flex items-center justify-between border-b">
            <div>
              <Image
                src="/Images/logo.png"
                alt="لوگو"
                width={80}
                height={80}
                data-aos="zoom-in"
              />
            </div>
            <button
              onClick={closeMobile}
              aria-label="بستن منو"
              className="p-2 rounded-md focus:outline-none focus:ring-2"
            >
              <HiX size={26} />
            </button>
          </div>

          <nav className="p-4">
            <ul className="flex flex-col gap-4">{MobileLinks}</ul>
          </nav>
        </aside>
      </header>
    </>
  );
}
