import { BadgeDollarSign, Shield, PiggyBank, Wallet, ArrowRight, CheckCircle, Calculator, Search, Umbrella, Briefcase, Handshake, CreditCard // Replacing Loan with CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import FinancialToolCard from "@/components/FinancialToolCard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <EnhancedHeroSection />
      
      {/* Financial Tools Section */}
      <section className="py-16 bg-gray-50 md:py-[50px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Tools</h2>
            <p className="text-gray-600">Calculate, plan and optimize your finances</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FinancialToolCard icon={<Calculator className="text-blue-500" />} title="SIP Calculator" description="Calculate your potential returns from systematic investments" bgColor="bg-blue-50" linkText="Use Calculator" linkHref="/tools/sip-calculator" />
            
            <FinancialToolCard icon={<Calculator className="text-green-500" />} title="Loan EMI Calculator" description="Plan your loan repayments with our easy EMI calculator" bgColor="bg-green-50" linkText="Use Calculator" linkHref="/tools/emi-calculator" />
            
            <FinancialToolCard icon={<Search className="text-purple-500" />} title="Tax Saving Tools" description="Find the best tax saving investment options" bgColor="bg-purple-50" linkText="Use Calculator" linkHref="/tools/tax-saving" />
          </div>
        </div>
      </section>
      
      {/* Mutual Fund Investments Section */}
      <section className="py-16 bg-white md:py-[20px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mutual Fund Investments</h2>
            <p className="text-gray-600">Grow your wealth with our curated selection of top-performing mutual funds</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <PiggyBank className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Equity Funds</CardTitle>
                <CardDescription>Higher returns with market-linked investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Diversified portfolios across market caps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Professionally managed by expert fund managers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Potential for wealth creation over long term</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Equity Funds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Debt Funds</CardTitle>
                <CardDescription>Stable returns with lower risk investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Fixed income securities with regular returns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Lower volatility compared to equity investments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Tax-efficient alternatives to fixed deposits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-purple hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Debt Funds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                  <Handshake className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Hybrid Funds</CardTitle>
                <CardDescription>Balanced approach with mixed investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Mix of equity and debt for balanced growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Automatic asset allocation based on market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Ideal for moderate risk profiles</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-purple hover:text-fintech-green \ntransition-colors font-medium flex items-center">
                  Explore Hybrid Funds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6 rounded-sm">
              Start Investing Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Comprehensive Insurance Solutions */}
      <section className="py-16 bg-gray-50 md:py-[50px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Insurance Solutions</h2>
            <p className="text-gray-600">Protect yourself and your loved ones with our range of insurance products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Financial security for your family's future</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>High coverage plans at affordable premiums</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Term, endowment, and ULIP options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Additional riders for enhanced protection</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Life Insurance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Umbrella className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Health Insurance</CardTitle>
                <CardDescription>Comprehensive coverage for medical expense</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Family floater and individual plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cashless treatment at 10,000+ hospitals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Coverage for pre and post hospitalization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Health Insurance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>General Insurance</CardTitle>
                <CardDescription>Protection for your valuable assets</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Motor insurance for cars and two-wheelers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Insurance against natural disasters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Travel insurance for domestic and international trips</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore General Insurance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green -blue hover:opacity-90 text-white px-8  py-6">
              Get Insurance Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Loan Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Solutions</h2>
            <p className="text-gray-600">Fast and hassle-free loans with competitive interest rates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <CreditCard className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Personal Loans</CardTitle>
                <CardDescription>Quick funds for your personal needs</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Loans up to ₹25 lakhs with minimal documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Instant approval with digital verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Flexible repayment options up to 5 yr</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/loans" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Apply for Personal Loan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <BadgeDollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Home Loans</CardTitle>
                <CardDescription>Realize your dream of owning a home</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Competitive interest rates starting at 8.5%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>High loan amount with up to 90% financing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Long tenure loans up to 30 years</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/loans" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Apply for Home Loan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Business Loans</CardTitle>
                <CardDescription>Fund your business growth and expansion</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Unsecured loans up to ₹50 lakhs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Special schemes for startups and MSMEs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Working capital and equipment financing options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/loans" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Apply for Business Loan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
              Check Loan Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-[20px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Financial Services for <span className="gradient-text">Every Need</span>
            </h2>
            <p className="text-gray-600">
              Our tech-powered platform offers tailored financial solutions to help you achieve your goals and secure your future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard title="Mutual Funds" icon={<PiggyBank size={28} />} description="Tech-driven investments with expert portfolio management for optimal returns." features={["Zero commission direct plans", "Personalized portfolio recommendations", "Real-time performance tracking", "Automatic SIP management"]} linkText="Explore Mutual Funds" linkHref="#mutual-funds" gradient="bg-gradient-to-r from-fintech-purple to-fintech-blue" />
            
            <ProductCard title="Insurance" icon={<Shield size={28} />} description="Comprehensive coverage options that protect what matters most to you." features={["Digital policy management", "AI-powered plan recommendations", "Paperless claims processing", "Family coverage options"]} linkText="Explore Insurance Plans" linkHref="#insurance" gradient="bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue" />
            
            <ProductCard title="Loans" icon={<Wallet size={28} />} description="Quick, hassle-free loans with competitive rates and flexible terms." features={["Instant eligibility check", "Paperless digital process", "Competitive interest rates", "Flexible repayment options"]} linkText="Explore Loan Options" linkHref="#loans" gradient="bg-gradient-to-r from-fintech-orange to-fintech-purple" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl -z-10"></div>
                <div className="glass-card p-8 rounded-xl max-w-lg mx-auto">
                  <div className="bg-gradient-to-br from-fintech-green/80 to-fintech-orange/80 rounded-lg p-4 mb-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Wealth Dashboard</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <p className="text-xs opacity-80">Total Investments</p>
                        <p className="text-xl font-bold">₹24.6L</p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <p className="text-xs opacity-80">Total Returns</p>
                        <p className="text-xl font-bold">+18.7%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <PiggyBank size={20} className="text-fintech-blue" />
                        </div>
                        <div>
                          <p className="font-medium">SBI Blue Chip Fund</p>
                          <p className="text-xs text-gray-500">Large Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+21.4%</p>
                        <p className="text-xs text-gray-500">₹5.2L</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <PiggyBank size={20} className="text-fintech-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Axis Mid Cap Fund</p>
                          <p className="text-xs text-gray-500">Mid Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+16.8%</p>
                        <p className="text-xs text-gray-500">₹3.8L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Finance Made <span className="gradient-text">Smart</span> with Technology
              </h2>
              <p className="text-gray-600 mb-8">
                We leverage cutting-edge technology to simplify complex financial decisions, providing transparent, personalized recommendations that help you build wealth.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-purple to-fintech-blue flex-shrink-0 flex items-center justify-center text-white">
                    <BadgeDollarSign size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI-Powered Recommendations</h3>
                    <p className="text-gray-600">
                      Our algorithm analyzes thousands of options to recommend the perfect financial products for your goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue flex-shrink-0 flex items-center justify-center text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Paperless Onboarding</h3>
                    <p className="text-gray-600">
                      Complete KYC and start investing or apply for loans in minutes with our secure digital process.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-orange to-fintech-purple flex-shrink-0 flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Bank-Grade Security</h3>
                    <p className="text-gray-600">
                      Your data and transactions are protected with 256-bit encryption and multiple security layers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="bg-gradient-to-r from-fintech-green to-fintech-green \nhover:opacity-90 text-white px-8 py-6">
                  Start Your Financial Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-[20px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Thousands</span> Across India
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it - see what our clients have to say about Money Bharat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard quote="Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year. Their technology makes investing so simple." name="Rajesh Sharma" title="IT Professional, Bengaluru" />
            
            <TestimonialCard quote="I was struggling to find the right insurance for my family. Money Bharat's experts guided me to a comprehensive plan that saved us 30% on premiums." name="Priya Mehta" title="Business Owner, Mumbai" />
            
            <TestimonialCard quote="Getting a home loan through Money Bharat was incredibly fast and easy. Their digital process saved me countless hours of paperwork." name="Vikram Singh" title="Engineer, Pune" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-fintech-green to-fintech-orange text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="mb-8 opacity-80 text-lg">
              Join thousands of satisfied clients who have taken control of their finances with Money Bharat's innovative solutions.
            </p>
            <Button className="bg-white hover:bg-gray-100 px-8 py-6 text-lg text-fintech-green">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;