import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Brain, Sparkles, Target, TrendingUp, Shield, Zap, ArrowRight, Check } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Intelligent Resident Screening',
    description: 'AI analyzes applications, credit scores, rental history, and behavioral patterns to predict resident reliability.',
  },
  {
    icon: Sparkles,
    title: 'Predictive Maintenance',
    description: 'Machine learning models forecast equipment failures and maintenance needs before they become critical.',
  },
  {
    icon: Target,
    title: 'Dynamic Pricing Optimization',
    description: 'Real-time market analysis and demand forecasting to maximize revenue while maintaining competitive rates.',
  },
  {
    icon: TrendingUp,
    title: 'Occupancy Forecasting',
    description: 'Advanced algorithms predict future occupancy trends based on historical data and market conditions.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Automated detection of fraudulent applications and suspicious activities to protect your properties.',
  },
  {
    icon: Zap,
    title: 'Smart Energy Management',
    description: 'AI-driven optimization of energy consumption across properties to reduce costs and environmental impact.',
  },
]

const aiCapabilities = [
  {
    title: 'Natural Language Processing',
    description: 'Analyze resident communications and feedback',
    percentage: 95,
  },
  {
    title: 'Computer Vision',
    description: 'Automated property inspection and damage detection',
    percentage: 88,
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and prevent issues',
    percentage: 92,
  },
  {
    title: 'Machine Learning Models',
    description: 'Continuously improving algorithms',
    percentage: 97,
  },
]

const stats = [
  { value: '40%', label: 'Reduction in resident defaults' },
  { value: '85%', label: 'Accuracy in maintenance predictions' },
  { value: '25%', label: 'Increase in revenue optimization' },
  { value: '60%', label: 'Faster application processing' },
]

export default function AIMLPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true })
  const { ref: capabilitiesRef, inView: capabilitiesInView } = useInView({ triggerOnce: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-purple-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <Brain className="h-4 w-4 mr-2" />
                AI & Machine Learning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Harness the Power of
                <span className="text-purple-600"> Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your property management with cutting-edge AI and machine learning solutions that automate decisions, predict outcomes, and optimize operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                  See AI in Action
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* AI Visualization */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20" />
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Processing Live Data</h3>
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-purple-600 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Animated Neural Network */}
                  <div className="relative h-64">
                    <svg className="absolute inset-0 w-full h-full">
                      {/* Neural network connections */}
                      {[...Array(6)].map((_, i) => (
                        <motion.line
                          key={i}
                          x1={`${20 + i * 15}%`}
                          y1="20%"
                          x2={`${30 + i * 10}%`}
                          y2="80%"
                          stroke="#9333ea"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={heroInView ? { pathLength: 1 } : {}}
                          transition={{ duration: 2, delay: i * 0.1 }}
                        />
                      ))}
                    </svg>

                    {/* AI Insights */}
                    <div className="absolute bottom-0 left-0 right-0 bg-purple-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-purple-900">AI Prediction</p>
                      <p className="text-sm text-purple-700">
                        98.2% probability of on-time rent payment based on application analysis
                      </p>
                    </div>
                  </div>
                </div>
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
              AI-Powered Solutions for Every Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our machine learning models are trained on millions of property management data points to deliver accurate, actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section ref={capabilitiesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform leverages state-of-the-art AI technologies to deliver unparalleled insights and automation for property management.
              </p>
              
              <div className="space-y-6">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={capabilitiesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{capability.title}</h4>
                      <span className="text-purple-600 font-medium">{capability.percentage}%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{capability.description}</p>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ width: 0 }}
                        animate={capabilitiesInView ? { width: `${capability.percentage}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={capabilitiesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Property Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in property management. Our experts will help you implement AI solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Get AI Assessment
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-800 hover:bg-purple-900 rounded-md transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}