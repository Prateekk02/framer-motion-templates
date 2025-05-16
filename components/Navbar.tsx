'use client'
import React , { useState } from "react";
import Link from "next/link";
import { hover, motion } from 'motion/react'

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];
  const [hovered, setHovered] = useState<number | null >(null)
  return (
    <div >
      <nav className="flex gap-2 bg-gray-200 max-w-xl mx-auto rounded-full px-2 py-1">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="w-full relative group py-3 text-center text-xs text-neutral-600"
            href={item.href}
            key={item.title}
          >
            {hovered === idx && <motion.div layoutId="hover" className="absolute inset-0 w-full h-full rounded-full bg-black"></motion.div>}
            <motion.span animate={{
                color: hovered === idx ? 'white' : 'black'
            }}
            
            className="relative z-20 ">{item.title}</motion.span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
