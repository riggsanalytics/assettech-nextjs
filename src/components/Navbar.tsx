import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: [
      { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
      { name: 'AI & Machine Learning', href: '/solutions/ai-ml' },
      { name: 'Intelligent Agents', href: '/solutions/agents' },
      { name: 'Automation Platform', href: '/solutions/automation' }
    ]
  },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-sm border-b border-asset-lightGray relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-asset-blue">AssetLiving</span>
              <span className="text-2xl font-light text-asset-mediumBlue">.tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center text-asset-grayBlue hover:text-asset-mediumBlue px-3 py-2 text-sm font-medium transition-colors"
                      onMouseEnter={() => setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {dropdownOpen === item.name && (
                      <div
                        className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg ring-1 ring-asset-lightGray ring-opacity-25 z-50"
                        onMouseEnter={() => setDropdownOpen(item.name)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-asset-grayBlue hover:bg-asset-offwhite hover:text-asset-mediumBlue transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-asset-grayBlue hover:text-asset-mediumBlue px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-asset-mediumBlue hover:bg-asset-blue rounded-md transition-colors"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-asset-grayBlue hover:text-asset-darkBlue hover:bg-asset-offwhite"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-asset-lightGray">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-asset-grayBlue hover:text-asset-mediumBlue hover:bg-asset-offwhite"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-asset-mediumGray hover:text-asset-mediumBlue hover:bg-asset-offwhite"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-asset-secondary hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-white bg-asset-mediumBlue hover:bg-asset-blue rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}