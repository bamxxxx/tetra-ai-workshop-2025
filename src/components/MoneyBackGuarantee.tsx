import { Card } from "./ui/card";

const MoneyBackGuarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl text-center">
        <h2 className="heading-lg mb-6">Risk-Free Offer — 100% Money-Back Guarantee</h2>
        <p className="body-lg mb-8">
          We're confident in the value of this course. If you're not completely satisfied within the first 30 days, 
          we'll refund your entire investment—no questions asked.
        </p>
        <Card className="p-8 bg-accent/10">
          <div className="flex items-center gap-6">
            <img 
              src="/lovable-uploads/da876674-a975-4fb2-bccf-79d76a01eb16.png" 
              alt="100% Money Back Guarantee" 
              className="w-24 h-24 object-contain"
            />
            <p className="text-lg font-medium text-left">
              Risk-free enrollment: Try the course, apply the skills, and if it doesn't meet your expectations, 
              get a full refund.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;