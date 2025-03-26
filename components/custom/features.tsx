// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// BentoGrid imports
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

// Icon imports
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
      "We've used LaTeX to format your question paper,hence there won't be any issue in adding mathematical equations to your exams",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/IA6.png"
          className="w-full h-full object-contain opacity-60"
        />
      </div>
    ),
    className: "lg:col-span-2 lg:row-span-2 dark:bg-white", // Bigger block
  },
  {
    Icon: InputIcon,
    name: "AI Question Generator from PDFs",
    description:
      "Automatically extract and generate structured questions from PDF documents using AI-powered analysis.",
    href: "/",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/ai.jpeg" className="w-full h-full object-cover opacity-80" />
      </div>
    ),
    className: "lg:col-span-1 lg:row-span-1", // Standard square
  },
  {
    Icon: GlobeIcon,
    name: "Admin Functionalities",
    description:
      "Easily manage students, courses, and other academic entities with a powerful admin panel.",
    href: "/",
    background: <img className="absolute -right-10 -top-10 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-2", // Tall rectangle
  },
  {
    Icon: CalendarIcon,
    name: "Evaluate Students' Marks (Coming Soon!)",
    description:
      "A smart evaluation system to analyze and assess students' performance. Stay tuned for this exciting feature!",
    href: "/",
    background: <img className="absolute -right-10 -top-10 opacity-60" />,
    className: "lg:col-span-2 lg:row-span-1", // Wide rectangle
  },
];

const Feature = () => {
  return (
    <Section id="features" className="my-96">
      <Container className="not-prose">
        <div className="flex flex-col gap-12">
          {" "}
          {/* Increased gap */}
          <h2 className="text-5xl text-center !my-0">Features</h2>
          <h4 className="text-2xl font-light text-center opacity-70">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Balancer>
          </h4>
          {/* BentoGrid with more spacing */}
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
