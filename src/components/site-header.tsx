"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  ChevronDownIcon,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";

const navItems = [
  { label: "Qui sommes-nous", href: "#" },
  { label: "Nos actions", href: "#nos-actions" },
  { label: "Actualités", href: "#actualites" },
  { label: "Publications", href: "#" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-8 px-6 md:px-10 lg:px-12">
        <Logo />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 xl:flex xl:gap-11"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Rechercher"
            className="text-neutral-800 transition-colors hover:text-accent"
          >
            <SearchIcon className="h-[18px] w-[18px]" />
          </button>

          <Link
            href="#contact"
            className="hidden text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800 transition-colors hover:text-accent md:inline"
          >
            Contact
          </Link>

          <div className="hidden items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800 md:flex">
            <GlobeIcon className="h-[17px] w-[17px]" />
            <button
              type="button"
              aria-label="Changer de langue"
              className="flex items-center gap-0.5 uppercase transition-colors hover:text-accent"
            >
              FR
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="text-neutral-900 transition-colors hover:text-accent xl:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white xl:hidden"
        >
          <nav
            aria-label="Navigation mobile"
            className="mx-auto flex max-w-[1440px] flex-col px-6 py-4 md:px-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3.5 text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-5">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800 transition-colors hover:text-accent"
              >
                Contact
              </Link>
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.13em] text-neutral-800">
                <GlobeIcon className="h-[17px] w-[17px]" />
                FR
              </span>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
