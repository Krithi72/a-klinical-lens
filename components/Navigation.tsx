"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-sm font-bold font-body shrink-0">
            K
          </div>
          <span className="font-display font-semibold text-slate-900 text-base tracking-tight">
            A Klinical Lens
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? "text-blue-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="font-body text-sm font-semibold px-5 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-150"
          >
            Start Reading
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1.5"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm font-medium text-slate-700 py-1"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="font-body text-sm font-semibold px-5 py-2 bg-blue-900 text-white rounded-full text-center"
          >
            Start Reading
          </Link>
        </div>
      )}
    </nav>
  );
}
