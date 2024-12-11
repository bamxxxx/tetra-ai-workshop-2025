import Navbar from "@/components/Navbar";
import NotificationBar from "@/components/NotificationBar";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <NotificationBar />
      <div className="pt-10">
        <Navbar />
        <div className="container max-w-6xl px-4 pt-24 pb-16">
          <div className="text-center mb-12">
            <h1 className="heading-xl mb-4">Contact Us</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Have questions about the AI Workshop or Tetra? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;