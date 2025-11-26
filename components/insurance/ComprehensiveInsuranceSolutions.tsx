
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Heart, Car, Check } from "lucide-react";

const ComprehensiveInsuranceSolutions = () => {
  return (
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

                <Link href="/term-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
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

                <Link href="/health-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
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

                <Link href="/vehicle-insurance" className="inline-flex items-center font-semibold text-fintech-purple">
                  Explore General Insurance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveInsuranceSolutions;
