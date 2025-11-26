import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Feature2Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

export const Feature2 = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonPrimary,
  buttonSecondary,
}: Feature2Props) => {
  return (
    <div className="container">
      <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-96 w-full rounded-md object-cover"
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
            {title}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild>
              <Link href={buttonPrimary.href}>
                {buttonPrimary.label}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={buttonSecondary.href}>
                {buttonSecondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
