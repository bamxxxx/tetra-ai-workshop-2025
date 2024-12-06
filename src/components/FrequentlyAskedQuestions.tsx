import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: "Who is this course for?",
      answer: "This course is ideal for professionals in research, UX/CX, product management, or design who want to enhance their AI skills. No technical background is required—just a passion for growth and a desire to leverage AI in your work. By the end of the course, you'll be confident in your AI expertise and able to lead your team into the future.",
    },
    {
      question: "What if I can't attend the live training sessions?",
      answer: "Don't worry! All sessions are recorded and made available immediately after. You can also schedule your private coaching sessions at a time that suits you.",
    },
    {
      question: "Is certification mandatory?",
      answer: "No, certification is optional. However, if you're seeking certification, you'll need to complete the optional coursework and assignments.",
    },
    {
      question: "Do I need technical expertise?",
      answer: "Not at all! This workshop caters to both technical and non-technical professionals. We start with fundamentals and progressively build up to advanced skills using hands-on, practical examples.",
    },
    {
      question: "How much time should I allocate each week?",
      answer: "Plan for the weekly 2-hour live session and 90-minute Q&A. Additional time for coursework and practice varies by participant, with optional assignments for those pursuing certification.",
    },
    {
      question: "Will I have access to resources after the course?",
      answer: "Yes, you'll retain access to all templates, guides, recorded sessions, and materials. This allows you to revisit key concepts and apply your knowledge long after the workshop ends.",
    },
    {
      question: "What if I need additional support?",
      answer: "You'll have access to our dedicated support team throughout the workshop. Additionally, the private coaching sessions provide an excellent opportunity to address specific challenges or questions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl">
        <h2 className="heading-lg text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;