import { Award, BookOpen, Users } from "lucide-react";
import { Card } from "./ui/card";

const AboutInstructor = () => {
  const expertise = [
    {
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      text: "Industry-leading research and insights platform development",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      text: "Practical, hands-on teaching methods",
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      text: "Bridging technical and strategic aspects of AI in research",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="heading-lg mb-8">About the Instructor</h2>
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Michael Bamberger</h3>
            <p className="text-muted-foreground">Founder & CEO, Tetra Insights</p>
          </div>
          
          <div className="space-y-6">
            <p className="body-lg">
              Michael is a recognized thought leader in AI and research technology, with extensive 
              experience in designing and implementing AI solutions for enterprise research.
            </p>
            
            <Card className="p-6">
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <p className="body-lg">
              Known for his approachable style, Michael has empowered countless professionals 
              and organizations to harness AI's potential in transforming their work. His mission 
              is to equip every student with the tools needed to excel in the competitive world 
              of research and insights.
            </p>
            
            <p className="body-lg italic">
              "My goal is to advance AI literacy and skill development, ensuring students gain real, 
              actionable skills that can immediately enhance their work."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;