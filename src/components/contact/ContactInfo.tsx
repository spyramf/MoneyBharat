
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
    <div className="space-y-4">
      <Card className="shadow-md border border-gray-200 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Visit Our Office
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h3 className="font-medium">Money Bharat Finance</h3>
            <p className="text-sm text-blue-50 mt-1">
              Pune, Maharashtra, India<br />
              PIN: 411001
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
          </div>
          
          <Button 
            size="sm"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium"
            onClick={() => window.open('https://maps.google.com/?q=Pune,Maharashtra,India', '_blank')}
          >
            Get Directions
          </Button>
        </CardContent>
      </Card>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-cyan-50 rounded-lg flex-shrink-0">
                  <method.icon className="h-5 w-5 text-cyan-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {method.description}
                  </p>
                  <p className="font-medium text-cyan-600 mb-1 text-sm">
                    {method.value}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {method.available}
                  </p>
                  
                  <Button 
                    size="sm"
                    className="bg-fintech-green hover:bg-fintech-green/90 h-9 text-sm font-medium"
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
      <Card className="shadow-md bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
        <CardContent className="p-5 text-center">
          <Video className="h-10 w-10 text-purple-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            Video Consultation Available
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Schedule a face-to-face video call with our financial advisors for personalized guidance
          </p>
          <Button 
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white h-9 font-medium"
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
