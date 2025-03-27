import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Question Paper Generation",
    description:
      "We've used LaTeX to format your question paper, ensuring seamless mathematical equation integration.",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/IA6.png"
          alt="Question Paper Generation"
          layout="fill"
          objectFit="contain"
          className="opacity-60"
          priority
        />
      </div>
    ),
    className: "lg:col-span-2 lg:row-span-2 dark:bg-white",
  },
  {
    Icon: InputIcon,
    name: "AI Question Generator from PDFs",
    description:
      "Automatically extract and generate structured questions from PDFs using AI-powered analysis.",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/ai.jpeg"
          alt="AI Question Generator"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "Admin Functionalities",
    description:
      "Manage students, courses, and academic data with an intuitive admin panel.",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/admin.png"
          alt="Admin Panel"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>
    ),
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "Evaluate Students' Marks (Coming Soon!)",
    description:
      "An upcoming feature to analyze student performance with automated evaluation.",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/evaluation.png"
          alt="Student Evaluation"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>
    ),
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const Feature = () => {
  return (
    <Section id="features" className="my-96">
      <Container className="not-prose">
        <div className="flex flex-col gap-12">
          <h2 className="text-5xl text-center !my-0">Features</h2>
          <h4 className="text-2xl font-light text-center opacity-70">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Balancer>
          </h4>

          {/* BentoGrid with optimized images */}
          <BentoGrid className="lg:grid-rows-3 gap-8 auto-rows-min">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
