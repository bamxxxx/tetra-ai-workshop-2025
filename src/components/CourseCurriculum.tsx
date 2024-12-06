import { Card, CardContent } from "@/components/ui/card";

const CURRICULUM_PILLARS = [
  {
    number: 1,
    title: "AI Fundamentals",
    description: "Build a strong foundation with essential AI concepts, understanding large language models, and prompt engineering basics.",
  },
  {
    number: 2,
    title: "Advanced Prompt Engineering Techniques",
    description: "Master advanced techniques like role-based prompting, chain prompting, and iterative refinement.",
  },
  {
    number: 3,
    title: "AI Tool Ecosystem",
    description: "Explore effective AI tools for research and insights, comparing strengths and reviewing real-world use cases.",
  },
  {
    number: 4,
    title: "Workflow Automations and Integration",
    description: "Set up end-to-end automated workflows, integrating AI tools for increased efficiency.",
  },
  {
    number: 5,
    title: "AI Data Literacy",
    description: "Learn to interpret AI-generated insights, ensuring data quality and reliability.",
  },
  {
    number: 6,
    title: "Generative AI for Research Deliverables",
    description: "Use AI to create compelling reports, summaries, and presentations.",
  },
  {
    number: 7,
    title: "Personal AI Assistant Mastery",
    description: "Configure a personal AI assistant to enhance productivity.",
  },
  {
    number: 8,
    title: "Applied Case Studies in AI for Research",
    description: "Gain hands-on experience with real-world applications of AI in research.",
  },
  {
    number: 9,
    title: "Becoming the AI Guru",
    description: "Develop skills to become the go-to AI expert in your organization, learning to teach, mentor, and support colleagues.",
  },
];

const CourseCurriculum = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="heading-lg text-center mb-8">Course Curriculum: The 9 Pillars of Mastery</h2>
        <p className="text-center text-muted-foreground mb-12">
          This workshop is structured around nine core pillars, each designed to develop a specific area of AI expertise:
        </p>
        <div className="space-y-4">
          {CURRICULUM_PILLARS.map((pillar) => (
            <Card key={pillar.number} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-accent">{pillar.number}</span>
                  <div>
                    <h3 className="font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;