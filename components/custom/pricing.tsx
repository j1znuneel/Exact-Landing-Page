import Balancer from "react-wrap-balancer";
import { Container, Section } from "../craft";
import { Button } from "../ui/button";
import { CircleCheck, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface PricingCardProps {
  title: "Basic" | "Standard" | "Pro";
  price: string;
  description?: string;
  features: string[];
  cta: string;
  href: string;
  isPopular?: boolean;
}

// Enhanced pricing data
const pricingData: PricingCardProps[] = [
  {
    title: "Basic",
    price: "$29/month",
    description: "Perfect for small businesses and individuals.",
    features: ["3 Pages", "Basic SEO", "Email Support", "Responsive Design"],
    cta: "Choose Basic",
    href: "https://stripe.com/",
  },
  {
    title: "Standard",
    price: "$59/month",
    description: "Best for growing businesses with more needs.",
    features: [
      "10 Pages",
      "Advanced SEO",
      "CMS Integration",
      "24/7 Chat Support",
    ],
    cta: "Choose Standard",
    href: "https://stripe.com/",
    isPopular: true,
  },
  {
    title: "Pro",
    price: "$99/month",
    description: "Ideal for larger businesses that need scalability.",
    features: [
      "Unlimited Pages",
      "E-commerce Integration",
      "Priority Support",
      "Custom API Integration",
    ],
    cta: "Choose Pro",
    href: "https://stripe.com/",
  },
];

const Pricing = () => {
  return (
    <Section id="pricing" className="relative overflow-visible">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/30 to-emerald-500/30 blur-3xl" />
      </div>

      <Container className="relative flex flex-col items-center gap-4 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            Simple Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <Balancer>
              Choose the perfect plan for your needs. No hidden fees.
            </Balancer>
          </p>
        </div>

        <div className="not-prose mt-4 grid grid-cols-1 gap-8 min-[850px]:grid-cols-3">
          {pricingData.map((plan, index) => (
            <PricingCard plan={plan} key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const PricingCard = ({ plan }: { plan: PricingCardProps }) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 ${
        plan.isPopular
          ? "border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-500/20"
          : "border-border"
      } bg-card p-8 transition-transform duration-300 hover:scale-105`}
    >
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-purple-500 text-white dark:bg-purple-400 px-4 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center">
        <Badge
          variant={plan.isPopular ? "secondary" : "outline"}
          className="text-sm font-medium"
        >
          {plan.title}
        </Badge>

        <div className="mt-6 flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">{plan.price.split("/")[0]}</span>
          <span className="text-muted-foreground">/month</span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="my-8 border-t border-border"></div>

      <ul className="space-y-4 text-left mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm">
            <CircleCheck className="mr-3 h-5 w-5 text-green-500 dark:text-green-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link href={plan.href} target="_blank" className="block w-full">
          <Button
            size="lg"
            variant={plan.isPopular ? "default" : "outline"}
            className={`w-full text-base font-medium ${
              plan.isPopular
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                : ""
            }`}
          >
            {plan.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
