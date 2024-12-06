import { CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const CourseStructureAndOutcomes = () => {
  const courseStructure = [
    { icon: "📚", text: "12 Comprehensive Modules" },
    { icon: "🖥️", text: "Weekly Live Sessions" },
    { icon: "💬", text: "Interactive Q&A" },
    { icon: "👨‍🏫", text: "1-on-1 Coaching" },
  ];

  const learningOutcomes = [
    { icon: "🧠", text: "AI Fundamentals Mastery" },
    { icon: "🛠️", text: "Practical Tool Proficiency" },
    { icon: "🚀", text: "Workflow Optimization" },
    { icon: "🏆", text: "Optional Certification" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="heading-md mb-6">Course Structure</h2>
            <ul className="space-y-4">
              {courseStructure.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent shrink-0" />
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="heading-md mb-6">Learning Outcomes</h2>
            <ul className="space-y-4">
              {learningOutcomes.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent shrink-0" />
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseStructureAndOutcomes;