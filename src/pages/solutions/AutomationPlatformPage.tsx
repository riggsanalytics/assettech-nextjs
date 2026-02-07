import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Settings, Workflow, Zap, Clock, Shield, TrendingUp, ArrowRight, Check, PlayCircle } from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Workflow Builder',
    description: 'Drag-and-drop interface to create custom automation workflows without coding.',
    highlights: [
      'Visual workflow designer',
      'Pre-built templates',
      'Conditional logic',
      'Multi-step automations',
    ],
  },
  {
    icon: Zap,
    title: 'Integration Hub',
    description: 'Connect all your property management tools and systems seamlessly.',
    highlights: [
      '500+ integrations',
      'API connectivity',
      'Real-time sync',
      'Custom webhooks',
    ],
  },
  {
    icon: Clock,
    title: 'Scheduled Actions',
    description: 'Set up time-based automations for recurring tasks and processes.',
    highlights: [
      'Recurring schedules',
      'Time zone aware',
      'Holiday calendars',
      'Smart delays',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance Automation',
    description: 'Ensure regulatory compliance with automated checks and documentation.',
    highlights: [
      'Automated audits',
      'Document generation',
      'Compliance tracking',
      'Alert notifications',
    ],
  },
]

const automationExamples = [
  {
    title: 'Move-in Automation',
    description: 'Automatically trigger welcome emails, access codes, and utility setup when a lease is signed.',
    savings: '2 hours per move-in',
    icon: '🏠',
  },
  {
    title: 'Maintenance Workflows',
    description: 'Route work orders, notify vendors, and update residents automatically based on request type.',
    savings: '45 min per ticket',
    icon: '🔧',
  },
  {
    title: 'Renewal Process',
    description: 'Send renewal offers, track responses, and generate new leases without manual intervention.',
    savings: '3 hours per renewal',
    icon: '📋',
  },
  {
    title: 'Payment Processing',
    description: 'Handle late fees, payment plans, and collections with automated rules and notifications.',
    savings: '90% fewer manual tasks',
    icon: '💳',
  },
]

const stats = [
  { value: '80%', label: 'Reduction in manual tasks' },
  { value: '350+', label: 'Pre-built automations' },
  { value: '15min', label: 'Average setup time' },
  { value: '99.9%', label: 'Automation reliability' },
]

export default function AutomationPlatformPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true })
  const { ref: examplesRef, inView: examplesInView } = useInView({ triggerOnce: true })
  const { ref: workflowRef, inView: workflowInView } = useInView({ triggerOnce: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                <Settings className="h-4 w-4 mr-2" />
                Automation Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Automate Everything,
                <span className="text-indigo-600"> Focus on Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build powerful automation workflows that eliminate repetitive tasks, reduce errors, and free your team to focus on what matters most - your residents and properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
                >
                  Start Automating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Workflow Visualization */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Workflow in Action</h3>
                
                <div className="space-y-4">
                  {/* Trigger */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Trigger: New Lease Signed</p>
                        <p className="text-sm text-gray-600">Resident signs lease agreement online</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex justify-center"
                  >
                    <ArrowRight className="h-6 w-6 text-indigo-400" />
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-sm font-medium text-green-900">✓ Send welcome email</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-sm font-medium text-green-900">✓ Generate access codes</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-sm font-medium text-green-900">✓ Schedule move-in inspection</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-sm font-medium text-green-900">✓ Update occupancy reports</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="mt-6 text-center"
                >
                  <p className="text-sm text-gray-600">Completed in <span className="font-semibold text-indigo-600">under 5 seconds</span></p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage automation workflows at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start">
                          <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section ref={examplesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={examplesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Automation Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how property managers are saving hours every day with our automation platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={examplesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{example.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-indigo-600">
                    <TrendingUp className="inline h-4 w-4 mr-1" />
                    {example.savings}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow Builder */}
      <section ref={workflowRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={workflowInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                No-Code Workflow Builder
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create complex automation workflows with our intuitive drag-and-drop builder. No programming knowledge required.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Visual Design Interface</span>
                    <p className="text-gray-600">Drag and drop actions to build your perfect workflow</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Test & Debug</span>
                    <p className="text-gray-600">Run test scenarios before deploying to production</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Version Control</span>
                    <p className="text-gray-600">Track changes and rollback if needed</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={workflowInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-12"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Automating Your Property Management Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of property managers who have transformed their operations with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-indigo-600 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-800 hover:bg-indigo-900 rounded-md transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}