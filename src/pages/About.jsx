import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import ClayCard from '../components/ClayCard'
import SkillBar from '../components/SkillBar'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const skills = [
  { skill: 'React / Next.js', level: 90 },
  { skill: 'PHP / Laravel',   level: 85 },
  { skill: 'WordPress',       level: 92 },
  { skill: 'Shopify / Liquid', level: 80 },
  { skill: 'Tailwind CSS',    level: 95 },
  { skill: 'MySQL / REST APIs', level: 82 },
]

const timeline = [
  { year: '2024–Present', role: 'Full Stack Developer', place: 'Nexus Prism Innovations', desc: 'Building enterprise web platforms, clinic sites, D2C stores and SaaS tools for clients across India and the UK.' },
  { year: '2023',         role: 'WordPress Developer',  place: 'Freelance',               desc: 'Delivered custom WordPress and WooCommerce builds for healthcare, education, and e-commerce clients.' },
  { year: '2022',         role: 'Frontend Developer',   place: 'Internship',              desc: 'Built responsive UI components and learned production-grade React development workflows.' },
]

export default function About() {
  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading font-extrabold text-5xl text-textMain mb-4">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-textMuted font-body text-lg max-w-xl mx-auto">
          Developer. Builder. Problem-solver. Here's my story.
        </p>
      </motion.div>

      {/* Intro */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
      >
        <motion.div variants={fadeUp}>
          <ClayCard className="h-full">
            <h2 className="font-heading font-bold text-2xl text-textMain mb-4">
              Hi, I'm <span className="text-primary">Praveen Karthikeyan</span>
            </h2>
            <p className="text-textMuted font-body text-sm leading-relaxed mb-4">
              I'm a Full Stack Developer with hands-on experience building everything from enterprise SaaS portals to Shopify stores and WordPress platforms. I work under Nexus Prism Innovations, delivering real solutions for clients in healthcare, e-commerce, and digital marketing.
            </p>
            <p className="text-textMuted font-body text-sm leading-relaxed mb-6">
              My stack spans the full web, React on the frontend, PHP on the backend, WordPress for content-driven sites, and Shopify for D2C brands. I care about performance, clean architecture, and making things that actually convert.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-clay shadow-clay clay-btn hover:bg-primary/90 transition-all text-sm"
            >
              <Download size={15} /> Download Resume
            </a>
          </ClayCard>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp}>
          <ClayCard className="h-full">
            <h3 className="font-heading font-bold text-xl text-textMain mb-6">Technical Skills</h3>
            {skills.map((s) => (
              <SkillBar key={s.skill} {...s} />
            ))}
          </ClayCard>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-textMain text-center mb-12">
          Career <span className="text-primary">Timeline</span>
        </motion.h2>

        <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
          {timeline.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(127,90,240,0.6)]" />
              <ClayCard>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary text-xs font-semibold font-body px-2.5 py-1 bg-primary/15 rounded-full">
                    {item.year}
                  </span>
                  <span className="text-textMuted text-xs font-body">{item.place}</span>
                </div>
                <h3 className="font-heading font-bold text-textMain text-lg mb-1">{item.role}</h3>
                <p className="text-textMuted text-sm font-body leading-relaxed">{item.desc}</p>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}