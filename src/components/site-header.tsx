"use client";

import Link from "next/link";
import { Mail, MapPin, Menu, MessageCircle, Plane, X } from "lucide-react";
import { useState } from "react";
import { navItems, site, whatsappMessages, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="contact-ribbon">
        <div className="shell contact-ribbon-inner">
          <span><MapPin size={13} /> Navi Mumbai · Serving travellers across India</span>
          <div>
            <a href={`mailto:${site.email}`}><Mail size={13} /> {site.email}</a>
            <a href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer"><MessageCircle size={13} /> {site.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <span className="brand-mark"><Plane size={20} /></span>
            <span>
              <strong>Travel with Naresh</strong>
              <small>Travel & Visa Consultancy</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <a className="button button-coral header-cta" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Let&apos;s talk
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
            <a href={`mailto:${site.email}`} onClick={() => setOpen(false)}>Email Naresh Gadhiya</a>
            <a className="mobile-whatsapp" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">WhatsApp Naresh Gadhiya</a>
          </nav>
        )}
      </header>
    </>
  );
}
