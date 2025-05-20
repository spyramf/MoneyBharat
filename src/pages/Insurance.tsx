import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { ArrowRight, Shield, ShieldCheck, User, Car, Home, Heart, Umbrella, Briefcase, Check, ListOrdered, Building, ArrowLeft } from "lucide-react";
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
  const selectedType = insuranceTypes.find(type => type.id === selectedInsuranceType) || insuranceTypes[0];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the <span className="gradient-text">Perfect Insurance</span> for You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare plans from top insurers and get the right coverage at the best price
          </p>
        </div>
      </section>

      {/* Compare Insurance Categories */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Insurance Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {insuranceCategories.map(category => <div key={category.id} className={`glass-card p-6 text-center cursor-pointer transition-all ${selectedInsuranceType === category.id ? 'ring-2 ring-fintech-purple shadow-lg' : 'hover:shadow-md'}`} onClick={() => setSelectedInsuranceType(category.id)}>
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">{selectedType.title} Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare and choose from our range of {selectedType.title.toLowerCase()} plans designed for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedType.cards.map((card, index) => <InsuranceCard key={index} title={card.title} description={card.description} icon={card.icon} color={card.color} />)}
          </div>
        </div>
      </section>

      {/* Insurance Calculator */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Insurance Premium Calculator</h2>
            
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
                {/* Similar form fields for life insurance */}
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
                {/* Similar form fields for car insurance */}
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

      {/* Benefits of Money Bharat Insurance Services */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Benefits of <span className="gradient-text">Money Bharat</span> Insurance Services
          </h2>
          
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

      {/* How Money Bharat Works */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            How <span className="gradient-text">Money Bharat</span> Works
          </h2>
          
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

      {/* Our Insurance Partners */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Insurance <span className="gradient-text">Partners</span>
          </h2>
          
          <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            We partner with India's most trusted insurance providers to bring you the best coverage options at competitive prices
          </p>
          
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

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose <span className="gradient-text">Money Bharat</span> for Insurance?
          </h2>
          
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-fintech-green to-fintech-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Insured?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards financial security and peace of mind
          </p>
          <Button className="bg-white text-fintech-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>;
};
export default InsurancePage;