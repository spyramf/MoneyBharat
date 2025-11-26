
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  insuranceType: z.enum(["health", "term", "vehicle", "home", "life"]),
  additionalDetails: z.object({
    // Health insurance fields
    numberOfPeople: z.string().optional(),
    ageOfOldestPerson: z.string().optional(),
    
    // Vehicle insurance fields
    vehicleType: z.string().optional(),
    vehicleModel: z.string().optional(),
    vehicleYear: z.string().optional(),
    
    // Term insurance fields
    coverageAmount: z.string().optional(),
    termPeriod: z.string().optional(),
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface InsuranceQuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultInsuranceType?: string;
}

const InsuranceQuoteForm = ({ 
  open, 
  onOpenChange,
  defaultInsuranceType = "health" 
}: InsuranceQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      insuranceType: defaultInsuranceType as "health" | "term" | "vehicle" | "home" | "life",
      additionalDetails: {},
      message: "",
    },
  });

  const watchInsuranceType = form.watch("insuranceType");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        
        // Add all the form values to formData
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([nestedKey, nestedValue]) => {
              if (nestedValue) {
                formData.append(`${key}.${nestedKey}`, nestedValue.toString());
              }
            });
          } else if (value) {
            formData.append(key, value.toString());
          }
        });
        
        // Submit form using FormSubmit
        await fetch("https://formsubmit.co/spyraexim@gmail.com", {
          method: "POST",
          body: formData,
        });
        
        toast({
          title: "Quote Request Submitted",
          description: "We'll get back to you with a personalized quote shortly!",
        });
        
        form.reset();
        setCurrentStep(1);
        onOpenChange(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };
  
  const renderAdditionalFields = () => {
    switch (watchInsuranceType) {
      case "health":
        return (
          <>
            <FormField
              control={form.control}
              name="additionalDetails.numberOfPeople"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of people to insure</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of people" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5">5+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalDetails.ageOfOldestPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age of oldest person</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-18">0-18 years</SelectItem>
                        <SelectItem value="19-30">19-30 years</SelectItem>
                        <SelectItem value="31-45">31-45 years</SelectItem>
                        <SelectItem value="46-60">46-60 years</SelectItem>
                        <SelectItem value="60+">60+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      
      case "vehicle":
        return (
          <>
            <FormField
              control={form.control}
              name="additionalDetails.vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="bike">Two Wheeler</SelectItem>
                        <SelectItem value="commercial">Commercial Vehicle</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalDetails.vehicleModel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Make & Model</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Honda City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalDetails.vehicleYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufacturing Year</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 2020" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      
      case "term":
      case "life":
        return (
          <>
            <FormField
              control={form.control}
              name="additionalDetails.coverageAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coverage Amount</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coverage amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10L">₹10 Lakhs</SelectItem>
                        <SelectItem value="25L">₹25 Lakhs</SelectItem>
                        <SelectItem value="50L">₹50 Lakhs</SelectItem>
                        <SelectItem value="1Cr">₹1 Crore</SelectItem>
                        <SelectItem value="2Cr+">₹2+ Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalDetails.termPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Term Period</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select term period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      
      case "home":
        return (
          <>
            <FormField
              control={form.control}
              name="additionalDetails.coverageAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Value</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property value" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25L">Up to ₹25 Lakhs</SelectItem>
                        <SelectItem value="50L">₹25-50 Lakhs</SelectItem>
                        <SelectItem value="1Cr">₹50 Lakhs - 1 Crore</SelectItem>
                        <SelectItem value="2Cr">₹1-2 Crore</SelectItem>
                        <SelectItem value="2Cr+">Above ₹2 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Your Free Insurance Quote</DialogTitle>
          <DialogDescription>
            Complete the form below to receive a personalized insurance quote.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Hidden field for FormSubmit */}
            <input type="hidden" name="_subject" value="New Insurance Quote Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={currentUrl} />
            
            {currentStep === 1 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="insuranceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Type</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="health">Health Insurance</SelectItem>
                            <SelectItem value="term">Term Insurance</SelectItem>
                            <SelectItem value="life">Life Insurance</SelectItem>
                            <SelectItem value="vehicle">Vehicle Insurance</SelectItem>
                            <SelectItem value="home">Home Insurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                {renderAdditionalFields()}
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share any additional requirements or questions" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <DialogFooter className="mt-6 flex flex-col sm:flex-row sm:justify-between">
              {currentStep === 1 ? (
                <div className="flex justify-end w-full">
                  <Button 
                    type="button" 
                    onClick={goToNextStep}
                    className="ml-auto"
                  >
                    Next
                  </Button>
                </div>
              ) : (
                <div className="flex sm:flex-row flex-col gap-2 w-full sm:justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPreviousStep}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-fintech-green"
                  >
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? "Submitting..." : "Get Free Quote"}
                  </Button>
                </div>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InsuranceQuoteForm;
