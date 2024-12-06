import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - height increased from h-8 to h-12 (50% larger) */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://llpltjjcprminnkujpaz.supabase.co/storage/v1/object/public/aiworkshopfiles/tetra_logo_color_horizontal%20(2).svg"
              alt="Tetra Logo"
              className="h-12"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-primary hover:text-accent transition-colors"
            >
              About Tetra
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
            <Button className="bg-accent hover:bg-accent/90">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;