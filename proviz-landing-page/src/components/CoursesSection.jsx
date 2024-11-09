import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const courses = [
  {
    title: "Machine Learning Fundamentals",
    description: "Master the basics of ML algorithms, data preprocessing, and model evaluation.",
    duration: "12 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&auto=format&fit=crop"
  },
  {
    title: "Deep Learning & Neural Networks",
    description: "Dive deep into neural networks, CNN, RNN, and advanced architectures.",
    duration: "16 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop"
  },
  {
    title: "Natural Language Processing",
    description: "Learn text processing, sentiment analysis, and language modeling.",
    duration: "14 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop"
  }
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 sticky top-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4">
            Our Courses
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive AI education designed to transform beginners into industry-ready professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="rounded-[22px] p-6 sm:p-8 bg-neutral-900">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="object-cover w-full h-48 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-2xl text-neutral-100 mb-2">{course.title}</h3>
                <p className="text-neutral-400 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-neutral-300">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 