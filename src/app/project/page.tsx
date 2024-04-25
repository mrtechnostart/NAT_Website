import Link from "next/link"

export default function Page() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our diverse range of Android and web applications.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto mt-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
            <img
              alt="Project 1"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/200",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nat Android App</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Our flagship Android application, providing a seamless user experience.
              </p>
              <Link
                className="inline-flex items-center justify-center mt-4 bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="#"
              >
                Visit Website
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
            <img
              alt="Project 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/200",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nat Web App</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Our modern web application, designed for seamless user interactions.
              </p>
              <Link
                className="inline-flex items-center justify-center mt-4 bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="#"
              >
                Visit Website
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
            <img
              alt="Project 3"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/200",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nat Mobile App</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Our cutting-edge mobile application, designed for on-the-go productivity.
              </p>
              <Link
                className="inline-flex items-center justify-center mt-4 bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="#"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
