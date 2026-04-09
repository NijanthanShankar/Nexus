import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SkillBar({ skill, level, color = '#7F5AF0' }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-textMain font-medium font-body">{skill}</span>
        <span className="text-textMuted text-sm">{level}%</span>
      </div>
      <div className="h-3 bg-base rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, #2CB67D)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}