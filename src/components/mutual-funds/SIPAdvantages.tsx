
import { Check, CircleArrowDown, DollarSign, HandCoins, CircleUser, CalendarClock } from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
}

interface SIPAdvantagesProps {
  advantages: Advantage[];
}

const SIPAdvantages = ({ advantages }: SIPAdvantagesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-purple-50/30 to-white text-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Advantages of </span>
            <span className="text-fintech-orange">Mutual Fund SIP</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Systematic Investment Plans offer numerous advantages for long-term wealth creation and financial discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Investment Discipline</h3>
                <p className="text-gray-600">
                  SIP encourages regular investing, fostering financial discipline. It helps you stay committed to your investment goals over the long term.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <CircleArrowDown className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Power of Compounding</h3>
                <p className="text-gray-600">
                  By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">You Can Start Small</h3>
                <p className="text-gray-600">
                  You can start investing with a minimal amount such as Rs. 500, making SIPs accessible for everyone. This flexibility allows you to grow your investment gradually.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <HandCoins className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Convenient - At Your Fingertips</h3>
                <p className="text-gray-600">
                  SIPs offer convenience, allowing you to invest effortlessly through online platforms, ensuring your investments are just a click away.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                <CircleUser className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Professional Fund Management</h3>
                <p className="text-gray-600">
                  Your SIP mutual funds are managed by professional fund managers, ensuring that your portfolio benefits from expert insights and strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <CalendarClock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Can be Automated</h3>
                <p className="text-gray-600">
                  SIPs can be easily automated via AutoPay on Dhan, setting up hassle-free monthly investments. This ensures consistency without the need for constant manual input.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPAdvantages;
