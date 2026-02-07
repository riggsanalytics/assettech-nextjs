import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Bot, MessageSquare, Phone, FileText, Clock, Users, ArrowRight, Check, Sparkles, TrendingUp } from 'lucide-react'

const agents = [
  {
    icon: MessageSquare,
    title: 'Virtual Leasing Assistant',
    description: 'AI-powered chatbot that handles inquiries, schedules tours, and pre-qualifies prospects 24/7.',
    capabilities: [
      'Instant response to prospect inquiries',
      'Automated tour scheduling',
      'Multi-language support',
      'Lead qualification and scoring',
    ],
    metrics: '85% lead capture rate',
  },
  {
    icon: Phone,
    title: 'Intelligent Phone Agent',
    description: 'Voice AI that answers calls, provides property information, and routes urgent matters.',
    capabilities: [
      'Natural conversation flow',
      'Property detail retrieval',
      'Appointment booking',
      'Emergency call routing',
    ],
    metrics: '3min avg. call time',
  },
  {
    icon: FileText,
    title: 'Application Processing Bot',
    description: 'Automates application review, document verification, and background check coordination.',
    capabilities: [
      'Document extraction and validation',
      'Income verification',
      'Background check integration',
      'Automated decision recommendations',
    ],
    metrics: '75% faster processing',
  },
  {
    icon: Users,
    title: 'Resident Support Agent',
    description: 'Handles maintenance requests, payment queries, and general resident communications.',
    capabilities: [
      'Maintenance ticket creation',
      'Payment status inquiries',
      'Policy clarification',
      'Renewal reminders',
    ],
    metrics: '90% first-contact resolution',
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Prospect Engagement',
    description: 'Virtual agents engage with prospects across multiple channels - website, phone, and social media.',
  },
  {
    number: '02',
    title: 'Qualification & Scheduling',
    description: 'AI qualifies leads based on your criteria and automatically schedules tours with available staff.',
  },
  {
    number: '03',
    title: 'Application Processing',
    description: 'Intelligent document processing and verification accelerates the application review process.',
  },
  {
    number: '04',
    title: 'Resident Onboarding',
    description: 'Automated onboarding ensures new residents have everything they need from day one.',
  },
]

const stats = [
  { value: '24/7', label: 'Availability' },
  { value: '< 30s', label: 'Response Time' },
  { value: '15+', label: 'Languages Supported' },
  { value: '95%', label: 'Satisfaction Rate' },
]

export default function IntelligentAgentsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: agentsRef, inView: agentsInView } = useInView({ triggerOnce: true })
  const { ref: workflowRef, inView: workflowInView } = useInView({ triggerOnce: true })
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-emerald-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <Bot className="h-4 w-4 mr-2" />
                Intelligent Agents
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Agents That Work
                <span className="text-emerald-600"> While You Sleep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Deploy intelligent virtual agents that handle resident inquiries, process applications, and manage routine tasks 24/7 with human-like understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                >
                  Deploy Your Agents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-600 bg-white border-2 border-emerald-600 hover:bg-emerald-50 rounded-md transition-colors">
                  Watch Agents in Action
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Chat Interface Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">AssetAI Assistant</h3>
                      <p className="text-sm text-green-600">Online</p>
                    </div>
                  </div>
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Hi! I'm interested in the 2-bedroom units at Sunset Grove.</p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-emerald-50 rounded-lg p-3 max-w-[80%] ml-auto"
                  >
                    <p className="text-sm text-gray-700">Great choice! We have 3 available 2-bedroom units at Sunset Grove starting at $1,850/month. Would you like to schedule a tour?</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-gray-100 rounded-lg p-3 max-w-[80%]"
                  >
                    <p className="text-sm text-gray-700">Yes, what times are available this week?</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="bg-emerald-50 rounded-lg p-3 max-w-[80%] ml-auto"
                  >
                    <p className="text-sm text-gray-700">I have availability tomorrow at 2 PM, Thursday at 11 AM, or Friday at 3 PM. Which works best for you?</p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-xs bg-white text-emerald-600 px-3 py-1 rounded border border-emerald-300">Tomorrow 2PM</button>
                      <button className="text-xs bg-white text-emerald-600 px-3 py-1 rounded border border-emerald-300">Thu 11AM</button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="mt-4 flex items-center text-sm text-gray-500"
                >
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Typical response time: under 30 seconds</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section ref={agentsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={agentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your AI-Powered Property Management Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each intelligent agent is specialized for specific tasks, working together to provide comprehensive automation for your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                animate={agentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <agent.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.title}</h3>
                    <p className="text-gray-600 mb-4">{agent.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {agent.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-emerald-200">
                  <span className="inline-flex items-center text-sm font-medium text-emerald-700">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {agent.metrics}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section ref={workflowRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Automation Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent agents work together to create a fully automated leasing and management experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full">
                    <svg className="w-full h-1" viewBox="0 0 100 1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100"
                        y2="0"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </div>
                )}
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-emerald-600 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Always-On Performance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-emerald-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Operations with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking property managers who are automating routine tasks and focusing on what matters most - growing their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}