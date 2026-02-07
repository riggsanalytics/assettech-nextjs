import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { BarChart3, TrendingUp, PieChart, Activity, Download, Shield, ArrowRight, Check } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    description: 'Monitor key metrics across your entire portfolio with customizable dashboards that update in real-time.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Leverage AI to forecast occupancy trends, maintenance needs, and revenue projections.',
  },
  {
    icon: PieChart,
    title: 'Custom Reports',
    description: 'Generate detailed reports tailored to your specific KPIs with automated scheduling and distribution.',
  },
  {
    icon: Activity,
    title: 'Performance Tracking',
    description: 'Track property and team performance with drill-down capabilities for actionable insights.',
  },
  {
    icon: Download,
    title: 'Data Export',
    description: 'Export data in multiple formats for further analysis or integration with other systems.',
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Role-based access control ensures sensitive data is only available to authorized personnel.',
  },
]

const benefits = [
  '95% faster report generation',
  'Real-time visibility across all properties',
  'Data-driven decision making',
  'Automated anomaly detection',
  'Historical trend analysis',
  'Mobile-responsive dashboards',
]

const metrics = [
  { label: 'Average Time Savings', value: '15 hours/week' },
  { label: 'Report Accuracy', value: '99.9%' },
  { label: 'Data Processing', value: 'Real-time' },
  { label: 'Properties Supported', value: 'Unlimited' },
]

export default function BusinessIntelligencePage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true })
  const { ref: metricsRef, inView: metricsInView } = useInView({ triggerOnce: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <BarChart3 className="h-4 w-4 mr-2" />
                Business Intelligence
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Data Into
                <span className="text-blue-600"> Actionable Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Make informed decisions with comprehensive analytics and reporting tools designed specifically for property management operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  View Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  {/* Mock Dashboard */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Occupancy Rate</h3>
                      <span className="text-2xl font-bold text-green-600">94.5%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-600"
                        initial={{ width: 0 }}
                        animate={heroInView ? { width: '94.5%' } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Monthly Revenue</p>
                      <p className="text-xl font-bold text-gray-900">$2.4M</p>
                      <p className="text-sm text-green-600">↑ 12%</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Maintenance Cost</p>
                      <p className="text-xl font-bold text-gray-900">$156K</p>
                      <p className="text-sm text-red-600">↓ 8%</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">AI Insight</p>
                    <p className="text-sm text-blue-800">
                      Occupancy expected to increase 2.3% next quarter based on market trends and seasonal patterns.
                    </p>
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
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to monitor, analyze, and optimize your property management operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Business Intelligence Platform?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our BI solution is built specifically for property management, with pre-configured 
                dashboards and reports that align with industry KPIs.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                See the difference in numbers
              </h3>
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-600">{metric.label}</span>
                      <span className="text-2xl font-bold text-blue-600">{metric.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join property management companies that have transformed their operations with our Business Intelligence platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}