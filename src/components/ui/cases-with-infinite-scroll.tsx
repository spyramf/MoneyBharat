import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const mutualFundPartners = [
  "HDFC MF",
  "ICICI Prudential",
  "SBI MF",
  "Axis MF",
  "Nippon India",
  "Kotak MF",
  "Aditya Birla SL",
  "UTI MF",
  "DSP MF",
  "Franklin Templeton",
  "IDFC MF",
  "L&T MF",
  "Mirae Asset",
  "Motilal Oswal",
  "Tata MF"
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
    <div className="w-full py-20 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold text-center text-gray-900">
            Trusted Mutual Fund Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Invest with confidence through India's leading Asset Management Companies
          </p>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {mutualFundPartners.map((partner, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
                  <div className="flex rounded-lg aspect-square bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow items-center justify-center p-6">
                    <span className="text-sm md:text-base font-semibold text-fintech-green text-center">
                      {partner}
                    </span>
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
