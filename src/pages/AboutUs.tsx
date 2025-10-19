import { Shield, Users, TrendingUp, Award, Milestone } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Home from "@/components/icons/Home";
import GraduationCap from "@/components/icons/GraduationCap";
import Car from "@/components/icons/Car";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About</span> MoneyBharat
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Empowering Indians to make better financial decisions through transparent, technology-driven financial
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2022, MoneyBharat was created with a mission to transform how Indians interact with financial
                products. We recognized that despite India's rapid digital transformation, financial services remained
                complex and often inaccessible to many.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders, with decades of experience in finance and technology, set out to build a platform that
                makes financial products transparent, accessible, and easy to understand for everyone - from first-time
                investors to seasoned professionals.
              </p>
              <p className="text-gray-700">
                Today, we serve millions of Indians, helping them make informed decisions about investments, insurance,
                and loans through our technology-driven approach and customer-first philosophy.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-fintech-purple to-fintech-blue h-64 flex items-center justify-center">
                <div className="text-white text-center px-6">
                  <h3 className="text-2xl font-bold mb-2">MoneyBharat</h3>
                  <p className="text-white/90">Financial Freedom For Every Indian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become India's most trusted financial platform, enabling financial inclusion and prosperity for every
                Indian through technology-driven solutions.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To simplify financial decision-making by providing transparent, unbiased information and innovative
                tools that help users compare, choose, and manage financial products that best suit their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Milestones Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Milestones</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Key moments in our journey to transform financial services in India.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Milestone 1 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-fintech-orange w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2018</h3>
                  <h4 className="text-xl font-bold mb-2">Company Founded</h4>
                  <p className="text-gray-600">
                    Money Bharat was established with a vision to make financing accessible to all Indians.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-fintech-purple w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:text-right md:pr-12 md:hidden lg:block lg:invisible"></div>
                <div className="md:pl-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2019</h3>
                  <h4 className="text-xl font-bold mb-2">AMFI Registration</h4>
                  <p className="text-gray-600">Received official AMFI registration and partnered with first 10 AMCs.</p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2020</h3>
                  <h4 className="text-xl font-bold mb-2">Mobile App Launch</h4>
                  <p className="text-gray-600">
                    Launched our first mobile app, reaching 100,000 downloads in the first quarter.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:text-right md:pr-12 md:hidden lg:block lg:invisible"></div>
                <div className="md:pl-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2021</h3>
                  <h4 className="text-xl font-bold mb-2">Daily SIP Innovation</h4>
                  <p className="text-gray-600">
                    Pioneered the Daily SIP model, making us the first platform to offer this in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 5 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-fintech-blue w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2022</h3>
                  <h4 className="text-xl font-bold mb-2">1M Customers</h4>
                  <p className="text-gray-600">
                    Crossed 1 million customer milestone and expanded to insurance products.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 6 */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-fintech-blue w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 md:hidden lg:block lg:invisible"></div>
                <div className="md:pl-12">
                  <h3 className="text-lg font-bold text-fintech-deep-purple">2023</h3>
                  <h4 className="text-xl font-bold mb-2">Loan Services Integration</h4>
                  <p className="text-gray-600">
                    Added comprehensive loan services with connections to 70+ financial institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do at MoneyBharat, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-fintech-purple">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Shield className="h-8 w-8 text-fintech-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trust</h3>
                <p className="text-gray-600">
                  Building and maintaining trust through transparency, security, and honest advice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-fintech-blue">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-fintech-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Putting our users' needs at the center of everything we design and build.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-fintech-orange">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <TrendingUp className="h-8 w-8 text-fintech-orange" />
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our products and services through technological innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-fintech-deep-purple">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-fintech-deep-purple" />
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Striving for excellence in everything we do, from product quality to customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive suite of financial products designed to meet the diverse needs of our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-fintech-purple" />
              </div>
              <h3 className="font-bold text-xl mb-3">Mutual Funds</h3>
              <p className="text-gray-600">
                Compare and invest in a wide range of mutual funds with low-cost SIPs starting at just ₹100.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-fintech-blue" />
              </div>
              <h3 className="font-bold text-xl mb-3">Insurance</h3>
              <p className="text-gray-600">
                Protect yourself and your loved ones with comprehensive insurance solutions at competitive premiums.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                <Home className="h-10 w-10 text-fintech-orange" />
              </div>
              <h3 className="font-bold text-xl mb-3">Loans</h3>
              <p className="text-gray-600">
                Access personal, home, and business loans with competitive interest rates and flexible repayment
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose MoneyBharat</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We combine financial expertise with cutting-edge technology to offer you the best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-fintech-purple/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-fintech-purple" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team of SEBI-registered investment advisors provides professional guidance tailored to your
                  financial goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-fintech-blue/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-fintech-blue" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Secure & Transparent</h3>
                <p className="text-gray-600">
                  Bank-grade security for your data and completely transparent fee structures with no hidden charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-fintech-orange/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-fintech-orange" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Financial Education</h3>
                <p className="text-gray-600">
                  Free resources to help you understand financial concepts and make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-fintech-deep-purple/10 p-3 rounded-full">
                  <Car className="h-6 w-6 text-fintech-deep-purple" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Complete paperless process with quick approvals and instant updates on your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Your Financial Journey Today</h2>
            <p className="text-lg mb-8 text-white/90">
              Join millions of Indians who trust MoneyBharat for their financial needs.
            </p>
            {/* <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
              Get Started Now
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
