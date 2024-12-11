import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="glass-card p-8 rounded-lg space-y-6">
        <h2 className="heading-md">Get in Touch</h2>
        <p className="text-muted-foreground">
          We'd love to hear from you. Please reach out through any of these channels:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-accent" />
            <a href="tel:+13473542969" className="hover:text-accent transition-colors">
              (347) 354-2969
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-accent" />
            <a href="mailto:support@tetrainsights.com" className="hover:text-accent transition-colors">
              support@tetrainsights.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;