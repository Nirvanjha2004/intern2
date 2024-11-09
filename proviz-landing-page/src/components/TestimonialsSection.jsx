import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content: "The Machine Learning course at Proviz completely transformed my career. The hands-on projects and mentorship were invaluable.",
  },
  {
    name: "Michael Chen",
    role: "AI Engineer at Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "The depth of knowledge I gained in Deep Learning was exceptional. The instructors are industry veterans who bring real-world experience.",
  },
  {
    name: "Emily Rodriguez",
    role: "NLP Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    content: "Proviz's NLP course gave me the perfect foundation for my research career. The curriculum is cutting-edge and practical.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 sticky top-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4">
            Student Success Stories
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Hear from our alumni about their journey and success after graduating from Proviz School of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="h-full rounded-[22px] p-6 sm:p-8 bg-neutral-900">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-200">{testimonial.name}</h3>
                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 