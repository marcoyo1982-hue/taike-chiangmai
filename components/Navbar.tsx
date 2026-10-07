"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menus = [
    { name: "房產", href: "/property" },
    { name: "美食", href: "/food" },
    { name: "旅遊", href: "/travels" },
    { name: "生活", href: "/life" },
    { name: "文章", href: "/articles" },
    { name: "清邁怪談", href: "/stories" },
    { name: "關於我", href: "/about" },
  ];

  return (
    <header onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }} className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/90 backdrop-blur-xl">
      <nav aria-label="主要導覽" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:h-24 lg:px-8">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="block shrink-0">
          <p className="text-[9px] uppercase tracking-[0.45em] text-emerald-600 lg:text-[11px]">
            CHIANG MAI
          </p>

          <p className="mt-0.5 text-xl font-bold tracking-tight text-gray-900 lg:mt-1 lg:text-2xl">
            台客在清邁
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-5 text-base font-semibold text-gray-700 lg:flex">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className="transition-colors hover:text-emerald-600"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* LINE */}
        <a
          href={site.personalLine}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800 lg:px-6 lg:py-3 lg:text-sm"
        >
          諮詢房產
        </a>

        <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="min-h-11 rounded-lg border border-gray-300 px-3 text-sm font-semibold lg:hidden">{open ? "關閉" : "選單"}</button>
      </nav>
      <nav id="mobile-navigation" aria-label="手機導覽" hidden={!open} className="border-t bg-white p-4 lg:hidden">
        <ul className="grid grid-cols-2 gap-2">{menus.map((menu) => <li key={menu.href}><Link href={menu.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-semibold hover:bg-emerald-50">{menu.name}</Link></li>)}</ul>
      </nav>
    </header>
  );
}
