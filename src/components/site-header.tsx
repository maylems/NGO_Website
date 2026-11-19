"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons";

type NavLink = {
  label: string;
  href: string;
};

type DropdownItem = {
  label: string;
  items: NavLink[];
};

type MegaMenuItem = {
  label: string;
  columns: { title: string; items: NavLink[] }[];
};

type DirectItem = {
  label: string;
  href: string;
};

type NavItem = DropdownItem | MegaMenuItem | DirectItem;

function isDropdown(item: NavItem): item is DropdownItem {
  return "items" in item;
}

function isMega(item: NavItem): item is MegaMenuItem {
  return "columns" in item;
}

const navItems: NavItem[] = [
  {
    label: "L'organisation",
    items: [
      { label: "Qui sommes-nous ?", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Notre mission et notre vision", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Notre histoire", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Notre gouvernance & équipe", href: "/#contact" },
      { label: "Nos valeurs", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Nos partenaires institutionnels", href: "/#nos-partenaires" },
      { label: "Notre présence géographique", href: "/#contact" },
    ],
  },
  {
    label: "Domaines d'intervention",
    columns: [
      {
        title: "Urgence & Social",
        items: [
          { label: "Action humanitaire", href: "/#nos-actions-carousel" },
          { label: "Santé et nutrition", href: "/#nos-actions-carousel" },
          { label: "Eau, hygiène et assainissement", href: "/#nos-actions-carousel" },
          { label: "Protection des populations", href: "/#nos-actions-carousel" },
        ],
      },
      {
        title: "Développement & Résilience",
        items: [
          { label: "Éducation et formation", href: "/#nos-actions-carousel" },
          { label: "Autonomisation des communautés", href: "/#nos-actions-carousel" },
          { label: "Développement durable", href: "/#nos-actions-carousel" },
          { label: "Environnement et résilience", href: "/#nos-actions-carousel" },
        ],
      },
    ],
  },
  {
    label: "Actions & Ressources",
    items: [
      { label: "Nos projets", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Nos réalisations", href: "https://peacebyafrica.com/achdr-fr/" },
      { label: "Actualités & Communiqués", href: "/#publications" },
      { label: "Publications & Rapports d'activités", href: "/publications" },
      { label: "Galerie photos & vidéos", href: "https://peacebyafrica.com/achdr-fr/" },
    ],
  },
  {
    label: "Nous rejoindre",
    items: [
      {
        label: "Devenir partenaire",
        href: "mailto:achdr015@gmail.com?subject=Devenir%20partenaire%20de%20l%27ACHDR",
      },
      {
        label: "Soutenir nos actions",
        href: "mailto:achdr015@gmail.com?subject=Soutenir%20l%27ACHDR",
      },
      { label: "Faire un don", href: "mailto:achdr015@gmail.com?subject=Faire%20un%20don" },
      {
        label: "Devenir bénévole",
        href: "mailto:achdr015@gmail.com?subject=Devenir%20b%C3%A9n%C3%A9vole",
      },
      {
        label: "Opportunités et carrières",
        href: "mailto:achdr015@gmail.com?subject=Opportunit%C3%A9s%20et%20carri%C3%A8res",
      },
    ],
  },
  {
    label: "Contact & FAQ",
    href: "/#contact",
  },
];

function NavAnchor({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktopMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileAccordion(null);
  };

  return (
    <header
      ref={headerRef}
      className="w-full border-b border-[#E5E5E5] bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex min-w-0 items-center gap-6">
            <Logo />
            <div className="hidden min-w-0 sm:block">
              <p className="text-[22px] font-bold leading-[1.2] text-[#161616]">ACHDR</p>
              <p className="mt-1 text-[14.5px] font-normal text-[#3A3A3A]">
                Association pour l’Action Humanitaire et le Développement Durable
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:achdr015@gmail.com?subject=Faire%20un%20don"
              className="hidden rounded-[4px] bg-accent px-[18px] py-2 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark lg:inline-flex"
            >
              Faire un don
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex items-center justify-center rounded-[4px] p-2 text-[#161616] hover:bg-[#F5F5F5] lg:hidden"
            >
              {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden w-full border-t border-[#E5E5E5] lg:block">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav aria-label="Navigation principale" className="flex h-[52px] items-center gap-8">
            {navItems.map((item) => {
              if (!isDropdown(item) && !isMega(item)) {
                return (
                  <NavAnchor
                    key={item.label}
                    href={item.href}
                    className="flex h-full items-center border-b-2 border-transparent text-[15px] font-medium text-[#161616] transition-colors hover:border-[#000091]"
                  >
                    {item.label}
                  </NavAnchor>
                );
              }

              const open = openDesktopMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative flex h-full"
                  onMouseEnter={() => setOpenDesktopMenu(item.label)}
                  onMouseLeave={() => setOpenDesktopMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="menu"
                    onClick={() => setOpenDesktopMenu(open ? null : item.label)}
                    className={`flex h-full items-center gap-2 border-b-2 text-[15px] font-medium text-[#161616] transition-colors ${
                      open ? "border-[#000091]" : "border-transparent hover:border-[#000091]"
                    }`}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  {open && isDropdown(item) && (
                    <div className="absolute left-0 top-full z-50 min-w-[280px] border border-[#E5E5E5] bg-white px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                      <ul className="flex flex-col gap-[10px]">
                        {item.items.map((link) => (
                          <li key={link.label}>
                            <NavAnchor
                              href={link.href}
                              className="block text-[14px] text-[#161616] hover:text-[#000091]"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              {link.label}
                            </NavAnchor>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {open && isMega(item) && (
                    <div className="absolute left-0 top-full z-50 w-[560px] border border-[#E5E5E5] bg-white px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                      <div className="grid grid-cols-2 gap-8">
                        {item.columns.map((col) => (
                          <div key={col.title}>
                            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#3A3A3A]">
                              {col.title}
                            </p>
                            <ul className="flex flex-col gap-[10px]">
                              {col.items.map((link) => (
                                <li key={link.label}>
                                  <NavAnchor
                                    href={link.href}
                                    className="block text-[14px] text-[#161616] hover:text-[#000091]"
                                    onClick={() => setOpenDesktopMenu(null)}
                                  >
                                    {link.label}
                                  </NavAnchor>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-4">
            <div className="flex items-center gap-4">
              <Logo />
              <span className="text-[18px] font-bold text-[#161616]">ACHDR</span>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Fermer le menu"
              className="inline-flex items-center justify-center rounded-[4px] p-2 text-[#161616] hover:bg-[#F5F5F5]"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                if (!isDropdown(item) && !isMega(item)) {
                  return (
                    <li key={item.label} className="border-b border-[#E5E5E5]">
                      <NavAnchor
                        href={item.href}
                        className="flex items-center justify-between py-4 text-[16px] font-medium text-[#161616]"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </NavAnchor>
                    </li>
                  );
                }

                const expanded = openMobileAccordion === item.label;
                const links: { label: string; href: string; group?: string }[] = isMega(item)
                  ? item.columns.flatMap((col) =>
                      col.items.map((l) => ({ ...l, group: col.title })),
                    )
                  : item.items;

                return (
                  <li key={item.label} className="border-b border-[#E5E5E5]">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setOpenMobileAccordion(expanded ? null : item.label)
                      }
                      className="flex w-full items-center justify-between py-4 text-left text-[16px] font-medium text-[#161616]"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded && (
                      <ul className="pb-4 pl-2">
                        {isMega(item)
                          ? item.columns.map((col) => (
                              <li key={col.title} className="mb-3 last:mb-0">
                                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#3A3A3A]">
                                  {col.title}
                                </p>
                                <ul className="flex flex-col gap-2 pl-1">
                                  {col.items.map((link) => (
                                    <li key={link.label}>
                                      <NavAnchor
                                        href={link.href}
                                        className="block py-1 text-[14px] text-[#161616]"
                                        onClick={closeMobile}
                                      >
                                        {link.label}
                                      </NavAnchor>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))
                          : links.map((link) => (
                              <li key={link.label}>
                                <NavAnchor
                                  href={link.href}
                                  className="block py-2 text-[14px] text-[#161616]"
                                  onClick={closeMobile}
                                >
                                  {link.label}
                                </NavAnchor>
                              </li>
                            ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-[#E5E5E5] p-6">
            <a
              href="mailto:achdr015@gmail.com?subject=Faire%20un%20don"
              className="flex w-full items-center justify-center rounded-[4px] bg-accent px-[18px] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
              onClick={closeMobile}
            >
              Faire un don
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
