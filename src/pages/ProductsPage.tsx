import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import ROICalculator from '@/components/calculators/ROICalculator'
import { Check, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react'

const products = [
  {
    name: 'AssetConnect',
    tagline: 'Resident Engagement Platform',
    price: 'From $99/month',
    features: [
      'Resident portal & mobile app',
      'Maintenance request tracking',
      'Communication hub',
      'Payment processing',
      'Community features',
      'Basic reporting',
    ],
    highlighted: false,
    icon: Users,
    color: 'green',
  },
  {
    name: 'AssetInsight Pro',
    tagline: 'Complete Business Intelligence Suite',
    price: 'From $299/month',
    features: [
      'Real-time performance dashboards',
      'Custom report builder',
      'Predictive analytics',
      'Mobile app access',
      'API integration',
      '24/7 support',
    ],
    highlighted: false,
    icon: TrendingUp,
    color: 'blue',
  },
  {
    name: 'AssetAI Enterprise',
    tagline: 'Full AI & Automation Platform',
    price: 'Custom pricing',
    features: [
      'All AssetInsight Pro features',
      'AI-powered resident screening',
      'Predictive maintenance',
      'Virtual leasing agents',
      'Smart pricing optimization',
      'White-label options',
    ],
    highlighted: true,
    icon: Zap,
    color: 'purple',
  },
]

const stats = [
  { value: '2,500+', label: 'Properties Using Our Platform' },
  { value: '500K+', label: 'Units Under Management' },
  { value: '4.9/5', label: 'Average Customer Rating' },
  { value: '99.9%', label: 'Platform Uptime' },
]

export default function ProductsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: productsRef, inView: productsInView } = useInView({ triggerOnce: true })
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the Perfect Solution for Your Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From small property managers to enterprise portfolios, we have the right tools to transform your operations.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => {
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                green: 'from-green-500 to-green-600',
              }[product.color]

              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={productsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    product.highlighted ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {product.highlighted && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`h-2 bg-gradient-to-r ${colorClasses}`} />
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-lg flex items-center justify-center`}>
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.tagline}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                        product.highlighted
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare Features Across Plans
            </h2>
            <p className="text-lg text-gray-600">
              All plans include our core features with additional capabilities as you scale
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">AssetConnect</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">AssetInsight Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-purple-600">AssetAI Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Real-time Dashboards</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Basic</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI-Powered Features</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Limited</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Custom Integrations</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Support Level</td>
                    <td className="px-6 py-4 text-center text-sm">Email</td>
                    <td className="px-6 py-4 text-center text-sm">Priority</td>
                    <td className="px-6 py-4 text-center text-sm">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Return on Investment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how much you can save by implementing AssetLiving.tech solutions
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of property management companies already using AssetLiving.tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}