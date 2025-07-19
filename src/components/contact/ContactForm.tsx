
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      serviceType: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <Send className="h-6 w-6 text-fintech-green" />
          Send us a Message
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we'll get back to you as soon as possible
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="h-12"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Interest</Label>
              <Select onValueChange={(value) => handleChange('serviceType', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="loans">Loans</SelectItem>
                  <SelectItem value="financial-planning">Financial Planning</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Brief subject of your inquiry"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              required
              className="h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about how we can help you..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              required
              className="min-h-[120px] resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-fintech-green hover:bg-fintech-green/90 text-white h-12 text-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
