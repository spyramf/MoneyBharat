
import { Phone, Mail, MapPin, Clock, MessageCircle, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our financial experts",
      value: "+91 9970735694",
      action: "tel:+919970735694",
      buttonText: "Call Now",
      available: "Mon-Sat 9AM-7PM IST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed queries anytime",
      value: "contact@moneybharat.co",
      action: "mailto:contact@moneybharat.co",
      buttonText: "Send Email",
      available: "24/7 Response within 6 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick responses on your mobile",
      value: "+91 9970735694",
      action: "https://wa.me/919970735694",
      buttonText: "Chat on WhatsApp",
      available: "Mon-Sat 9AM-9PM IST"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-fintech-green to-blue-600 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6" />
            Visit Our Office
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Money Bharat Finance</h3>
              <p className="text-blue-100">
                Pune, Maharashtra, India<br />
                PIN: 411001
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <Clock className="h-5 w-5" />
              <span className="font-medium">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </span>
            </div>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-fintech-green mt-4"
              onClick={() => window.open('https://maps.google.com/?q=Pune,Maharashtra,India', '_blank')}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-fintech-green">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-fintech-green/10 rounded-lg">
                  <method.icon className="h-6 w-6 text-fintech-green" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {method.description}
                  </p>
                  <p className="font-medium text-fintech-green mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {method.available}
                  </p>
                  
                  <Button 
                    size="sm"
                    className="bg-fintech-green hover:bg-fintech-green/90"
                    onClick={() => {
                      if (method.action.startsWith('http')) {
                        window.open(method.action, '_blank');
                      } else {
                        window.location.href = method.action;
                      }
                    }}
                  >
                    {method.buttonText}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Consultation */}
      <Card className="shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="p-6 text-center">
          <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Video Consultation Available
          </h3>
          <p className="text-gray-600 mb-4">
            Schedule a face-to-face video call with our financial advisors for personalized guidance
          </p>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => window.open('/booking', '_blank')}
          >
            <Video className="h-4 w-4 mr-2" />
            Schedule Video Call
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
