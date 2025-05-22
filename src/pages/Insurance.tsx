import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Shield, ShieldCheck, User, Car, Home, Heart, Umbrella, Briefcase, Check, ListOrdered, Building, ArrowLeft, FileChartLine } from "lucide-react";

const InsuranceCard = ({
  title,
  description,
  icon,
  color
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) => <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
    <CardContent className="p-6">
      <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${color} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="#" className="inline-flex items-center text-sm font-medium text-fintech-purple">
        View plans
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </CardContent>
  </Card>;

const InsurancePage = () => {
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("health");
  
  const insuranceCategories = [{
    id: "health",
    title: "Health Insurance",
    icon: <Heart className="h-6 w-6" />,
    description: "Comprehensive health coverage for individuals and families"
  }, {
    id: "life",
    title: "Life Insurance",
    icon: <Shield className="h-6 w-6" />,
    description: "Secure your family's future with our life insurance plans"
  }, {
    id: "car",
    title: "Car Insurance",
    icon: <Car className="h-6 w-6" />,
    description: "Protect your vehicle against accidents and damages"
  }, {
    id: "home",
    title: "Home Insurance",
    icon: <Home className="h-6 w-6" />,
    description: "Safeguard your home and belongings"
  }, {
    id: "term",
    title: "Term Insurance",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "High coverage at affordable premiums"
  }];
  
  const insuranceTypes = [{
    id: "health",
    title: "Health Insurance",
    cards: [{
      title: "Individual Health",
      description: "Comprehensive health protection for you with customizable coverage options",
      icon: <User className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
    }, {
      title: "Family Health",
      description: "Coverage for your entire family under a single policy with enhanced benefits",
      icon: <User className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
    }, {
      title: "Senior Citizen",
      description: "Special health plans designed for the needs of senior citizens",
      icon: <User className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
    }, {
      title: "Critical Illness",
      description: "Financial protection against major illnesses with lump-sum benefits",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
    }]
  }, {
    id: "life",
    title: "Life Insurance",
    cards: [{
      title: "Term Life",
      description: "High coverage at affordable premiums for a specific period",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
    }, {
      title: "Whole Life",
      description: "Lifetime coverage with savings benefit for your family",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
    }, {
      title: "Child Plans",
      description: "Secure your child's future education and milestones",
      icon: <User className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
    }, {
      title: "Retirement Plans",
      description: "Build a corpus for your retirement years with guaranteed returns",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
    }]
  }, {
    id: "car",
    title: "Car Insurance",
    cards: [{
      title: "Comprehensive",
      description: "Complete protection for your vehicle against damages and third-party liability",
      icon: <Car className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
    }, {
      title: "Third-Party",
      description: "Mandatory insurance covering damages to third parties",
      icon: <Car className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
    }, {
      title: "Zero Depreciation",
      description: "Get full claim without accounting for vehicle depreciation",
      icon: <Car className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
    }, {
      title: "Add-ons",
      description: "Customize your policy with additional protections like roadside assistance",
      icon: <Car className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
    }]
  }, {
    id: "home",
    title: "Home Insurance",
    cards: [{
      title: "Building Insurance",
      description: "Protection for your home structure against damages",
      icon: <Home className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
    }, {
      title: "Contents Insurance",
      description: "Coverage for valuables and belongings inside your home",
      icon: <Home className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
    }, {
      title: "Combined Policy",
      description: "Comprehensive coverage for both structure and contents",
      icon: <Home className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
    }, {
      title: "Natural Disasters",
      description: "Additional coverage against floods, earthquakes and other calamities",
      icon: <Umbrella className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
    }]
  }, {
    id: "term",
    title: "Term Insurance",
    cards: [{
      title: "Regular Term",
      description: "Pure life coverage with high sum assured at affordable premiums",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
    }, {
      title: "Return of Premium",
      description: "Get all your premiums back at policy maturity",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
    }, {
      title: "Increasing Term",
      description: "Sum assured increases over time to match inflation",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
    }, {
      title: "Critical Illness Rider",
      description: "Added protection against major illnesses with your term plan",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
    }]
  }];
  
  const topInsuranceProviders = [
    {
      name: "HDFC ERGO",
      category: "Health & General",
      claimSettlement: "98.5%",
      networkHospitals: "12,500+",
      rating: "4.8",
      riskProfile: "Very Good",
      colorClass: "bg-green-500"
    },
    {
      name: "ICICI Lombard",
      category: "Health & General",
      claimSettlement: "97.9%",
      networkHospitals: "10,800+",
      rating: "4.7",
      riskProfile: "Very Good",
      colorClass: "bg-green-500"
    },
    {
      name: "Bajaj Allianz",
      category: "Life & Health",
      claimSettlement: "97.2%",
      networkHospitals: "9,500+",
      rating: "4.5",
      riskProfile: "Good",
      colorClass: "bg-blue-500"
    },
    {
      name: "SBI Life Insurance",
      category: "Life Insurance",
      claimSettlement: "98.1%",
      networkHospitals: "N/A",
      rating: "4.6",
      riskProfile: "Very Good",
      colorClass: "bg-green-500"
    },
    {
      name: "Star Health",
      category: "Health Insurance",
      claimSettlement: "96.8%",
      networkHospitals: "11,200+",
      rating: "4.4",
      riskProfile: "Good",
      colorClass: "bg-blue-500"
    }
  ];

  const frequentlyAskedQuestions = [
    {
      question: "What is the waiting period in health insurance?",
      answer: "A waiting period is a specific time during which you cannot claim benefits under your health insurance policy. It typically ranges from 30 days to 4 years depending on the condition. Pre-existing diseases usually have a waiting period of 2-4 years."
    },
    {
      question: "How do I choose the right insurance cover amount?",
      answer: "Consider factors like your age, medical history, family health history, lifestyle, income, and existing liabilities. For health insurance, a cover of at least ₹5-10 lakhs is recommended for individuals in metro cities, while for life insurance, a cover of at least 10 times your annual income is advisable."
    },
    {
      question: "What is claim settlement ratio and why is it important?",
      answer: "Claim settlement ratio is the percentage of claims an insurer has settled compared to the total claims received. A higher ratio (ideally above 95%) indicates the insurer is more likely to honor valid claims, making it an important factor when choosing an insurance provider."
    },
    {
      question: "Can I port my existing health insurance policy?",
      answer: "Yes, IRDAI regulations allow you to port your health insurance policy from one insurer to another while maintaining continuity benefits like waiting periods for pre-existing conditions. You need to apply for portability at least 45 days before your existing policy's renewal date."
    },
    {
      question: "What tax benefits do insurance policies offer?",
      answer: "Under Section 80C, premiums paid for life insurance policies qualify for tax deduction up to ₹1.5 lakhs. Under Section 80D, premiums paid for health insurance policies qualify for deduction up to ₹25,000 for self, spouse and children (additional ₹25,000 for parents, and ₹50,000 if parents are senior citizens)."
    }
  ];

  const insuranceKeyBenefits = [
    {
      title: "Financial Protection",
      description: "Insurance provides a financial safety net for you and your family against unexpected events and major financial losses.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
        <Shield className="h-6 w-6" />
      </div>
    },
    {
      title: "Peace of Mind",
      description: "With insurance coverage, you can enjoy greater peace of mind knowing that you're protected against life's uncertainties.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
        <ShieldCheck className="h-6 w-6" />
      </div>
    },
    {
      title: "Tax Benefits",
      description: "Many insurance policies offer tax advantages, helping you reduce your tax liability while securing your future.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600">
        <FileChartLine className="h-6 w-6" />
      </div>
    },
    {
      title: "Estate Planning",
      description: "Life insurance can be an important tool in estate planning, ensuring your wealth is transferred to your beneficiaries as intended.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600">
        <Briefcase className="h-6 w-6" />
      </div>
    },
    {
      title: "Cashless Treatment",
      description: "Health insurance policies offer cashless treatment at network hospitals, making healthcare access smoother during emergencies.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
        <Heart className="h-6 w-6" />
      </div>
    },
    {
      title: "Long-term Savings",
      description: "Some insurance policies double as investment instruments, helping you build a corpus for your long-term financial goals.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <User className="h-6 w-6" />
      </div>
    }
  ];

  const selectedType = insuranceTypes.find(type => type.id === selectedInsuranceType) || insuranceTypes[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Enhanced with gradient and better typography */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-sm font-medium text-blue-600">Compare Insurance Plans from 50+ Providers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Perfect Insurance</span> for You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare plans from top insurers and get the right coverage at the best price
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white px-6 py-6 text-lg">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-fintech-purple text-fintech-purple px-6 py-6 text-lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Updated Comprehensive Insurance Solutions Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Protect yourself and your loved ones with our range of insurance products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Life Insurance Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex space-x-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-fintech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Life Insurance</h3>
                      <p className="text-gray-600">Financial security for your family's future</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>High coverage plans at affordable premiums</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Term, endowment & ULIP options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Additional riders for enhanced protection</span>
                    </li>
                  </ul>

                  <Link to="/term-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
                    Explore Life Insurance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Health Insurance Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex space-x-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Health Insurance</h3>
                      <p className="text-gray-600">Comprehensive coverage for medical expenses</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Family floater plans for complete protection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Cashless treatment at 10,000+ hospitals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Coverage for pre & post hospitalization</span>
                    </li>
                  </ul>

                  <Link to="/health-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
                    Explore Health Insurance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* General Insurance Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex space-x-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Car className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">General Insurance</h3>
                      <p className="text-gray-600">Protection for your valuable assets</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Motor insurance for cars and two-wheelers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Insurance against natural disasters</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Travel insurance with global coverage</span>
                    </li>
                  </ul>

                  <Link to="/vehicle-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
                    Explore General Insurance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compare Insurance Categories */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Insurance Categories
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of insurance products designed to protect what matters most to you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {insuranceCategories.map(category => (
              <div 
                key={category.id} 
                className={`glass-card p-6 text-center cursor-pointer transition-all ${
                  selectedInsuranceType === category.id 
                    ? 'ring-2 ring-fintech-purple shadow-lg' 
                    : 'hover:shadow-md hover:border-fintech-purple/20'
                }`} 
                onClick={() => setSelectedInsuranceType(category.id)}
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{selectedType.title} Plans</h2>
            <p className="text-lg text-gray-600">
              Compare and choose from our range of {selectedType.title.toLowerCase()} plans designed for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedType.cards.map((card, index) => (
              <InsuranceCard 
                key={index} 
                title={card.title} 
                description={card.description} 
                icon={card.icon} 
                color={card.color} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Insurance Providers - New Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Top Insurance Providers</h2>
            <p className="text-lg text-gray-600">
              Compare the best insurance companies based on claim settlement ratio, network hospitals, and customer ratings
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white shadow-sm">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[200px]">Insurer</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Claim Settlement</TableHead>
                  <TableHead>Network Hospitals</TableHead>
                  <TableHead>Customer Rating</TableHead>
                  <TableHead>Risk Profile</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topInsuranceProviders.map((provider, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-14 ${provider.colorClass} rounded-full`}></div>
                        {provider.name}
                      </div>
                    </TableCell>
                    <TableCell>{provider.category}</TableCell>
                    <TableCell>{provider.claimSettlement}</TableCell>
                    <TableCell>{provider.networkHospitals}</TableCell>
                    <TableCell>{provider.rating}/5</TableCell>
                    <TableCell>
                      <Badge 
                        className={`${
                          provider.riskProfile === "Very Good" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {provider.riskProfile}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-fintech-purple text-fintech-purple">
              View All Insurance Providers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits of Insurance - New Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Key Benefits of Insurance</h2>
            <p className="text-lg text-gray-600">
              Insurance is more than just protection—it's an essential component of your financial planning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceKeyBenefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 border border-gray-100 rounded-xl">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Insurance Calculator */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8 border border-gray-100 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Insurance Premium Calculator</h2>
              <p className="text-lg text-gray-600">
                Get an estimate of your insurance premium based on your requirements
              </p>
            </div>
            
            <Tabs defaultValue="health" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="health">Health Insurance</TabsTrigger>
                <TabsTrigger value="life">Life Insurance</TabsTrigger>
                <TabsTrigger value="car">Car Insurance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="health" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>18-25 years</option>
                      <option>26-35 years</option>
                      <option>36-45 years</option>
                      <option>46-55 years</option>
                      <option>56+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coverage Amount
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>₹3 Lakhs</option>
                      <option>₹5 Lakhs</option>
                      <option>₹10 Lakhs</option>
                      <option>₹15 Lakhs</option>
                      <option>₹20 Lakhs</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Family Members
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Self</option>
                      <option>Self + Spouse</option>
                      <option>Self + Spouse + 1 Child</option>
                      <option>Self + Spouse + 2 Children</option>
                      <option>Self + Spouse + Parents</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Tier 1 (Metro)</option>
                      <option>Tier 2</option>
                      <option>Tier 3</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                    Calculate Premium
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="life" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>18-25 years</option>
                      <option>26-35 years</option>
                      <option>36-45 years</option>
                      <option>46-55 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coverage Amount
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>₹50 Lakhs</option>
                      <option>₹1 Crore</option>
                      <option>₹2 Crores</option>
                      <option>₹5 Crores</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy Term
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>10 years</option>
                      <option>15 years</option>
                      <option>20 years</option>
                      <option>25 years</option>
                      <option>30 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Income
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>₹5-10 Lakhs per annum</option>
                      <option>₹10-15 Lakhs per annum</option>
                      <option>₹15-25 Lakhs per annum</option>
                      <option>Above ₹25 Lakhs per annum</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                    Calculate Premium
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="car" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Car Make
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Maruti Suzuki</option>
                      <option>Hyundai</option>
                      <option>Tata</option>
                      <option>Honda</option>
                      <option>Toyota</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Car Model
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select Car Model</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Car Age
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Less than 1 year</option>
                      <option>1-3 years</option>
                      <option>3-5 years</option>
                      <option>More than 5 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Type
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Comprehensive</option>
                      <option>Third-Party</option>
                      <option>Own Damage</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                    Calculate Premium
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section - New Enhanced Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about insurance policies and coverage
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {frequentlyAskedQuestions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Benefits of Money Bharat Insurance Services - With Updated Styling */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Benefits of <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> Insurance Services
            </h2>
            <p className="text-lg text-gray-600">
              Why thousands of customers choose us for their insurance needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Compare Multiple Insurers</h3>
                <p className="text-gray-600">
                  Compare quotes from 50+ insurers in one place to find the best coverage at the best price
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r from-fintech-orange to-fintech-purple text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or charges. Get clear and transparent pricing on all insurance plans
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Assistance</h3>
                <p className="text-gray-600">
                  Our insurance experts guide you through the entire process, from selection to claims
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r from-fintech-deep-purple to-fintech-purple text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Policy Issuance</h3>
                <p className="text-gray-600">
                  Get your policy issued quickly with minimal paperwork and hassle-free processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Money Bharat Works - With Updated Styling */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              How <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get insured with us
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-purple to-fintech-blue text-white flex items-center justify-center mb-4">
                <ListOrdered className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Share Your Requirements</h3>
              <p className="text-gray-600 mb-4">Tell us about your insurance needs</p>
              <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-orange to-fintech-purple text-white flex items-center justify-center mb-4">
                <ListOrdered className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compare Plans</h3>
              <p className="text-gray-600 mb-4">View and compare plans from top insurers</p>
              <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue text-white flex items-center justify-center mb-4">
                <ListOrdered className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-gray-600 mb-4">Select the best plan for your needs</p>
              <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-deep-purple to-fintech-purple text-white flex items-center justify-center mb-4">
                <ListOrdered className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Insured</h3>
              <p className="text-gray-600 mb-4">Complete the process and receive your policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Insurance Partners - With Updated Styling */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Our Insurance <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We partner with India's most trusted insurance providers to bring you the best coverage options at competitive prices
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Partner Cards */}
            {[1, 2, 3, 4, 5, 6].map(item => <Card key={item} className="flex items-center justify-center p-6 hover:shadow-md transition-all">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="h-10 w-10 text-fintech-green\n" />
                  </div>
                  <p className="text-center font-medium">Insurance Partner {item}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-white border border-fintech-green text-fintech-purple hover:bg-fintech-green hover:text-white">
              View All Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - With Updated Styling */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> for Insurance?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Discover why we are the preferred choice for insurance in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-purple to-fintech-blue rounded-full flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Top-Rated Insurers</h3>
              <p className="text-gray-600">
                We partner with only the most reliable and financially stable insurance companies
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-orange to-fintech-purple rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Advice</h3>
              <p className="text-gray-600">
                Our insurance specialists help you choose the right coverage for your specific needs
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hassle-Free Claims</h3>
              <p className="text-gray-600">
                We assist you throughout the claim process for quick and smooth settlements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-fintech-green to-fintech-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Insured?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards financial security and peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-fintech-green hover:bg-gray-100 px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;
