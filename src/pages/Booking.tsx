
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, Calendar, Loader2 } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

const services = [
  { value: "financial-planning", label: "Financial Planning" },
  { value: "investment-consultation", label: "Investment Consultation" },
  { value: "tax-planning", label: "Tax Planning" },
  { value: "retirement-planning", label: "Retirement Planning" },
  { value: "insurance-consultation", label: "Insurance Consultation" },
  { value: "loan-consultation", label: "Loan Consultation" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Form values:", values);
    
    try {
      // Direct Supabase insertion without authentication dependencies
      const { error: supabaseError } = await supabase
        .from('bookings')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
          date: values.preferredDate,
          time: values.preferredTime,
          message: values.message || '',
          status: 'pending'
        });

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        // Continue with FormSubmit even if Supabase fails
        toast.error("Booking saved with limited functionality. Email notification will still be sent.");
      } else {
        console.log('Booking saved to Supabase successfully');
        toast.success("Booking submitted successfully!");
      }
      
      // Submit to FormSubmit for email notifications (as backup and for email functionality)
      if (formRef.current) {
        const serviceLabel = services.find(s => s.value === values.service)?.label || values.service;
        
        const serviceInput = formRef.current.querySelector('input[name="_subject"]') as HTMLInputElement;
        if (serviceInput) {
          serviceInput.value = `Booking Request: ${serviceLabel}`;
        }
        
        formRef.current.submit();
        setIsSubmitted(true);
        form.reset();
      } else {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("There was a problem submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Consultation | Money Bharat</title>
        <meta 
          name="description" 
          content="Book a free consultation with Money Bharat's financial experts. Get personalized advice on investments, insurance, tax planning, and more." 
        />
        <meta property="og:title" content="Book a Consultation | Money Bharat" />
        <meta 
          property="og:description" 
          content="Book a free consultation with Money Bharat's financial experts. Get personalized advice on investments, insurance, tax planning, and more." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.com/booking" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Book a Consultation</h1>
              <p className="text-lg text-gray-600">
                Schedule a free consultation with our financial experts to discuss your financial goals and create a personalized plan.
              </p>
            </div>
            
            {isSubmitted ? (
              <Card className="py-10">
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Booking Request Received</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking a consultation with Money Bharat. We will confirm your appointment shortly via email.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Book Another Consultation</Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form 
                      ref={formRef}
                      onSubmit={form.handleSubmit(onSubmit)}
                      action="https://formsubmit.co/spyraexim@gmail.com"
                      method="POST"
                      className="space-y-6"
                    >
                      {/* FormSubmit configuration */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_next" value={window.location.href} />
                      <input type="hidden" name="_subject" value="New Booking Request" />
                      <input type="hidden" name="_template" value="table" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} name="Full Name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} name="Email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9876543210" {...field} name="Phone Number" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service</FormLabel>
                              <Select 
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  const serviceLabel = services.find(s => s.value === value)?.label || value;
                                  const serviceInput = formRef.current?.querySelector('input[name="Service"]') as HTMLInputElement;
                                  if (serviceInput) {
                                    serviceInput.value = serviceLabel;
                                  } else {
                                    const input = document.createElement('input');
                                    input.type = 'hidden';
                                    input.name = 'Service';
                                    input.value = serviceLabel;
                                    formRef.current?.appendChild(input);
                                  }
                                }}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service.value} value={service.value}>
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <input type="hidden" name="Service" value="" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                  name="Preferred Date"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="preferredTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select 
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  const timeInput = formRef.current?.querySelector('input[name="Preferred Time"]') as HTMLInputElement;
                                  if (timeInput) {
                                    timeInput.value = value;
                                  } else {
                                    const input = document.createElement('input');
                                    input.type = 'hidden';
                                    input.name = 'Preferred Time';
                                    input.value = value;
                                    formRef.current?.appendChild(input);
                                  }
                                }}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((timeSlot) => (
                                    <SelectItem key={timeSlot} value={timeSlot}>
                                      {timeSlot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <input type="hidden" name="Preferred Time" value="" />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please share any specific topics or questions you'd like to discuss" 
                                className="resize-none"
                                rows={4}
                                {...field}
                                name="Additional Information"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        <Calendar className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Submitting..." : "Book Your Consultation"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Booking;
