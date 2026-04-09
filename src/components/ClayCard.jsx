import { motion } from 'framer-motion'

export default function ClayCard({ children, className = '', onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className={`bg-surface rounded-clay shadow-clay p-6 relative overflow-hidden ${className}`}
      whileHover={{ y: -6, boxShadow: '12px 12px 30px rgba(0,0,0,0.6), -6px -6px 20px rgba(255,255,255,0.05)' }}
      whileTap={{ y: 0, boxShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Subtle gradient sheen */}
      <div className="absolute inset-0 rounded-clay bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  )
}