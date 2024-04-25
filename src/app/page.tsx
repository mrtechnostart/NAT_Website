import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 xl:px-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900 leading-tight mb-4">
          Elevate Your Digital Presence with NatTechnologies
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-8">
          Unlock the power of cutting-edge web and mobile solutions to transform your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="https://drive.google.com/file/d/164bujoj0_dc6zKqHDbHztm-bjPNqgv8x/view?usp=sharing" target="_blank">
          <Button variant="dark" className="w-full sm:w-auto">
            Download Brochure
          </Button>
          </Link>
          <Link href="/contact">
          <Button variant="outline" className="w-full sm:w-auto">
            Contact Us
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
