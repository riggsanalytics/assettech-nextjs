import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'VP of Operations',
    company: 'Premier Property Management',
    content: 'AssetLiving.tech has transformed how we manage our 5,000+ unit portfolio. The AI-powered insights have helped us increase occupancy by 8% while reducing operational costs.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=2563eb&color=fff',
  },
  {
    name: 'Michael Chen',
    role: 'Regional Manager',
    company: 'Urban Living Solutions',
    content: 'The automation workflows have been a game-changer. We\'ve reduced maintenance response times by 50% and our residents love the instant updates they receive.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=2563eb&color=fff',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Technology',
    company: 'Coastal Communities',
    content: 'The platform\'s scalability and integration capabilities are impressive. We seamlessly connected it with our existing systems and saw immediate improvements in efficiency.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=2563eb&color=fff',
  },
]

export default function ClientTestimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asset-gray-900">
            Trusted by Leading Property Management Companies
          </h2>
          <p className="mt-4 text-lg text-asset-gray-600 max-w-2xl mx-auto">
            See how our clients are achieving exceptional results with AssetLiving.tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-asset-gray-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-asset-secondary/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-asset-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-asset-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-asset-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-asset-secondary">500+</div>
              <div className="text-sm text-asset-gray-600">Properties</div>
            </div>
            <div className="w-px h-12 bg-asset-gray-300" />
            <div className="text-center">
              <div className="text-4xl font-bold text-asset-secondary">100K+</div>
              <div className="text-sm text-asset-gray-600">Units Managed</div>
            </div>
            <div className="w-px h-12 bg-asset-gray-300" />
            <div className="text-center">
              <div className="text-4xl font-bold text-asset-secondary">98%</div>
              <div className="text-sm text-asset-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}