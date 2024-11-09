import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in AI and Machine Learning.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Hands-on Projects",
    description: "Build real-world AI applications and develop a strong portfolio during your learning journey.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Career Support",
    description: "Get personalized career guidance, interview preparation, and job placement assistance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible Learning",
    description: "Choose between online, hybrid, or in-person learning options to fit your schedule.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 sticky top-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4">
            Why Choose Proviz?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We combine cutting-edge curriculum, industry expertise, and personalized support to help you succeed in the AI field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="h-full p-6 rounded-2xl bg-neutral-900">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 