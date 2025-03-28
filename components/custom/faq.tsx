import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What is Exact and how does it work?",
    answer:
      "Exact is an advanced AI-powered platform that helps businesses streamline their operations through intelligent automation. Our system learns from your data and processes to provide accurate, real-time insights and automate routine tasks.",
  },
  {
    question: "How secure is my data with Exact?",
    answer:
      "We take data security seriously. Exact employs enterprise-grade encryption, regular security audits, and complies with industry standards. Your data is stored in secure cloud infrastructure with multiple layers of protection.",
    link: "/security",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team ensures quick resolution of any issues you may encounter.",
  },
  {
    question: "Can I integrate Exact with my existing tools?",
    answer:
      "Yes, Exact offers seamless integration with popular business tools and platforms. We support APIs and webhooks for custom integrations, making it easy to connect with your existing workflow.",
  },
  {
    question: "What are the pricing plans?",
    answer:
      "We offer flexible pricing plans tailored to businesses of all sizes. From startups to enterprises, our plans include different features and capabilities to meet your specific needs.",
    link: "/pricing",
  },
];

const FAQ = () => {
  return (
    <Section id="faq" >
      <Container className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 !mt-0 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Frequently Asked Questions</h3>
          <h4 className="text-muted-foreground text-lg">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="/contact" className="text-primary hover:underline">Contact our support team</a>.
          </h4>
        </div>
        <div className="not-prose mt-4 flex flex-col gap-3 md:gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="bg-white dark:bg-slate-800/50 rounded-lg shadow-sm">
              <AccordionItem value={item.question} className="border-none px-4">
                <AccordionTrigger className="text-left hover:no-underline py-4 text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-4">
                  <div className="space-y-2">
                    {item.answer}
                    {item.link && (
                      <a
                        href={item.link}
                        className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Learn more <ArrowUpRight className="ml-1" size="16" />
                      </a>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
