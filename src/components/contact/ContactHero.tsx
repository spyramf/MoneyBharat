
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-fintech-green to-blue-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get in <span className="text-yellow-300">Touch</span> with Our
            <br />Financial Experts
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Ready to transform your financial future? Our certified advisors are here to help you with personalized investment strategies, insurance solutions, and loan assistance.
          </p>
          
          {/* Quick contact info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">+91 9970735694</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">contact@moneybharat.co</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">Pune, Maharashtra</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">Mon-Sat 9AM-7PM</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg"
              >
                Book Free Consultation
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-fintech-green px-8 py-3 text-lg"
              onClick={() => window.open('https://wa.me/919970735694', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
