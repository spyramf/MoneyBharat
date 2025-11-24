import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, TrendingUp, Shield, Zap, Target, Calculator, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
interface SipFeature {
  title: string;
  description: string;
  icon: JSX.Element;
  stats?: string;
  highlight?: boolean;
}
interface SipFeaturesProps {
  features: SipFeature[];
}
const SIPFeatures = ({
  features
}: SipFeaturesProps) => {
  const enhancedFeatures = [{
    title: "Start with Just ₹100",
    description: "Begin your investment journey with as little as ₹100 per month. No large capital required - perfect for beginners and seasoned investors alike.",
    icon: <div className="w-12 h-12 bg-gradient-to-r from-fintech-green to-fintech-orange rounded-full flex items-center justify-center text-white font-bold text-xl">₹</div>,
    stats: "Minimum ₹100/month",
    highlight: true
  }, {
    title: "15% Average Annual Returns",
    description: "Historically, equity mutual funds have delivered superior returns. Our curated funds have generated average returns of 12-15% annually over 10+ years.",
    icon: <TrendingUp className="w-8 h-8 text-fintech-green" />,
    stats: "12-15% Annual Returns"
  }, {
    title: "Auto-Debit Convenience",
    description: "Set it and forget it! Automatic monthly deductions ensure you never miss an investment, building wealth systematically without any effort.",
    icon: <Zap className="w-8 h-8 text-fintech-orange" />,
    stats: "100% Automated"
  }, {
    title: "Tax Benefits up to ₹1.5 Lakh",
    description: "Invest in ELSS mutual funds and claim tax deductions under Section 80C. Save taxes while building wealth for your future goals.",
    icon: <Shield className="w-8 h-8 text-fintech-blue" />,
    stats: "₹1.5L Tax Saving"
  }, {
    title: "Goal-Based Planning",
    description: "Whether it's buying a home, child's education, or retirement - our SIP calculator helps you plan investments for specific financial goals.",
    icon: <Target className="w-8 h-8 text-fintech-purple" />,
    stats: "Multiple Goals"
  }, {
    title: "Professional Fund Management",
    description: "Your money is managed by experienced fund managers who research and select the best stocks, giving you access to professional expertise.",
    icon: <Users className="w-8 h-8 text-fintech-green" />,
    stats: "Expert Managed"
  }, {
    title: "Rupee Cost Averaging",
    description: "Reduce the impact of market volatility by investing fixed amounts regularly. Buy more units when prices are low, fewer when high.",
    icon: <Calculator className="w-8 h-8 text-fintech-ocean-blue" />,
    stats: "Risk Reduction"
  }, {
    title: "Award-Winning Platform",
    description: "Money Bharat has been recognized for excellence in fintech innovation and customer service. Join thousands of satisfied investors.",
    icon: <Award className="w-8 h-8 text-fintech-orange" />,
    stats: "5-Star Rated"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fintech-green/10 rounded-full text-fintech-green font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              India's #1 SIP Platform
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Start </span>
            <span className="bg-gradient-to-r from-fintech-green to-fintech-orange bg-clip-text text-transparent">SIP</span>
            <span className="text-gray-800"> with Just </span>
            <span className="bg-gradient-to-r from-fintech-orange to-fintech-green bg-clip-text text-transparent">₹100</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join over 2 million investors who trust Money Bharat for their systematic investment journey. 
            Start small, dream big, achieve more.
          </motion.p>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-green mb-1">50K+</div>
              <div className="text-sm text-gray-600">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-orange mb-1">₹500Cr+</div>
              <div className="text-sm text-gray-600">Assets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-blue mb-1">15%</div>
              <div className="text-sm text-gray-600">Avg. Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-purple mb-1">Free</div>
              <div className="text-sm text-gray-600">Consultation</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }} variants={containerVariants}>
          {enhancedFeatures.map((feature, index) => <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 ${feature.highlight ? 'bg-gradient-to-br from-fintech-green/5 to-fintech-orange/5 ring-2 ring-fintech-green/20' : 'bg-white/80 backdrop-blur-sm hover:bg-white'}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                      {feature.icon}
                      {feature.highlight && <div className="absolute -top-1 -right-1 w-3 h-3 bg-fintech-orange rounded-full animate-pulse"></div>}
                    </div>
                    {feature.stats && <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        {feature.stats}
                      </div>}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.highlight && <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Investment Growth</span>
                        <span>85% Complete</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>}
                </CardContent>
              </Card>
            </motion.div>)}
        </motion.div>

        {/* Success Story Section */}
        <motion.div className="bg-gradient-to-r from-fintech-green/10 to-fintech-orange/10 rounded-2xl p-8 mb-12" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }} variants={itemVariants}>
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Real Success Story: From ₹5,000 to ₹30 Lakhs
            </h3>
            <p className="text-gray-600 mb-6">
              "I started with ₹5,000 monthly SIP 15 years ago. Today, my investment is worth over ₹30 lakhs! 
              The power of compounding and consistent investing changed my life."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-fintech-green">₹5,000</div>
                <div className="text-sm text-gray-600">Monthly SIP</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fintech-orange">15 Years</div>
                <div className="text-sm text-gray-600">Investment Period</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fintech-blue">₹30+ Lakhs</div>
                <div className="text-sm text-gray-600">Current Value</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }} variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://spyraexima.wylth.com/NewOnBoarding/SignUp" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-orange text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-6 text-lg">
                Start Your SIP Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button variant="outline" className="border-fintech-green text-fintech-green hover:bg-fintech-green hover:text-white px-8 py-6 text-lg">
              Calculate SIP Returns
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No hidden charges • Free portfolio management • Expert guidance included
          </p>
        </motion.div>
      </div>
    </section>;
};
export default SIPFeatures;