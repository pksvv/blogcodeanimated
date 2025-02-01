import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-16 
                    text-center transition-colors duration-300 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Profile Image */}
      <Image
        //src="/static/images/profile.jpg"
        src="/static/favicons/vg_hexagon.svg"
        alt={siteMetadata.author}
        width={150}
        height={150}
        //className="rounded-full shadow-lg text-black dark:text-white"
        className="rw-40 h-40 text-blue-500 dark:text-yellow-400"
      />

      {/* Name / Title */}
      <h1 className="mt-4 text-4xl font-extrabold text-white dark:text-gray-200 sm:text-5xl md:text-6xl">
        {siteMetadata.author}
      </h1>

      {/* Subtitle / Short Bio */}
      <p className="mt-2 max-w-2xl text-lg text-gray-200 dark:text-gray-400 sm:text-xl">
        {siteMetadata.description}
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link
          href="/resume.pdf"
          className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-md transition 
                     hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Download Resume
        </Link>
        <Link
          href="/contact"
          className="rounded-lg bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-md transition 
                     hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}
