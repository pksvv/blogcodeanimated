import Image from 'next/image'

const skills = [
  { name: 'Tensorflow', icon: '/static/favicons/tensorflow.svg' },
  { name: 'TypeScript', icon: '/static/favicons/typescript.svg' },
  { name: 'PyTorch', icon: '/static/favicons/pytorch.svg' },
  { name: 'Next.js', icon: '/static/favicons/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/static/favicons/tailwind.svg' },
  { name: 'Python', icon: '/static/favicons/python.svg' },
  { name: 'Google Cloud', icon: '/static/favicons/gcp.svg' },
  { name: 'Neo4j', icon: '/static/favicons/neo4j.svg' },
]

const experience = [
  {
    title: 'Engineering Director',
    company: 'American Express',
    duration: '2023 - Present',
    description:
      'Leading financial data engineering teams, driving tax automation, AI integration, and operational efficiencies.',
  },
  {
    title: 'Senior Engineering Manager',
    company: 'American Express',
    duration: '2019 - 2023',
    description:
      'Managed critical enterprise applications, scaled engineering teams, and implemented SRE best practices.',
  },
  {
    title: 'Engineering Manager',
    company: 'American Express',
    duration: '2016 - 2019',
    description:
      'Developed AI-based chatbots, document management solutions, and oversaw engineering initiatives.',
  },
  {
    title: 'Senior Engineer',
    company: 'American Express',
    duration: '2012 - 2016',
    description:
      'Worked on enterprise applications, led automation projects, and built tax and compliance tools.',
  },
]

export default function Skills() {
  return (
    <div className="bg-gray-100 py-16 transition-colors duration-300 dark:bg-gray-900">
      {/* Tech Stack Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Tech Stack & Skills</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Technologies I specialize in:</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48} // Set width explicitly
              height={48} // Set height explicitly
              className="transition-transform hover:scale-110 dark:invert"
            />
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Leadership & Experience
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          My journey in engineering leadership:
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl space-y-8 px-6">
        {experience.map((role, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-300 bg-white p-6 shadow-md 
                        transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{role.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{role.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
