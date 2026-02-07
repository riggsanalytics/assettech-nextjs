import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Building2, Lightbulb, Users, Award, Rocket, Globe, ArrowRight, Check } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push the boundaries of PropTech to deliver cutting-edge solutions that transform property management.',
  },
  {
    icon: Users,
    title: 'Customer Obsessed',
    description: 'Every feature, every line of code is written with our customers\' success in mind.',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'We hold ourselves to the highest standards in everything we do, from code quality to customer service.',
  },
  {
    icon: Globe,
    title: 'Scale & Impact',
    description: 'Built to support portfolios of any size, from boutique properties to enterprise operations.',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'The Vision',
    description: 'Asset Living leadership recognizes the need for specialized PropTech solutions.',
  },
  {
    year: '2021',
    title: 'R&D Phase',
    description: 'Assembled a team of engineers and data scientists to develop our core platform.',
  },
  {
    year: '2022',
    title: 'Beta Launch',
    description: 'Piloted our solutions with select Asset Living properties, achieving remarkable results.',
  },
  {
    year: '2023',
    title: 'Market Entry',
    description: 'Officially launched AssetLiving.tech as an independent technology company.',
  },
  {
    year: '2024',
    title: 'Rapid Growth',
    description: 'Expanded to serve 500+ property management companies nationwide.',
  },
]

const team = [
  {
    name: 'Cory Hitte',
    role: 'CEO & Co-Founder',
    bio: 'Previously CTO at Asset Living. Former engineering leader at Bell Helicopter and GE Aviation.',
    image: '👨‍💼',
  },
  {
    name: 'Codie Riggs',
    role: 'CTO & Co-Founder',
    bio: 'Previously SVP of Data & Analytics at Asset Living. Former technology leader at BNSF Railway.',
    image: '👨‍💻',
  },
]

const stats = [
  { value: '100+', label: 'Team Members' },
  { value: '2M+', label: 'Units on Platform' },
  { value: '$5B+', label: 'Assets Under Management' },
  { value: '24/7', label: 'Support Available' },
]

export default function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true })
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true })
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true })
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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Building2 className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Born from Experience,
              <span className="text-blue-600"> Built for the Future</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AssetLiving.tech emerged from Asset Living's decades of property management expertise, 
              combining deep industry knowledge with cutting-edge technology to create the future of PropTech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower property management companies with intelligent technology that transforms operations, 
                enhances resident experiences, and drives sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that by combining the industry expertise of Asset Living—the nation's largest 
                third-party property management company—with advanced AI and automation, we can solve the 
                most pressing challenges facing property managers today.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Industry Leadership:</strong> Backed by Asset Living's management of 280,000+ units
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Technology Excellence:</strong> Built by engineers from leading tech companies
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Customer Focus:</strong> Solutions designed by property managers, for property managers
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12">
                <Rocket className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Accelerating the Future of Property Management
                </h3>
                <p className="text-gray-600">
                  We're not just building software—we're creating an ecosystem where property management 
                  companies can thrive in the digital age.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vision to reality, see how we've grown to become a leader in PropTech innovation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving innovation at AssetLiving.tech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-asset-mediumBlue font-medium mb-3 text-lg">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Property Management
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a property management company looking for solutions or a talented individual wanting to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#careers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}