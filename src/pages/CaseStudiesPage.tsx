import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, BarChart3, Check } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    company: 'Premier Property Management',
    logo: '🏢',
    title: 'Increasing Occupancy by 8% with AI-Powered Insights',
    category: 'Business Intelligence',
    highlights: [
      '8% increase in occupancy rate',
      '15% reduction in operational costs',
      '95% faster reporting',
      '5,000+ units optimized',
    ],
    challenge: 'Premier Property Management was struggling with declining occupancy rates and rising operational costs across their 5,000+ unit portfolio. Their manual reporting processes were time-consuming and provided outdated insights.',
    solution: 'We implemented our comprehensive BI dashboard with predictive analytics, enabling real-time monitoring of key metrics and AI-driven recommendations for pricing and marketing strategies.',
    results: [
      { metric: 'Occupancy Rate', before: '86%', after: '94%', improvement: '+8%' },
      { metric: 'Monthly Revenue', before: '$4.2M', after: '$4.8M', improvement: '+14%' },
      { metric: 'Report Generation', before: '3 days', after: '2 hours', improvement: '95% faster' },
      { metric: 'Operational Costs', before: '$850K', after: '$722K', improvement: '-15%' },
    ],
    testimonial: {
      quote: "AssetLiving.tech has transformed how we manage our portfolio. The AI-powered insights have been game-changing for our occupancy rates.",
      author: 'Sarah Johnson',
      role: 'VP of Operations',
    },
  },
  {
    id: 2,
    company: 'Urban Living Solutions',
    logo: '🏙️',
    title: 'Reducing Maintenance Response Time by 50%',
    category: 'Automation Platform',
    highlights: [
      '50% faster maintenance resolution',
      '90% resident satisfaction score',
      '3x maintenance team efficiency',
      '2,500 work orders automated monthly',
    ],
    challenge: 'Urban Living Solutions faced challenges with slow maintenance response times and poor communication between residents, maintenance teams, and vendors, leading to low resident satisfaction scores.',
    solution: 'We deployed our automation platform to streamline the entire maintenance workflow, from request submission to completion, with automated routing, vendor management, and real-time resident updates.',
    results: [
      { metric: 'Response Time', before: '48 hours', after: '24 hours', improvement: '-50%' },
      { metric: 'Satisfaction Score', before: '65%', after: '90%', improvement: '+38%' },
      { metric: 'Work Orders/Tech', before: '15/day', after: '45/day', improvement: '3x' },
      { metric: 'First-Time Fix Rate', before: '70%', after: '92%', improvement: '+31%' },
    ],
    testimonial: {
      quote: "The automation workflows have revolutionized our maintenance operations. Our residents love the instant updates and our team is more efficient than ever.",
      author: 'Michael Chen',
      role: 'Regional Manager',
    },
  },
  {
    id: 3,
    company: 'Coastal Communities',
    logo: '🏖️',
    title: 'Scaling from 50 to 500 Properties Seamlessly',
    category: 'Enterprise Platform',
    highlights: [
      '10x growth supported',
      '99.9% platform uptime',
      'Zero data migration issues',
      '$1.2M annual savings',
    ],
    challenge: 'Coastal Communities was experiencing rapid growth through acquisitions but their legacy systems couldn\'t scale. They needed a platform that could handle their expansion from 50 to 500 properties.',
    solution: 'We provided a fully scalable enterprise solution with seamless integrations to their existing systems, automated data migration, and customizable workflows to maintain consistency across all properties.',
    results: [
      { metric: 'Properties Managed', before: '50', after: '500', improvement: '10x growth' },
      { metric: 'IT Costs', before: '$2.5M/year', after: '$1.3M/year', improvement: '-48%' },
      { metric: 'Integration Time', before: '6 months', after: '2 weeks', improvement: '92% faster' },
      { metric: 'Staff Efficiency', before: '100 units/person', after: '250 units/person', improvement: '2.5x' },
    ],
    testimonial: {
      quote: "AssetLiving.tech's scalability has been crucial for our growth. We've 10x'd our portfolio without any technology hiccups.",
      author: 'Emily Rodriguez',
      role: 'Director of Technology',
    },
  },
]

const metrics = [
  { value: '500+', label: 'Success Stories' },
  { value: '$250M+', label: 'Revenue Generated' },
  { value: '1M+', label: 'Units Optimized' },
  { value: '98%', label: 'Client Retention' },
]

export default function CaseStudiesPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: metricsRef, inView: metricsInView } = useInView({ triggerOnce: true })

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
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how property management companies are transforming their operations and achieving exceptional results with AssetLiving.tech
            </p>
          </motion.div>

          {/* Metrics */}
          <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={metricsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{metric.value}</div>
                <div className="text-gray-600 mt-2">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const { ref, inView } = useInView({ triggerOnce: true })
              
              return (
                <motion.div
                  key={study.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="inline-flex items-center mb-4">
                      <span className="text-4xl mr-4">{study.logo}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <span className="text-sm text-blue-600 font-medium">{study.category}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {study.title}
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <p className="text-lg italic text-gray-700 mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{study.testimonial.role}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Get similar results
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Results */}
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h3>
                      
                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {study.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Before/After Metrics */}
                      <div className="space-y-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="bg-white rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">{result.metric}</span>
                              <span className="text-sm font-bold text-green-600">{result.improvement}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1">
                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                  <span>Before</span>
                                  <span>{result.before}</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full" />
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                              <div className="flex-1">
                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                  <span>After</span>
                                  <span>{result.after}</span>
                                </div>
                                <div className="h-2 bg-green-500 rounded-full" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of property management companies achieving exceptional results with AssetLiving.tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors"
            >
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}