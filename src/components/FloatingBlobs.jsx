import { motion } from 'framer-motion'

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{ top: '-10%', left: '-10%' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        style={{ bottom: '10%', right: '-5%' }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-2xl"
        style={{ top: '50%', left: '50%' }}
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}