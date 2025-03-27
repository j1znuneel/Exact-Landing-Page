"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRightIcon } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import ShinyText from "../ShinyText/ShinyText";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import hero from "@/public/dash-2.png";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <Section id="hero" className="relative pt-20 top-52">
      <Container className="py-0 flex flex-col min-h-lvh">
        {/* Light beam effect */}
        <div className="absolute left-0 right-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="relative"
          >
            {/* Main beam */}
            <div
              className="absolute left-[-10%] right-[-10%] h-[2px] top-[40vh] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent 
              shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_8px_rgba(59,130,246,0.4)] z-0"
            />

            {/* Secondary glow effect */}
            <div
              className="absolute left-[-10%] right-[-10%] h-[1px] top-[40vh] translate-y-[3px] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent 
              shadow-[0_0_10px_3px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_5px_rgba(59,130,246,0.2)] blur-[2px] z-0"
            />

            {/* Animated particles along the beam */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                repeatType: "loop",
              }}
              className="absolute left-0 top-[40vh] w-[50px] h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent 
                shadow-[0_0_8px_3px_rgba(59,130,246,0.6)] blur-[1px] z-0"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center text-center flex-grow relative bottom-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={cn(
              "group rounded-full border mb-4 border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Releasing Soon!</span>
            </AnimatedShinyText>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent 
              dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 
              bg-gradient-to-b from-neutral-900 to-neutral-600"
          >
            <Balancer>Generate Perfect Question Papers in Minutes</Balancer>
          </motion.h1>

          <motion.h3
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-4 font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto 
              text-neutral-700 text-muted-foreground"
          >
            <Balancer>
              Streamline your exam preparation process with our intelligent
              question paper generator.
            </Balancer>
          </motion.h3>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="not-prose mt-6 flex gap-4 md:mt-12"
          >
            <InteractiveHoverButton className="dark:bg-blue-600 border-none">See it in Action</InteractiveHoverButton>
          </motion.div>
        </div>

        {/* Image with slight fade-in animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative not-prose my-8 w-full overflow-hidden rounded-lg border md:rounded-xl z-10"
        >
          <Image
            className="relative z-10 w-full h-auto object-cover"
            src={hero || "/placeholder.svg"}
            width={893}
            height={1873}
            alt="hero image"
            placeholder="blur"
            priority
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
