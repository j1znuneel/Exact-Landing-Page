import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Section } from "../craft";
import Balancer from "react-wrap-balancer";

const testimonials = [
  {
    text: "I was amazed by the quality of service. The team was professional, courteous, and efficient throughout.",
    name: "Dr. Mithun AV",
    role: "HOD, Computer Science Department, Nehru Arts and Science College, Kanhangad",
    image: "/avmithun.jpg",
  },
  {
    text: "The level of expertise and attention to detail demonstrated by the team was truly impressive. I would highly recommend their services to anyone.",
    name: "Ramya K",
    role: "Guest Lecturer, Computer Science Department, Nehru Arts and Science College, Kanhangad",
    image: "/ramya.jpg",
  },
];

export default function Testimonial() {
  return (
    <Section id="testimonial" className=" flex flex-col justify-center items-center w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl my-5">What People Are Saying</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what educators and
          professionals have to say about our services and commitment to
          excellence.
        </p>
      </div>

      <div className="w-full max-w-sm mx-auto flex items-center justify-center relative">
        <Carousel className="relative w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="grid items-center justify-center p-6">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10 relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>{testimonial.name}</div>
                        <div className="text-sm font-extralight text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Position arrows inside the carousel area */}
          <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 md:-left-10" />
          <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 md:-right-10" />
        </Carousel>
      </div>
    </Section>
  );
}
