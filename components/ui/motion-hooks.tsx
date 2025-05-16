"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { IconRocket } from "@tabler/icons-react";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";

export default function MotionHooksExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundColorList = [
    "#2C3E50", // Dark desaturated blue-gray
    "#00695C", // Deep teal green
    "#A65F2B", // Burnt peach
    "#6A5B8C", // Dusty lavender
    "#2E7D32", // Forest green
    "#880E4F", // Deep pink
    "#00796B", // Deep aqua
    "#8D6E63", // Muted warm brown
  ];

  const [backgroundColor, setBackgroundColor] = useState(
    backgroundColorList[0]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * (backgroundColorList.length));
    setBackgroundColor(backgroundColorList[finalValue]);
    console.log("Latest Value --> ", finalValue);
  });
  return (
    <motion.div
      animate={{
        backgroundColor,
      }}      
      ref={containerRef}
      className="flex items-center justify-content min-h-screen bg-neutral-900"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature, idx) => (
          <Card2 key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card2 = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when element = start and viewport = end --> we want the scroll tracking to sta  rt
  });

  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     console.log("Changed values ", latest)
  //   })

  const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacityContent = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]), {
    stiffness:200,
    damping: 20,
    mass: 2.5
  });
  const scaleContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 0.5]
  );
  const blurContent = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [10, 0, 0, 10]
  );
  return (
    <>
      <div
        ref={ref}
        key={feature.title}
        className="grid grid-cols-2 gap-20 items-center py-40"
      >
        <motion.div
          style={{
            filter: useMotionTemplate`blur(${blurContent}px)`,
          }}
          className="flex flex-col gap-5"
        >
          {feature.icon}
          <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
          <p className="text-neutral-400 text-lg">{feature.description}</p>
        </motion.div>
        <motion.div
          style={{
            y: translateContent,
            opacity: opacityContent,
            scale: scaleContent,
          }}
        >
          {feature.content}
        </motion.div>
      </div>
    </>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Replicate great Art",
    description:
      "Generate the painting or renowned artists, like Van Gough or Monet.",
    content: (
      <div className="">
        <Image
          src="/img1.jpg"
          alt="Abstract painting in the style of famous artists"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Stunning Nature Scenes",
    description:
      "Create breathtaking natural landscapes from serene beaches to majestic mountains.",
    content: (
      <div className="">
        <Image
          src="/img2.jpg"
          alt="Beautiful summer nature landscape with mountains and lake"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Futuristic Technology",
    description:
      "Generate cutting-edge technology visuals perfect for modern digital projects.",
    content: (
      <div className="">
        <Image
          src="/img3.jpg"
          alt="Futuristic technology concept with glowing elements"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Abstract Compositions",
    description:
      "Create unique abstract visuals with vibrant colors and dynamic patterns.",
    content: (
      <div className="">
        <Image
          src="/img4.jpg"
          alt="Colorful abstract painting with fluid patterns"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Urban Landscapes",
    description:
      "Generate stunning cityscape views from around the world, day or night.",
    content: (
      <div className="">
        <Image
          src="/img5.jpg"
          alt="Dramatic cityscape with modern skyscrapers at twilight"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Wildlife Portraits",
    description:
      "Create realistic images of animals in their natural habitats.",
    content: (
      <div className="">
        <Image
          src="/img6.jpg"
          alt="Group of wild animals in a natural safari setting"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Creative Objects",
    description:
      "Generate unique compositions of everyday objects with artistic flair.",
    content: (
      <div className="">
        <Image
          src="/img7.jpg"
          alt="Artistic arrangement of random everyday objects"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Expressive Portraits",
    description:
      "Create stunning portrait photography with different moods and settings.",
    content: (
      <div className="">
        <Image
          src="/img8.jpg"
          alt="Expressive portrait photography with natural lighting"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];
