import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Bot, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedDataViz from './AnimatedDataViz'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-asset-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-asset-gray-900 leading-tight">
              Transforming Property Management with{' '}
              <span className="text-asset-secondary">Intelligent Technology</span>
            </h1>
            <p className="mt-6 text-lg text-asset-gray-600 leading-relaxed">
              AI-powered solutions built for the future of third-party property management. 
              Optimize operations, enhance resident experiences, and drive growth with our 
              cutting-edge PropTech platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-asset-secondary hover:bg-asset-accent rounded-md transition-all duration-200 hover:scale-105"
              >
                See the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-asset-secondary bg-white border-2 border-asset-secondary hover:bg-asset-gray-50 rounded-md transition-all duration-200"
              >
                Book a Demo
              </Link>
            </div>

            {/* Feature Icons */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-asset-secondary/10 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-asset-secondary" />
                </div>
                <span className="text-sm text-asset-gray-600">Data-Driven</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-asset-secondary/10 rounded-lg flex items-center justify-center mb-2">
                  <Bot className="h-6 w-6 text-asset-secondary" />
                </div>
                <span className="text-sm text-asset-gray-600">AI-Powered</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-asset-secondary/10 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-asset-secondary" />
                </div>
                <span className="text-sm text-asset-gray-600">Automated</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <AnimatedDataViz />
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-asset-secondary/5 to-transparent" />
        <svg
          className="absolute right-0 top-0 -mr-20 -mt-20 text-asset-gray-100"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-asset-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  )
}