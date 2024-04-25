import Link from "next/link";

// Define an array of objects representing projects
const projects = [
  {
    title: "BreakButter",
    description: "Your anime needs met with our cutting-edge application, designed for anime enthusiasts.",
    imageSrc: "/images/Anime.jpg",
    link: "https://drive.google.com/file/d/1geDipu1Da53JpSGARvAVkO19aFmUfXDh/view",
    type: "app"
  },
  {
    title: "Gymnasium",
    description: "Your fitness goals met with our cutting-edge application, designed for gym enthusiasts.",
    imageSrc: "/images/gym.jpg",
    link: "https://drive.google.com/file/d/1exnXkdQyp5Ab7b8_4lB3wBEV4gqZYUsX/view",
    type: "app"
  },
  {
    title: "Musify",
    description: "Musify is a music streaming application that offers a wide range of songs and playlists.",
    imageSrc: "/images/music.jpg",
    link: "https://drive.google.com/file/d/1KiBLpBp1Wpmc4jx2HeJyIKFxdcsBvmWk/view",
    type: "app"
  },
  {
    title: "Revamp",
    description: "Revamp is an application that offers e-waste recycling services to users.",
    imageSrc: "/images/qualityjpg.jpg",
    link: "https://github.com/mrtechnostart/Revamp_Project",
    type: "web"
  },
  {
    title: "Quality Next",
    description: "Quality Next is an ERP portal for managing hostel related services like room booking, mess management etc.",
    imageSrc: "/images/quality.jpg",
    link: "https://github.com/mrtechnostart/Quality_Next",
    type: "web"
  },
  {
    title: "Shortify",
    description: "A Link Shortener application that helps you shorten your long URLs into short ones.",
    imageSrc: "/images/shortify.jpg",
    link: "https://shortify.projectblaze.in",
    type: "web"
  }
];

export default function Page() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 pt-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our diverse range of Android and web applications.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto mt-10 pb-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
              <img
                alt={project.title}
                className="w-full h-48 object-cover"
                height="200"
                src={project.imageSrc}
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{project.description}</p>
                <Link
                  className="inline-flex items-center justify-center mt-4 bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                  href={project.link}
                  target="_blank"
                >
                  {project.type === "web" ? "Visit Now!" : "Download Now!"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
