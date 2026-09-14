"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Skull } from "lucide-react";

// FRONTEND navbar: no accounts, no sessions, no vault links.
// Every CTA routes to pricing (Whop checkout). Members re-enter via email link.
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-200 bg-[#FAF9F6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAF9F6]/80">
      {/* Top edition strip */}
      <div className="border-b border-ink-200/60 bg-ink-100/50 px-4 py-1 text-center text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-ink-600 uppercase flex items-center justify-between max-w-7xl mx-auto">
        <span>Vol. 1 · Morgue File</span>
        <span className="hidden sm:inline">1,200+ Autopsies Filed · 40 YC Batches</span>
        <span className="text-rebuild font-semibold">Pass: $49</span>
      </div>

      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-sm bg-ink text-white flex items-center justify-center font-display font-bold text-lg group-hover:bg-rebuild transition-colors">
            II
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none tracking-tight text-ink">
              SecondRun
            </span>
            <span className="text-[10px] font-mono tracking-wider text-ink-500 uppercase">
              Startup Autopsies
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-700">
          <Link href="/" className="hover:text-ink transition-colors">
            Public Archive
          </Link>
          <Link href="/browse" className="hover:text-ink transition-colors flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-ink-500" />
            Browse
          </Link>
          <Link href="/pricing" className="hover:text-ink transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/pricing">
            <Button variant="primary" size="sm" className="text-xs font-semibold bg-rebuild hover:bg-rebuild/90 text-white">
              All-Access Pass ($49)
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md hover:bg-ink-100 text-ink-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-ink-200 bg-[#FAF9F6] px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-ink hover:text-rebuild"
          >
            Public Archive
          </Link>
          <Link
            href="/browse"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-ink hover:text-rebuild"
          >
            Browse
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-ink hover:text-rebuild"
          >
            Pricing
          </Link>
          <div className="pt-3 border-t border-ink-200 flex flex-col gap-2 font-mono">
            <Link href="/pricing" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" className="w-full text-xs bg-rebuild text-white">
                All-Access Pass ($49)
              </Button>
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-[11px] font-mono text-ink-500 pt-1">
            <Skull className="w-3.5 h-3.5" />
            Already a member? Your access link is in your purchase email.
          </p>
        </div>
      )}
    </header>
  );
}
