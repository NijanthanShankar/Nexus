import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import ClayCard from '../components/ClayCard'
import { projects, categories } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const [active,  setActive]  = useState('all')
  const [modal,   setModal]   = useState(null)

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="font-heading font-extrabold text-5xl text-textMain mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-textMuted font-body text-lg max-w-xl mx-auto">
          Real-world solutions built for real businesses, from enterprise SaaS to D2C stores.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-clay text-sm font-semibold font-body shadow-clay clay-btn transition-all duration-200 ${
              active === cat.id
                ? 'bg-primary text-white'
                : 'bg-surface text-textMuted hover:text-textMain'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ClayCard
                className="h-full flex flex-col cursor-pointer"
                onClick={() => setModal(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl mb-5"
                />
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-textMain text-lg mb-2">{project.title}</h3>
                <p className="text-textMuted text-sm font-body leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 text-primary text-xs font-medium">Click to view details →</div>
              </ClayCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-surface rounded-clay shadow-clay-lg max-w-lg w-full p-8 relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-textMuted hover:text-textMain"
              >
                <X size={20} />
              </button>
              <img
                src={modal.thumbnail}
                alt={modal.title}
                className="w-full h-52 object-cover rounded-xl mb-6"
              />
              <div className="flex gap-2 flex-wrap mb-3">
                {modal.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-heading font-bold text-2xl text-textMain mb-3">{modal.title}</h2>
              <p className="text-textMuted font-body text-sm leading-relaxed mb-6">{modal.description}</p>
              <a
                href={modal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-clay shadow-clay clay-btn hover:bg-primary/90 transition-all text-sm"
              >
                View Live Site <ExternalLink size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}