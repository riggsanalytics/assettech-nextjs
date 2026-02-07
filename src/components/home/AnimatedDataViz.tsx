import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { useState, useEffect } from 'react'

const occupancyData = [
  { month: 'Jan', rate: 92 },
  { month: 'Feb', rate: 94 },
  { month: 'Mar', rate: 95 },
  { month: 'Apr', rate: 93 },
  { month: 'May', rate: 96 },
  { month: 'Jun', rate: 97 },
]

const maintenanceData = [
  { category: 'Preventive', value: 45, color: '#2563eb' },
  { category: 'Reactive', value: 30, color: '#3b82f6' },
  { category: 'Predictive', value: 25, color: '#60a5fa' },
]

const performanceData = [
  { metric: 'Response Time', value: 85 },
  { metric: 'Satisfaction', value: 92 },
  { metric: 'Efficiency', value: 88 },
  { metric: 'Cost Savings', value: 78 },
]

export default function AnimatedDataViz() {
  const [activeChart, setActiveChart] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const charts = [
    {
      title: 'Occupancy Optimization',
      subtitle: 'AI-driven predictions boost occupancy rates',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={occupancyData}>
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ fill: '#2563eb', r: 6 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Maintenance Analytics',
      subtitle: 'Predictive maintenance reduces costs by 30%',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={maintenanceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={1500}
            >
              {maintenanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Performance Metrics',
      subtitle: 'Real-time KPIs drive operational excellence',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={performanceData} layout="horizontal">
            <XAxis type="number" stroke="#6b7280" />
            <YAxis type="category" dataKey="metric" stroke="#6b7280" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#2563eb"
              animationDuration={1500}
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ]

  return (
    <div className="relative">
      {/* Chart Container */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-6 border border-asset-gray-100"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-asset-gray-900">
            {charts[activeChart].title}
          </h3>
          <p className="text-sm text-asset-gray-600">
            {charts[activeChart].subtitle}
          </p>
        </div>
        
        <motion.div
          key={activeChart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {charts[activeChart].component}
        </motion.div>

        {/* Chart Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {charts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveChart(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeChart
                  ? 'bg-asset-secondary w-8'
                  : 'bg-asset-gray-300 hover:bg-asset-gray-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 bg-asset-secondary/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-asset-accent/10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}