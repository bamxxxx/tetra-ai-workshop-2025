import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <Badge className="mb-4 bg-accent text-white">
              Course begins January 10, 2025
            </Badge>
            <h1 className="heading-xl mb-6">
              AI for Research & Insights Workshop
            </h1>
            <p className="body-lg mb-8">
              12 Weeks to Become an AI Power User
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Register before December 7th to get $500 off using code EARLY500
            </p>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Course Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "12 Live Learning Sessions",
                description: "Weekly 2-hour deep dives into AI fundamentals",
              },
              {
                icon: "💡",
                title: "12 Live Q&A Sessions",
                description: "Weekly 90-minute interactive sessions",
              },
              {
                icon: "🎓",
                title: "Optional Certification",
                description: "Earn your AI Power User credential",
              },
              {
                icon: "🔧",
                title: "Hands-on Skills",
                description: "Practice with real-world scenarios",
              },
            ].map((highlight, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-lg mb-12">Simple, Transparent Pricing</h2>
            <Card className="glass-card p-8">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-3xl font-bold">$999</span>
                <span className="text-muted-foreground line-through">$1,499</span>
              </div>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                Secure Your Spot
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                100% Money-Back Guarantee
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="heading-lg text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {[
              {
                question: "Who is this course for?",
                answer:
                  "This course is ideal for professionals in research, UX/CX, product management, or design who want to enhance their AI skills.",
              },
              {
                question: "What if I can't attend the live training sessions?",
                answer: "All sessions are recorded and available on-demand.",
              },
              {
                question: "Is certification mandatory?",
                answer:
                  "No, it's optional and requires completing coursework and assignments.",
              },
              {
                question: "Do I need technical expertise?",
                answer:
                  "No, this workshop is for both technical and non-technical professionals.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container text-center">
          <p className="text-sm">
            Copyright © 2024 Tetra Insights, Inc. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Questions? Email us at{" "}
            <a
              href="mailto:support@tetrainsights.com"
              className="text-accent hover:underline"
            >
              support@tetrainsights.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;