"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'motion/react';

// Custom Hook for closing the card
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    const handleClick = (event: MouseEvent) =>{
      if(ref.current && !ref.current.contains(event.target as Node)){
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () =>{
      document.removeEventListener("click", handleClick);
    };

  }, [callback])

  return ref;
}

export default function LayoutCard() {

  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div  className="py-10 bg-gray-300 min-h-screen relative">
      {current && <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-lg"> </div>}
      {current && (
        <motion.div layoutId={`card-${current.title}`} ref={ref} className="max-h-fit fixed inset-0 m-auto z-20 bg-white w-80 rounded-2xl border border-neutral-200 p-4 flex flex-col items-center">
          <div className="flex justify-center w-full">
            <motion.div layoutId={`card-image-${current.title}`}>
              <Image
              src={current.src}
              alt={current.title}
              className="h-60 aspect-square rounded-xl object-cover"
              width={240}
              height={240}
            />
            </motion.div>
          </div>

          <div className="flex justify-between items-center w-full mt-4 p-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xs tracking-tight text-black">
                {current.title}
              </h2>
              <p className="text-xs text-neutral-500">{current.description}</p>
            </div>
            <Link
              href={current.ctaLink}
              className="px-2 py-1 bg-green-500 rounded-full text-xs font-medium text-white"
            >
              {current.ctaText}
            </Link>
          </div>
          <div className="w-full overflow-auto mt-5 p-3">{current.content}</div>
        </motion.div>
      )}

      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            key={card.title}
            onClick={() => setCurrent(card)}
            className="flex items-center cursor-pointer justify-between gap-4 bg-white border border-neutral-200 rounded-lg p-4"
          >
            {/* Image + Text Group */}
            <div className="flex items-center gap-4">
              <motion.div layoutId={`card-image-${card.title}`}>
                <Image
                src={card.src}
                alt={card.title}
                width={200}
                height={200}
                className="w-20 h-20 object-cover rounded-xl"
              />
              </motion.div>
              <div className="flex flex-col">
                <h2 className="text-xs font-bold tracking-tight text-black">
                  {card.title}
                </h2>
                <p className="text-xs text-neutral-500">{card.description}</p>
              </div>
            </div>

            {/* CTA Badge */}
            <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-medium text-white">
              {card.ctaText}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: React.ReactNode;
};

const cards = [
  {
    description: "Arijit Singh",
    title: "Channa Mereya",
    src: "/singer1.jpg",
    ctaText: "Play",
    ctaLink: "/parallax-hero",
    content: (
      <p className="text-md text-neutral-500">
        Experience the soul-stirring voice of Arijit Singh in{" "}
        <strong>Channa Mereya</strong>, a heartfelt ballad that captures the
        pain of unrequited love. Let the melody and lyrics tug at your emotions.
      </p>
    ),
  },
  {
    description: "Mohit Chauhan",
    title: "Kyun Na Hum Tum",
    src: "/singer2.jpg",
    ctaText: "Play",
    ctaLink: "/hover-card",
    content: (
      <p className="text-md text-neutral-500">
        Dive into the soothing vocals of Mohit Chauhan with{" "}
        <strong>Kyun Na Hum Tum</strong>, a romantic melody that paints the
        magic of togetherness and innocent love.
      </p>
    ),
  },
  {
    description: "Papon",
    title: "Moh Moh ke Dhage",
    src: "/singer3.jpg",
    ctaText: "Play",
    ctaLink: "/scroll-tracker",
    content: (
      <p className="text-md text-neutral-500">
        Lose yourself in the deep and emotional rendition of{" "}
        <strong>Moh Moh ke Dhage</strong> by Papon — a song that delicately
        expresses the bond of invisible threads tying hearts together.
      </p>
    ),
  },
];
