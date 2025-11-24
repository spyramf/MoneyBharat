
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SipCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [selectedTab, setSelectedTab] = useState("sip");
  const [animate, setAnimate] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };

  const handlePeriodChange = (value: number[]) => {
    setInvestmentPeriod(value[0]);
  };

  const calculatedReturns = () => {
    const r = 0.12;
    const t = investmentPeriod;
    if (selectedTab === "sip") {
      const monthlyAmount = investmentAmount;
      const months = t * 12;
      const monthlyRate = r / 12;
      return Math.round(monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    } else {
      return Math.round(investmentAmount * Math.pow(1 + r, t));
    }
  };

  // This section would typically contain the SIP calculator UI
  // For brevity, we're just returning a placeholder
  // In a real implementation, you would include the full calculator UI

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Calculate Your </span>
            <span className="text-fintech-green">Returns</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use our SIP calculator to estimate your investment growth over time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">SIP Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="sip">Monthly SIP</TabsTrigger>
                  <TabsTrigger value="lumpsum">Lump Sum</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sip" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Monthly Investment</Label>
                        <span className="font-medium">₹{investmentAmount}</span>
                      </div>
                      <Slider
                        value={[investmentAmount]}
                        min={500}
                        max={100000}
                        step={500}
                        onValueChange={handleSliderChange}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹500</span>
                        <span>₹100,000</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Investment Period (Years)</Label>
                        <span className="font-medium">{investmentPeriod} years</span>
                      </div>
                      <Slider
                        value={[investmentPeriod]}
                        min={1}
                        max={30}
                        step={1}
                        onValueChange={handlePeriodChange}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="lumpsum" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>One-time Investment</Label>
                        <span className="font-medium">₹{investmentAmount}</span>
                      </div>
                      <Slider
                        value={[investmentAmount]}
                        min={1000}
                        max={1000000}
                        step={1000}
                        onValueChange={handleSliderChange}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹1,000</span>
                        <span>₹10,00,000</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Investment Period (Years)</Label>
                        <span className="font-medium">{investmentPeriod} years</span>
                      </div>
                      <Slider
                        value={[investmentPeriod]}
                        min={1}
                        max={30}
                        step={1}
                        onValueChange={handlePeriodChange}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-gray-600">Total Investment</p>
                    <p className="text-2xl font-bold">
                      ₹{selectedTab === 'sip' ? (investmentAmount * investmentPeriod * 12).toLocaleString() : investmentAmount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600">Estimated Returns</p>
                    <p className={`text-2xl font-bold ${animate ? 'animate-pulse' : ''}`}>
                      ₹{calculatedReturns().toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a
                  href="https://spyraexima.wylth.com/NewOnBoarding/SignUp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90">
                    Start Investing Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SipCalculator;
