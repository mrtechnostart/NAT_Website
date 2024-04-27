import EmailComponent from "@/components/EmailComponent"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"


export default function Component() {
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Nat Technology is a leading provider of Android and web applications, serving clients across various
              industries. Our team of skilled developers and designers are dedicated to delivering innovative solutions
              that drive business success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">Avlon Rangoli, Bhiwari, Rajasthan</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">nattechandtechnologies@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">+91 8383997355</p>
              </div>
            </div>
          </div>
          <EmailComponent/>
        </div>
      </div>
    </section>
  )
}
