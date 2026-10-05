"use client";

import Link from "next/link";
import { Menu, Plane, X } from "lucide-react";
import { useState } from "react";
import { navItems, site, whatsappMessages, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark"><Plane size={19} /></span>
          <span>
            <strong>Travel with Naresh Gadhiya</strong>
            <small>International Travel & Visa Consultancy</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="button button-gold header-cta" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
          WhatsApp Naresh
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <a href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">WhatsApp Naresh</a>
        </nav>
      )}
    </header>
  );
}
