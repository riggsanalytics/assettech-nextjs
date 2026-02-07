import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Brain, Users, Workflow } from 'lucide-react'

const features = [
  {
    title: 'BI Dashboards for Property Performance',
    description: 'Get real-time insights into occupancy rates, maintenance costs, and revenue trends across your entire portfolio.',
    icon: BarChart3,
    link: '/solutions/business-intelligence',
    color: 'bg-blue-500',
    stats: '95% faster reporting',
  },
  {
    title: 'AI-Powered Resident Screening',
    description: 'Reduce risk and improve resident quality with machine learning algorithms that analyze applications in seconds.',
    icon: Brain,
    link: '/solutions/ai-ml',
    color: 'bg-purple-500',
    stats: '40% reduction in defaults',
  },
  {
    title: 'Virtual Leasing Agents',
    description: 'Engage prospects 24/7 with intelligent chatbots that answer questions, schedule tours, and qualify leads.',
    icon: Users,
    link: '/solutions/agents',
    color: 'bg-green-500',
    stats: '3x more leads captured',
  },
  {
    title: 'Maintenance Automation Workflows',
    description: 'Streamline work orders from request to resolution with automated assignment, tracking, and resident updates.',
    icon: Workflow,
    link: '/solutions/automation',
    color: 'bg-orange-500',
    stats: '50% faster resolution',
  },
]

export default function FeaturesShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-asset-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asset-gray-900">
            Powerful Features for Modern Property Management
          </h2>
          <p className="mt-4 text-lg text-asset-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools addresses every aspect of property management, 
            from resident acquisition to maintenance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={feature.link}
                className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-asset-gray-100 hover:border-asset-secondary/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-asset-gray-900 mb-2 group-hover:text-asset-secondary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-asset-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-asset-secondary">
                        {feature.stats}
                      </span>
                      <span className="flex items-center text-sm font-medium text-asset-secondary group-hover:translate-x-1 transition-transform">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}