import { motion } from 'framer-motion'
import { Building2, Target, Lightbulb } from 'lucide-react'
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
  { year: '2024–Present', role: 'Scaling Nationwide', place: 'Nexus Prism Innovations', desc: 'Expanding our client base across India and the UK — delivering enterprise SaaS portals, healthcare platforms, D2C stores, and digital marketing solutions.' },
  { year: '2023', role: 'Company Founded', place: 'Nexus Prism Innovations', desc: 'Founded by Nijanthan Shankar with a vision to provide premium, affordable web development solutions for businesses of all sizes.' },
  { year: '2022', role: 'Early Beginnings', place: 'Freelance & Consulting', desc: 'Started as freelance web development consultancy, building WordPress and e-commerce projects for healthcare, education, and retail clients.' },
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
          About <span className="text-primary">Us</span>
        </h1>
        <p className="text-textMuted font-body text-lg max-w-xl mx-auto">
          Innovation. Excellence. Results. Here's our story.
        </p>
      </motion.div>

      {/* Company Intro */}
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
              We are <span className="text-primary">Nexus Prism Innovations</span>
            </h2>
            <p className="text-textMuted font-body text-sm leading-relaxed mb-4">
              Nexus Prism Innovations is a full-service web development company founded by <strong className="text-textMain">Nijanthan Shankar</strong>. We specialize in building high-performance digital solutions — from enterprise SaaS portals to D2C Shopify stores to custom WordPress platforms.
            </p>
            <p className="text-textMuted font-body text-sm leading-relaxed mb-4">
              Our tech stack spans the full web — React on the frontend, PHP on the backend, WordPress for content-driven sites, and Shopify for e-commerce brands. We care about performance, clean architecture, and building products that actually convert.
            </p>
            <p className="text-textMuted font-body text-sm leading-relaxed">
              We serve clients across India and the UK in healthcare, e-commerce, digital marketing, and enterprise sectors.
            </p>
          </ClayCard>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp}>
          <ClayCard className="h-full">
            <h3 className="font-heading font-bold text-xl text-textMain mb-6">Our Technical Expertise</h3>
            {skills.map((s) => (
              <SkillBar key={s.skill} {...s} />
            ))}
          </ClayCard>
        </motion.div>
      </motion.div>

      {/* Mission, Vision, Values */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-textMain text-center mb-12">
          What <span className="text-primary">Drives Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To empower businesses with cutting-edge web technologies, delivering solutions that are fast, scalable, and conversion-optimized.' },
            { icon: Lightbulb, title: 'Our Vision', desc: 'To become the go-to digital partner for businesses seeking premium web experiences at accessible price points.' },
            { icon: Building2, title: 'Our Values', desc: 'Transparency, quality-first development, client-centric design, and continuous innovation define everything we do.' },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <ClayCard className="h-full text-center">
                <div className="w-14 h-14 rounded-clay bg-primary/15 flex items-center justify-center text-primary mx-auto mb-4">
                  <Icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-textMain text-lg mb-2">{title}</h3>
                <p className="text-textMuted text-sm font-body leading-relaxed">{desc}</p>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-textMain text-center mb-12">
          Meet the <span className="text-primary">Founder</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
          <ClayCard className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-white font-heading font-bold text-3xl shadow-clay-lg">
              NS
            </div>
            <h3 className="font-heading font-bold text-2xl text-textMain mb-2">Nijanthan Shankar</h3>
            <p className="text-primary font-body font-medium text-sm mb-4">Founder & CEO</p>
            <p className="text-textMuted font-body text-sm leading-relaxed max-w-lg mx-auto">
              With a passion for technology and an eye for business, Nijanthan founded Nexus Prism Innovations to bridge the gap between premium web development and affordability. Under his leadership, the company has delivered 50+ projects for clients across healthcare, e-commerce, and enterprise sectors in India and the UK.
            </p>
          </ClayCard>
        </motion.div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-textMain text-center mb-12">
          Our <span className="text-primary">Journey</span>
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