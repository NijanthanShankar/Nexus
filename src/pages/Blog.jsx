import { motion } from 'framer-motion'
import { Clock, Tag } from 'lucide-react'
import ClayCard from '../components/ClayCard'
import { blogPosts } from '../data/blogPosts'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Blog() {
  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="font-heading font-extrabold text-5xl text-textMain mb-4">
          The <span className="text-primary">Blog</span>
        </h1>
        <p className="text-textMuted font-body text-lg max-w-xl mx-auto">
          Thoughts on development, design, and building things that matter.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={fadeUp}>
            <ClayCard className="h-full flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover rounded-xl mb-5"
              />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 text-xs text-secondary font-medium font-body">
                  <Tag size={11} /> {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-textMuted font-body">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>
              <h3 className="font-heading font-bold text-textMain text-lg mb-2 flex-1">{post.title}</h3>
              <p className="text-textMuted text-sm font-body leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-textMuted font-body">
                <span>{post.date}</span>
                <button className="text-primary font-semibold hover:underline">Read More →</button>
              </div>
            </ClayCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Coming soon notice */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="inline-block px-6 py-3 rounded-clay bg-surface shadow-clay border border-white/5 text-textMuted text-sm font-body">
          More articles coming soon, follow along on{' '}
          <a href="#" className="text-primary hover:underline">LinkedIn</a>
        </div>
      </motion.div>
    </main>
  )
}