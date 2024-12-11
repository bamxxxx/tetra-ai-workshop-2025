import Navbar from "@/components/Navbar";
import NotificationBar from "@/components/NotificationBar";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <div className="pt-10">
        <Navbar />
        <div className="pt-16">
          {/* Hero Section - Matching About page style */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/80 to-secondary" />
            <div className="container relative">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="heading-xl mb-6 text-white">Contact Us</h1>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 bg-white">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <p className="body-lg max-w-2xl mx-auto">
                  Have questions about the AI Workshop or Tetra? We're here to help!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;