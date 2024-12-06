import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckCircle, Trophy, Users } from "lucide-react";
import CourseCurriculum from "@/components/CourseCurriculum";
import WhatYouWillGain from "@/components/WhatYouWillGain";

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
      
      {/* Key Dates Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="heading-lg text-center mb-8">Key Dates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <CalendarIcon className="w-6 h-6 text-accent" />,
                title: "Course Begins",
                date: "January 10, 2025",
              },
              {
                icon: <CalendarIcon className="w-6 h-6 text-accent" />,
                title: "Early Bird Deadline",
                date: "December 7, 2024",
              },
              {
                icon: <Trophy className="w-6 h-6 text-accent" />,
                title: "Certification Assessment",
                date: "End of Course",
              },
            ].map((date, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <div className="flex justify-center mb-4">{date.icon}</div>
                <h3 className="font-bold mb-2">{date.title}</h3>
                <p className="text-muted-foreground">{date.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Risk-Free Offer */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="heading-lg mb-6">Risk-Free Offer — 100% Money-Back Guarantee</h2>
          <p className="body-lg mb-8">
            We're confident in the value of this course. If you're not completely satisfied within the first 30 days, 
            we'll refund your entire investment—no questions asked.
          </p>
          <Card className="p-8 bg-accent/10">
            <p className="text-lg font-medium">
              Risk-free enrollment: Try the course, apply the skills, and if it doesn't meet your expectations, 
              get a full refund.
            </p>
          </Card>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="heading-lg text-center mb-8">Course Overview</h2>
          <div className="space-y-6">
            <p className="body-lg">
              Are you ready to harness the power of AI to elevate your research and insights work? Whether you're a 
              researcher, designer, product manager, or UX/CX professional, this 12-week workshop will transform AI 
              from a simple tool you use into an instrument you're on your way to mastering.
            </p>
            <p className="body-lg">
              From mastering prompt engineering to setting up automated workflows, this course is designed to turn 
              you into an AI Power User, ensuring you're ready to be productive, competitive, and indispensable in 2025.
            </p>
          </div>
        </div>
      </section>
      
      {/* Course Structure & Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">Course Structure</h2>
              <ul className="space-y-4">
                {[
                  "📚 12 Comprehensive Modules",
                  "🖥️ Weekly Live Sessions",
                  "💬 Interactive Q&A",
                  "👨‍🏫 1-on-1 Coaching",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-md mb-6">Learning Outcomes</h2>
              <ul className="space-y-4">
                {[
                  "🧠 AI Fundamentals Mastery",
                  "🛠️ Practical Tool Proficiency",
                  "🚀 Workflow Optimization",
                  "🏆 Optional Certification",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Gain Section */}
      <WhatYouWillGain />
      
      {/* Who Should Enroll */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Who Should Enroll?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Researchers",
              "Designers",
              "Product Managers",
              "UX/CX Professionals",
            ].map((role, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <Users className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-bold">{role}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="heading-lg text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "12 Live Learning Sessions",
                description: "Weekly 2-hour deep dives into AI fundamentals and advanced practices.",
              },
              {
                title: "12 Live Q&A Sessions",
                description: "Weekly 90-minute sessions for direct answers to your questions.",
              },
              {
                title: "3 Private Coaching Sessions",
                description: "Three 30-minute one-on-one sessions to address your specific challenges.",
              },
              {
                title: "Exclusive Resources",
                description: "Hundreds of templates, guides, and materials to accelerate your learning.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover-scale">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <CourseCurriculum />
      
      {/* About the Instructor */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="heading-lg mb-8">About the Instructor</h2>
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Michael Bamberger</h3>
              <p className="text-muted-foreground">Founder & CEO, Tetra Insights</p>
            </div>
            <p className="body-lg italic">
              "My goal is to advance AI literacy and skill development, ensuring students gain real, 
              actionable skills that can immediately enhance their work."
            </p>
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
