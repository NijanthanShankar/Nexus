import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX  = useMotionValue(-100)
  const cursorY  = useMotionValue(-100)
  const springX  = useSpring(cursorX, { stiffness: 500, damping: 30 })
  const springY  = useSpring(cursorY, { stiffness: 500, damping: 30 })
  const trailX   = useSpring(cursorX, { stiffness: 100, damping: 20 })
  const trailY   = useSpring(cursorY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Glow trail */}
      <motion.div
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-primary/20 blur-md pointer-events-none z-[9998]"
      />
      {/* Dot */}
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </>
  )
}