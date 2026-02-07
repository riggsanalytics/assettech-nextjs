import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'

export default function ROICalculator() {
  const [units, setUnits] = useState(100)
  const [avgRent, setAvgRent] = useState(1500)
  const [maintenanceHours, setMaintenanceHours] = useState(40)
  const [adminHours, setAdminHours] = useState(50)

  // Calculate savings
  const automationSavings = (maintenanceHours * 0.5 + adminHours * 0.6) * 52 * 35 // 50% maintenance, 60% admin reduction, $35/hour
  const occupancyRevenue = units * avgRent * 0.03 * 12 // 3% occupancy improvement
  const screeningSavings = units * 2.5 * 25 // 2.5 applications per unit per year, $25 saved per screening
  const totalSavings = automationSavings + occupancyRevenue + screeningSavings

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Calculator className="h-8 w-8 text-asset-mediumBlue mr-3" />
        <h2 className="text-2xl font-bold text-asset-darkBlue">ROI Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-asset-grayBlue mb-2">
              Number of Units
            </label>
            <input
              type="range"
              min="50"
              max="1000"
              step="50"
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-asset-mediumGray">50</span>
              <span className="text-lg font-semibold text-asset-mediumBlue">{units}</span>
              <span className="text-sm text-asset-mediumGray">1000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-asset-grayBlue mb-2">
              Average Monthly Rent
            </label>
            <input
              type="range"
              min="800"
              max="3000"
              step="100"
              value={avgRent}
              onChange={(e) => setAvgRent(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-asset-mediumGray">$800</span>
              <span className="text-lg font-semibold text-asset-mediumBlue">{formatCurrency(avgRent)}</span>
              <span className="text-sm text-asset-mediumGray">$3000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-asset-grayBlue mb-2">
              Weekly Maintenance Hours
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={maintenanceHours}
              onChange={(e) => setMaintenanceHours(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-asset-mediumGray">10</span>
              <span className="text-lg font-semibold text-asset-mediumBlue">{maintenanceHours}h</span>
              <span className="text-sm text-asset-mediumGray">100</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-asset-grayBlue mb-2">
              Weekly Admin Hours
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={adminHours}
              onChange={(e) => setAdminHours(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-asset-mediumGray">10</span>
              <span className="text-lg font-semibold text-asset-mediumBlue">{adminHours}h</span>
              <span className="text-sm text-asset-mediumGray">100</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-asset-mediumBlue to-asset-green text-white rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Total Annual Savings</h3>
            <div className="text-4xl font-bold">{formatCurrency(totalSavings)}</div>
            <p className="text-sm mt-2 opacity-90">Based on industry averages</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-asset-offwhite rounded-xl p-4 flex items-center"
          >
            <Clock className="h-10 w-10 text-asset-mediumBlue mr-4" />
            <div>
              <h4 className="font-semibold text-asset-darkBlue">Time Saved</h4>
              <p className="text-2xl font-bold text-asset-mediumBlue">
                {Math.round((maintenanceHours * 0.5 + adminHours * 0.6) * 52)}h/year
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-asset-offwhite rounded-xl p-4 flex items-center"
          >
            <TrendingUp className="h-10 w-10 text-asset-mediumBlue mr-4" />
            <div>
              <h4 className="font-semibold text-asset-darkBlue">Occupancy Increase</h4>
              <p className="text-2xl font-bold text-asset-mediumBlue">+3%</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-asset-offwhite rounded-xl p-4 flex items-center"
          >
            <DollarSign className="h-10 w-10 text-asset-mediumBlue mr-4" />
            <div>
              <h4 className="font-semibold text-asset-darkBlue">Cost per Unit</h4>
              <p className="text-2xl font-bold text-asset-mediumBlue">
                {formatCurrency(totalSavings / units)}/year
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-asset-lightBlue/20 rounded-lg">
        <p className="text-sm text-asset-grayBlue">
          <strong>Note:</strong> Calculations based on industry averages including 50% reduction in maintenance time, 
          60% reduction in administrative tasks, 3% occupancy improvement, and automated resident screening savings.
        </p>
      </div>
    </div>
  )
}