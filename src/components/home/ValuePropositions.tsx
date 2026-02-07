import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, Bot, Zap, Scale } from 'lucide-react'

const propositions = [
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Turn property data into actionable insights with advanced BI tools',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports'],
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Automate routine tasks and focus on what matters',
    features: ['Workflow automation', 'Smart scheduling', 'Task prioritization'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Efficiency',
    description: 'Leverage machine learning to optimize operations',
    features: ['Resident scoring', 'Predictive maintenance', 'Virtual assistants'],
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description: 'Built to grow with your portfolio',
    features: ['Multi-property support', 'Enterprise integration', 'Flexible deployment'],
  },
]

export default function ValuePropositions() {
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
            Why Choose AssetLiving.tech?
          </h2>
          <p className="mt-4 text-lg text-asset-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with deep industry expertise 
            to deliver unparalleled property management solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {propositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-asset-gray-50 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-asset-gray-200">
                <div className="w-14 h-14 bg-asset-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-asset-secondary/20 transition-colors">
                  <prop.icon className="h-7 w-7 text-asset-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-asset-gray-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-asset-gray-600 mb-4">
                  {prop.description}
                </p>
                <ul className="space-y-2">
                  {prop.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-asset-gray-500">
                      <div className="w-1.5 h-1.5 bg-asset-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}