import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AxisMF from "@/assets/mutual-fund-partners/AXISMUTUALFUND_MF.png";
import DspMF from "@/assets/mutual-fund-partners/DSP_MF.png";
import BajajFinservMF from "@/assets/mutual-fund-partners/BAJAJ_FINSERV_MF.png";
import BandhanMF from "@/assets/mutual-fund-partners/BANDHANMUTUALFUND_MF.png";
import BankOfIndiaMF from "@/assets/mutual-fund-partners/BANKOFINDIAMUTUALFUND_MF.png";
import BarodaBNPParibasMF from "@/assets/mutual-fund-partners/BARODABNPPARIBASMUTUALFUND_MF.png";
import BirlaSunLifeMF from "@/assets/mutual-fund-partners/BirlaSunLifeMutualFund_MF.png";
import CanaraRobecoMF from "@/assets/mutual-fund-partners/CANARAROBECOMUTUALFUND_MF.png";
import EdelweissMF from "@/assets/mutual-fund-partners/EDELWEISSMUTUALFUND_MF.png";
import ThreeSixtyOneMF from "@/assets/mutual-fund-partners/360_ONE_MUTUALFUND_MF.png";

const mutualFundPartners = [
  { name: "360 ONE MF", logo: ThreeSixtyOneMF },
  { name: "Axis MF", logo: AxisMF },
  { name: "Bajaj Finserv MF", logo: BajajFinservMF },
  { name: "Bandhan MF", logo: BandhanMF },
  { name: "Bank of India MF", logo: BankOfIndiaMF },
  { name: "Baroda BNP Paribas MF", logo: BarodaBNPParibasMF },
  { name: "Aditya Birla Sun Life MF", logo: BirlaSunLifeMF },
  { name: "Canara Robeco MF", logo: CanaraRobecoMF },
  { name: "DSP MF", logo: DspMF },
  { name: "Edelweiss MF", logo: EdelweissMF },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 bg-gradient-to-br from-secondary/50 via-background to-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold text-center text-foreground">
            Trusted Mutual Fund Partners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Invest with confidence through India's leading Asset Management Companies
          </p>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {mutualFundPartners.map((partner, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
                  <div className="flex rounded-lg aspect-square bg-background border shadow-sm hover:shadow-md transition-shadow items-center justify-center p-4">
                    <img 
                      src={partner.logo.src} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };