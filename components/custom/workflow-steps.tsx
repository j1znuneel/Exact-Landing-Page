"use client"

import type React from "react"

import { useRef } from "react"
import { Section, Container } from "@/components/craft"
import { FileSpreadsheet, BrainCircuit, Settings2, FileQuestion, FileDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

type Step = {
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    title: "Seed Data",
    description:
      "Import your data manually or through CSV files to get started quickly. Flexible data input options to suit your needs.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
  },
  {
    title: "Create Questions",
    description:
      "Generate questions automatically from your notes or create them manually. Build a comprehensive question pool effortlessly.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: "Design Internal Exam",
    description:
      "Customize exam sections, question types, and settings. Create the perfect assessment structure for your needs.",
    icon: <Settings2 className="w-6 h-6" />,
  },
  {
    title: "Select Questions",
    description:
      "Choose questions from your pool to create the perfect question paper. Mix and match from different topics and difficulty levels.",
    icon: <FileQuestion className="w-6 h-6" />,
  },
  {
    title: "Download PDF",
    description: "Generate and download professionally formatted PDF question papers ready for distribution.",
    icon: <FileDown className="w-6 h-6" />,
  },
]

const WorkflowSteps = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <Section id="workflow" className="overflow-visible py-20">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 !mt-0 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            How It Works
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create professional question papers in minutes with our simple 5-step process
          </p>
        </motion.div>

        <div ref={containerRef} className="max-w-3xl mx-auto">
          {/* Stepper Container */}
          <div className="relative pl-8 md:pl-12  border-primary/20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-12 last:mb-0 relative"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Step Number and Icon */}
                <div className="absolute -left-[42px] md:-left-[52px] flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md">
                  <div className="flex items-center p-2 rounded-lg bg-primary/10 text-primary">{step.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl ml-5 font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground pl-12">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WorkflowSteps

