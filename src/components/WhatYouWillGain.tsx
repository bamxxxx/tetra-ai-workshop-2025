import { Award, GraduationCap, Rocket, Users } from "lucide-react";
import { Card } from "./ui/card";

const WhatYouWillGain = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Essential AI Skills",
      description:
        "Master cutting-edge AI tools and techniques tailored for research, UX, CX, and product management professionals.",
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Competitive Edge",
      description:
        "Become the go-to AI expert in your organization, securing your position in a rapidly evolving field.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Confidence and Support",
      description:
        "Benefit from live sessions, personalized coaching, and extensive resources to seamlessly integrate AI into your workflow.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "AI Power User Certification",
      description:
        "Showcase your expertise with our \"AI for Research and Insights - Certified Power User\" credential. Complete optional coursework and assignments to qualify for certification.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="heading-lg text-center mb-12">What You'll Gain</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover-scale">
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="font-bold text-xl mt-4 mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillGain;