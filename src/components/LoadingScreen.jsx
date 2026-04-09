import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-base flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Clay orb */}
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-clay-lg"
        animate={{
          scale:  [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.p
        className="mt-6 text-textMuted font-heading font-semibold tracking-widest text-sm uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  )
}