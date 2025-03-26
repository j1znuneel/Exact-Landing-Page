// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRightIcon } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import ShinyText from "../ShinyText/ShinyText";

// Asset imports
import hero from "@/public/dash-2.png";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

const Hero = () => {
  return (
    <Section id="hero" className="relative pt-20 top-52">
      <Container className="py-0 flex flex-col min-h-lvh">
        <div className="flex flex-col items-center justify-center text-center flex-grow relative bottom-16">
          <div
            className={cn(
              "group rounded-full border mb-4 border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Releasing Soon!</span>
            </AnimatedShinyText>
          </div>
          <h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent 
              dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 
              bg-gradient-to-b from-neutral-900 to-neutral-600"
          >
            <Balancer>Generate Perfect Question Papers in Minutes</Balancer>
          </h1>
          <h3
            className="mt-4 font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto 
              text-neutral-700 text-muted-foreground"
          >
            <Balancer>
              Streamline your exam preparation process with our intelligent
              question paper generator.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-4 md:mt-12">
            <Button
              variant={"default"}
              effect="expandIcon"
              icon={ArrowRightIcon}
              iconPlacement="right"
              className="rounded-xl h-full text-sm"
            >
              Get Started
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="rounded-xl h-full text-sm"
            >
              <Link href="/">
                <ShinyText
                  text="Request a Demo"
                  disabled={false}
                  speed={3}
                  className="dark:text-neutral-400 text-slate-950"
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative not-prose my-8 w-full overflow-hidden rounded-lg border md:rounded-xl">
          {/* Animated beams */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Left beam */}
            <div className="absolute left-0 top-1/2 h-1 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 animate-beam-left" />

            {/* Right beam */}
            <div className="absolute right-0 top-1/2 h-1 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 animate-beam-right" />

            {/* Glow effects near image */}
            <div className="absolute left-1/3 top-1/2 h-16 w-16 bg-blue-500/30 rounded-full blur-xl animate-glow" />
            <div className="absolute right-1/3 top-1/2 h-16 w-16 bg-blue-500/30 rounded-full blur-xl animate-glow" />
          </div>

          <Image
            className="relative z-10 w-full h-auto object-cover"
            src={hero || "/placeholder.svg"}
            width={893}
            height={1873}
            alt="hero image"
            placeholder="blur"
            priority
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
