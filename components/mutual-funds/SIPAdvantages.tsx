import { Check, ArrowDownCircle, DollarSign, HandCoins, CircleUser, CalendarClock } from "lucide-react";

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
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-background via-accent/30 to-background text-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Advantages of </span>
            <span className="text-destructive">Mutual Fund SIP</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Systematic Investment Plans offer numerous advantages for long-term wealth creation and financial discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Investment Discipline</h3>
                <p className="text-muted-foreground">
                  SIP encourages regular investing, fostering financial discipline. It helps you stay committed to your investment goals over the long term.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <ArrowDownCircle className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Power of Compounding</h3>
                <p className="text-muted-foreground">
                  By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">You Can Start Small</h3>
                <p className="text-muted-foreground">
                  You can start investing with a minimal amount such as Rs. 500, making SIPs accessible for everyone. This flexibility allows you to grow your investment gradually.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <HandCoins className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Convenient - At Your Fingertips</h3>
                <p className="text-muted-foreground">
                  SIPs offer convenience, allowing you to invest effortlessly through online platforms, ensuring your investments are just a click away.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <CircleUser className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Professional Fund Management</h3>
                <p className="text-muted-foreground">
                  Your SIP mutual funds are managed by professional fund managers, ensuring that your portfolio benefits from expert insights and strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <CalendarClock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Can be Automated</h3>
                <p className="text-muted-foreground">
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