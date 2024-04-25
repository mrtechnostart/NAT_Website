import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, MountainIcon } from "lucide-react"
import Link  from 'next/link'

export default function Navbar(){
    return(
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">NatTechnologies</span>
          </Link>
          <nav className="hidden space-x-4 lg:flex">
            <Link
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/project"
            >
              Projects
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                  Home
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/project">
                  Projects
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
}