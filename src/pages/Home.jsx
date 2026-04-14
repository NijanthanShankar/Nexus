import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Globe, ShoppingBag, Server, Sparkles, Users, Zap } from 'lucide-react'
import ClayCard from '../components/ClayCard'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const services = [
  { icon: Code2,       label: 'React / Next.js Apps',  color: '#7F5AF0', desc: 'Enterprise dashboards, SaaS portals & custom web applications' },
  { icon: Server,      label: 'PHP / Laravel',          color: '#2CB67D', desc: 'Robust backend systems, REST APIs & database architecture' },
  { icon: Globe,       label: 'WordPress Solutions',    color: '#7F5AF0', desc: 'Custom themes, clinic websites & content management platforms' },
  { icon: ShoppingBag, label: 'Shopify / E-Commerce',   color: '#2CB67D', desc: 'D2C stores, payment integrations & conversion optimization' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4+',  label: 'Years of Excellence' },
  { value: '99%', label: 'Client Satisfaction' },
]

export default function Home() {
  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-6xl mx-auto">

      {/* ─── HERO ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="text-center mb-28"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium font-body border border-primary/30">
            🚀 Transforming Ideas into Digital Reality
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-heading font-extrabold text-5xl md:text-7xl text-textMain leading-tight mb-6"
        >
          Nexus Prism
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Innovations
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-textMuted font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build fast, beautiful, and conversion-focused web experiences — from React dashboards to Shopify stores to WordPress platforms for businesses worldwide.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-clay shadow-clay clay-btn hover:bg-primary/90 transition-all text-sm font-body"
          >
            View Our Work <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-surface text-textMain font-semibold px-7 py-3.5 rounded-clay shadow-clay clay-btn hover:text-primary transition-all text-sm font-body"
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.section>

      {/* ─── STATS ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-28"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ value, label }) => (
            <motion.div key={label} variants={fadeUp}>
              <ClayCard className="text-center py-8">
                <div className="font-heading font-extrabold text-3xl text-primary mb-2">{value}</div>
                <span className="font-body text-textMuted text-sm">{label}</span>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── SERVICES ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-28"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading font-bold text-3xl text-textMain text-center mb-4"
        >
          What We <span className="text-primary">Build</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-textMuted font-body text-center max-w-xl mx-auto mb-12"
        >
          End-to-end web development services tailored for businesses that demand excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, label, color, desc }) => (
            <motion.div key={label} variants={fadeUp}>
              <ClayCard className="flex flex-col items-center text-center gap-4 py-8 h-full">
                <div
                  className="w-14 h-14 rounded-clay flex items-center justify-center"
                  style={{ background: `${color}20`, color }}
                >
                  <Icon size={26} />
                </div>
                <span className="font-body font-semibold text-textMain text-sm">{label}</span>
                <p className="text-textMuted font-body text-xs leading-relaxed">{desc}</p>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── WHY CHOOSE US ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-28"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading font-bold text-3xl text-textMain text-center mb-12"
        >
          Why <span className="text-primary">Choose Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: 'Premium Quality', desc: 'Every project is built with production-grade code, modern architecture, and pixel-perfect attention to detail.' },
            { icon: Zap, title: 'Fast Delivery', desc: 'Agile workflows ensure rapid turnaround without compromising on quality. Your project, launched on time.' },
            { icon: Users, title: 'Dedicated Support', desc: 'From concept to deployment and beyond — we provide ongoing support and maintenance for all our clients.' },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <ClayCard className="h-full">
                <div className="w-12 h-12 rounded-clay bg-primary/15 flex items-center justify-center text-primary mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-textMain text-lg mb-2">{title}</h3>
                <p className="text-textMuted text-sm font-body leading-relaxed">{desc}</p>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── FEATURED PROJECTS ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} className="flex items-center justify-between mb-12">
          <h2 className="font-heading font-bold text-3xl text-textMain">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <Link to="/projects" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            All Projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ClayCard className="h-full flex flex-col">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl mb-5"
                />
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium font-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-textMain text-lg mb-2">{project.title}</h3>
                <p className="text-textMuted text-sm font-body leading-relaxed mb-5 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all font-body"
                >
                  View Live <ArrowRight size={14} />
                </a>
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}