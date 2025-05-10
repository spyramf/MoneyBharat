
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Heart,
  ShieldCheck,
  User,
  Users,
  UserPlus,
  Hospital,
  CheckCircle,
  Clock,
  Calculator,
  CreditCard,
  ArrowRight,
  DollarSign,
  "briefcase-medical": BriefcaseMedical,
  ambulance,
  bandage
} from "lucide-react";
import FinancialToolCard from "@/components/FinancialToolCard";

const HealthInsuranceCard = ({
  title,
  coverAmount,
  monthlyPremium,
  features,
  rating,
  company,
  logo,
}: {
  title: string;
  coverAmount: string;
  monthlyPremium: string;
  features: string[];
  rating: number;
  company: string;
  logo?: string;
}) => (
  <Card className="border shadow-md hover:shadow-xl transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
          {logo ? (
            <div className="w-12 h-12">
              <AspectRatio ratio={1 / 1}>
                <Skeleton className="h-full w-full rounded-md" />
              </AspectRatio>
            </div>
          ) : (
            <Hospital className="h-8 w-8 text-fintech-purple" />
          )}
        </div>
        <div className="text-right">
          <div className="inline-flex items-center bg-green-100 px-2 py-1 rounded text-green-700">
            <span className="text-xs font-semibold">{rating}/5</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{company}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Cover Amount</p>
          <p className="text-lg font-semibold">₹{coverAmount}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Monthly Premium</p>
          <p className="text-lg font-semibold text-fintech-purple">₹{monthlyPremium}</p>
        </div>
      </div>

      <div className="mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link to="#" className="text-fintech-purple text-sm font-medium">
          View Details
        </Link>
        <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
          Buy Now
        </Button>
      </div>
    </CardContent>
  </Card>
);

const HealthInsurance = () => {
  const [ageGroup, setAgeGroup] = useState<number[]>([30]);
  const [coverAmount, setCoverAmount] = useState<number[]>([500000]);
  const [familyMembers, setFamilyMembers] = useState("self");

  const insurancePlans = [
    {
      title: "Health Shield Plus",
      coverAmount: "5,00,000",
      monthlyPremium: "899",
      features: ["No Room Rent Capping", "Free Health Check-up", "No Co-Payment"],
      rating: 4.5,
      company: "ABC Insurance"
    },
    {
      title: "Comprehensive Care",
      coverAmount: "10,00,000",
      monthlyPremium: "1,299",
      features: ["Daycare Procedures", "Pre & Post Hospitalization", "Ambulance Cover"],
      rating: 4.2,
      company: "XYZ Health"
    },
    {
      title: "Family Floater Plus",
      coverAmount: "15,00,000",
      monthlyPremium: "1,899",
      features: ["Cover for 4 Family Members", "AYUSH Treatment", "Restoration Benefit"],
      rating: 4.7,
      company: "PQR Assurance"
    },
    {
      title: "Senior Care Gold",
      coverAmount: "7,50,000",
      monthlyPremium: "2,499",
      features: ["No Medical Check-up", "Chronic Disease Cover", "Home Healthcare"],
      rating: 4.3,
      company: "LMN Insurance"
    },
  ];

  const healthArticles = [
    {
      title: "Why Health Insurance is Essential in Today's World",
      excerpt: "Learn about the importance of health coverage in unpredictable times.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "How to Choose the Right Health Insurance Plan",
      excerpt: "Factors to consider when selecting a health insurance policy for your family.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Understanding Pre-existing Conditions and Waiting Periods",
      excerpt: "Navigate the complexities of pre-existing conditions in health insurance.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your <span className="gradient-text">Health</span> and Financial Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare health insurance plans tailored to your needs and get coverage at the best price
          </p>
          <div className="max-w-md mx-auto">
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white px-8 py-6 text-lg w-full">
              Compare Health Insurance Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Quote Calculator */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Get a Quick Health Insurance Quote</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <Label htmlFor="age-range" className="mb-2 block text-sm font-medium">Age of Oldest Member</Label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">18 years</span>
                    <span className="text-sm text-gray-500">70 years</span>
                  </div>
                  <Slider
                    id="age-range"
                    defaultValue={ageGroup}
                    max={70}
                    min={18}
                    step={1}
                    onValueChange={setAgeGroup}
                    className="mb-2"
                  />
                  <div className="text-center">
                    <span className="text-lg font-semibold">{ageGroup[0]} years</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">Who Needs Health Insurance?</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      variant={familyMembers === 'self' ? 'default' : 'outline'} 
                      onClick={() => setFamilyMembers('self')}
                      className={familyMembers === 'self' ? 'bg-fintech-purple' : ''}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Self
                    </Button>
                    <Button 
                      variant={familyMembers === 'self+spouse' ? 'default' : 'outline'}
                      onClick={() => setFamilyMembers('self+spouse')}
                      className={familyMembers === 'self+spouse' ? 'bg-fintech-purple' : ''}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Self+Spouse
                    </Button>
                    <Button 
                      variant={familyMembers === 'family' ? 'default' : 'outline'}
                      onClick={() => setFamilyMembers('family')}
                      className={familyMembers === 'family' ? 'bg-fintech-purple' : ''}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Family
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <Label htmlFor="cover-amount" className="mb-2 block text-sm font-medium">Cover Amount (₹)</Label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">₹3L</span>
                    <span className="text-sm text-gray-500">₹1Cr</span>
                  </div>
                  <Slider
                    id="cover-amount"
                    defaultValue={coverAmount}
                    max={10000000}
                    min={300000}
                    step={100000}
                    onValueChange={setCoverAmount}
                    className="mb-2"
                  />
                  <div className="text-center">
                    <span className="text-lg font-semibold">
                      ₹{coverAmount[0] >= 10000000 ? '1 Crore' : 
                         coverAmount[0] >= 100000 ? `${coverAmount[0]/100000} Lakh` : 
                         coverAmount[0]}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">City Tier</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      variant="outline"
                      className="bg-fintech-purple text-white hover:bg-fintech-purple/90"
                    >
                      Tier 1
                    </Button>
                    <Button variant="outline">
                      Tier 2
                    </Button>
                    <Button variant="outline">
                      Tier 3
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-gradient-to-r from-fintech-purple to-fintech-blue py-6 text-lg">
                    Show Best Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Health Insurance Plans */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Popular Health Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare and choose from our top-rated health insurance plans
            </p>
          </div>
          
          <Tabs defaultValue="individual" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
              <TabsTrigger value="senior">Senior Citizen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={index} {...plan} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="family" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={`family-${index}`} {...plan} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="senior" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={`senior-${index}`} {...plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8">
            <Button className="px-8" variant="outline">
              View All Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Health Insurance Types */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Types of Health Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right health coverage for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-purple to-fintech-blue rounded-xl mb-4 flex items-center justify-center">
                <User className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Individual Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Tailored coverage for a single person with customizable benefits to suit personal health needs.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹499/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-orange to-fintech-purple rounded-xl mb-4 flex items-center justify-center">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Floater Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coverage for your entire family under a single policy with shared sum insured.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹1,199/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue rounded-xl mb-4 flex items-center justify-center">
                <BriefcaseMedical className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Critical Illness Cover</h3>
              <p className="text-gray-600 mb-4">
                Financial protection against major illnesses with lump-sum benefits upon diagnosis.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹899/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                <Hospital className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Group Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Employer-provided coverage for employees with competitive premiums and extensive benefits.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Custom corporate plans
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <UserPlus className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Senior Citizen Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Specialized plans for individuals above 60 years with coverage for age-related ailments.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹1,999/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Top-up Health Plans</h3>
              <p className="text-gray-600 mb-4">
                Additional coverage that starts after your base health insurance reaches its limit.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹299/month
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Health Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive health protection with exceptional benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="h-8 w-8 text-fintech-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">Cashless Hospitalization</h3>
                <p className="text-gray-600">
                  Get treatment at 10,000+ network hospitals without paying upfront
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-fintech-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">No Claim Bonus</h3>
                <p className="text-gray-600">
                  Get up to 50% increase in sum insured for claim-free years
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-fintech-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tax Benefits</h3>
                <p className="text-gray-600">
                  Save up to ₹75,000 annually under Section 80D of Income Tax Act
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-fintech-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">Lifetime Renewability</h3>
                <p className="text-gray-600">
                  Enjoy continued protection with lifetime policy renewals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Insurance Articles */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Health Insurance Knowledge Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about health insurance to make informed decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthArticles.map((article, index) => (
              <Card key={index} className="border-0 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                    {article.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link to="#" className="text-fintech-purple font-medium flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tools Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Helpful Financial Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FinancialToolCard
              icon={<Calculator className="h-10 w-10 text-white" />}
              title="Medical Cost Calculator"
              description="Estimate your potential medical expenses and required coverage"
              bgColor="bg-gradient-to-br from-fintech-purple to-fintech-blue"
              linkText="Use Calculator"
              linkHref="/tools/medical-cost-calculator"
            />
            
            <FinancialToolCard
              icon={<Hospital className="h-10 w-10 text-white" />}
              title="Hospital Locator"
              description="Find nearby network hospitals for cashless treatment"
              bgColor="bg-gradient-to-br from-fintech-orange to-fintech-purple"
              linkText="Locate Hospitals"
              linkHref="/tools/hospital-locator"
            />
            
            <FinancialToolCard
              icon={<ShieldCheck className="h-10 w-10 text-white" />}
              title="Coverage Advisor"
              description="Get personalized recommendations for your health insurance needs"
              bgColor="bg-gradient-to-br from-fintech-blue to-fintech-ocean-blue"
              linkText="Get Advice"
              linkHref="/tools/coverage-advisor"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare plans from top insurers and get the best health coverage for you and your family
          </p>
          <Button className="bg-white text-fintech-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Get Health Insurance Quote
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about health insurance
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">What is a waiting period in health insurance?</h3>
              <p className="text-gray-600">
                A waiting period is the time you must wait after buying a health insurance policy before you can claim benefits for certain conditions. Most policies have 30-day initial waiting periods for illnesses and 2-4 years for pre-existing conditions.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">What is a pre-existing condition?</h3>
              <p className="text-gray-600">
                Pre-existing conditions are health issues, diseases, or injuries that existed before you purchased your health insurance policy. These typically have longer waiting periods before coverage begins.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">What is a cashless hospitalization?</h3>
              <p className="text-gray-600">
                Cashless hospitalization allows you to get medical treatment at a network hospital without paying upfront. The insurance company settles the bill directly with the hospital, subject to policy terms and conditions.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">What is the difference between individual and family floater policies?</h3>
              <p className="text-gray-600">
                An individual health policy covers a single person with a dedicated sum insured. A family floater policy covers multiple family members under a single policy with a shared sum insured that can be used by any covered family member.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HealthInsurance;
