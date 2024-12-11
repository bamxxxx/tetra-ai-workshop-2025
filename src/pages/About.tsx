import Navbar from "@/components/Navbar";
import NotificationBar from "@/components/NotificationBar";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <div className="pt-10">
        <Navbar />
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/80 to-secondary" />
            <div className="container relative">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="heading-xl mb-6 text-white">About Tetra</h1>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16 bg-white">
            <div className="container max-w-3xl">
              <div className="space-y-12 text-left">
                {/* First Section with Illustration */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="body-lg">
                      Tetra is a research and insights platform dedicated to helping organizations deeply understand their customers, innovate with confidence, and drive meaningful growth. Through a thoughtful blend of technology, expertise, and human empathy, we empower teams to uncover nuanced user perspectives, transform raw data into actionable intelligence, and make well-informed, strategic decisions.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://llpltjjcprminnkujpaz.supabase.co/storage/v1/object/public/aiworkshopfiles/tetra_illustration.svg" 
                      alt="Tetra Insights Illustration"
                      className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Second Section */}
                <div className="space-y-6">
                  <p className="body-lg">
                    We believe that exceptional customer experiences begin with truly listening—going beyond surface-level metrics to grasp the emotions, motivations, and contexts that shape people's choices. Our platform simplifies the entire research process, from study design and data collection to analysis and reporting. By weaving together qualitative and quantitative insights, Tetra enables businesses to quickly refine ideas, validate assumptions, and ensure that every product, service, or campaign resonates genuinely with its intended audience.
                  </p>
                </div>

                {/* Third Section */}
                <div className="space-y-6">
                  <p className="body-lg">
                    At the heart of Tetra is a passionate team of researchers, technologists, and thought leaders who share a singular mission: to bridge the gap between organizations and the real people they serve. With years of experience guiding companies of all sizes—ranging from early-stage startups to established global brands—we've cultivated a supportive ecosystem that fosters learning, innovation, and sustainable growth.
                  </p>
                </div>

                {/* Fourth Section */}
                <div className="space-y-6">
                  <p className="body-lg">
                    Our workshops and training programs, including the one featured here, are an extension of that mission. They're designed to equip you with the tools, strategies, and confidence to leverage insights across every stage of product and experience development. When you partner with Tetra, you gain a trusted ally committed to not only improving how you gather and use customer information, but also to inspiring a human-centered culture of innovation within your organization.
                  </p>
                </div>

                {/* Final Statement */}
                <p className="body-lg font-semibold text-accent text-center">
                  Together, let's elevate your understanding and build better experiences—one insight at a time.
                </p>
              </div>
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
      </div>
    </div>
  );
};

export default AboutPage;