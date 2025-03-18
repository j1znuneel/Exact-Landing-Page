// React and Next.js imports
import Image from "next/image"
import Link from "next/link"

// Third-party library imports
import Balancer from "react-wrap-balancer"
import { ArrowRight, ArrowRightIcon } from "lucide-react"

// Local component imports
import { Section, Container } from "@/components/craft"
import { Button } from "@/components/ui/button"
import ShinyText from "../ShinyText/ShinyText"

// Asset imports
import hero from "@/public/exact.png"

const Hero = () => {
  return (
    <Section id="hero" className="relative pt-20 top-52 ">
      <Container className="py-0 flex flex-col min-h-lvh">
        <div className="flex flex-col items-center justify-center text-center flex-grow">
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
            <Balancer>Streamline your exam preparation process with our intelligent question paper generator.</Balancer>
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
            <Button asChild variant={"outline"} className="rounded-xl h-full text-sm">
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
        <div className="relative not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
          <Image
            className="absolute bottom-0 h-full w-full object-cover object-center"
            src={hero || "/placeholder.svg"}
            width={1920}
            height={1080}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  )
}

export default Hero

