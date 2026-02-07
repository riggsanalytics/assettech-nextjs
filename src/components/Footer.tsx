import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-asset-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">AssetLiving</span>
              <span className="text-2xl font-light text-asset-green">.tech</span>
            </div>
            <p className="text-asset-lightGray text-sm">
              Transforming property management with intelligent technology solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-asset-lightGray hover:text-asset-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-asset-lightGray hover:text-asset-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-asset-lightGray hover:text-asset-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/business-intelligence" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-ml" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/solutions/agents" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Intelligent Agents
                </Link>
              </li>
              <li>
                <Link to="/solutions/automation" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Automation Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <a href="https://assetliving.com" target="_blank" rel="noopener noreferrer" className="text-asset-lightGray hover:text-asset-green transition-colors text-sm">
                  Asset Living
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-asset-lightGray">
              <li>support@assetliving.tech</li>
              <li>1-800-123-4567</li>
              <li className="pt-2">
                <Link to="/contact" className="inline-block px-4 py-2 bg-asset-mediumBlue hover:bg-asset-blue text-white rounded-md transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-asset-grayBlue">
          <p className="text-center text-sm text-asset-lightGray">
            © {new Date().getFullYear()} AssetLiving.tech. All rights reserved. A technology spinoff of Asset Living.
          </p>
        </div>
      </div>
    </footer>
  )
}