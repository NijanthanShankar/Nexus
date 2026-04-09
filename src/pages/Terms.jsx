import { motion } from 'framer-motion'
import ClayCard from '../components/ClayCard'

export default function Terms() {
  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <ClayCard>
          <h1 className="font-heading font-bold text-4xl text-textMain mb-2">Terms & Conditions</h1>
          <p className="text-textMuted text-sm font-body mb-8">Last updated: April 2025</p>

          {[
            { title: '1. Acceptance of Terms', body: 'By accessing this portfolio website, you agree to these terms and conditions. If you do not agree, please do not use this site.' },
            { title: '2. Intellectual Property', body: 'All content on this site, including code snippets, design, text, and imagery, is the intellectual property of Praveen Karthikeyan unless otherwise stated. Client project links are owned by their respective clients.' },
            { title: '3. Use of Content', body: 'You may not reproduce, distribute, or commercially exploit any content from this site without explicit written permission.' },
            { title: '4. Disclaimer', body: 'This portfolio is provided "as is" for informational purposes. We make no warranties about the accuracy or completeness of the information presented.' },
            { title: '5. Changes to Terms', body: 'These terms may be updated at any time. Continued use of the site constitutes acceptance of the revised terms.' },
            { title: '6. Contact', body: 'Questions about these terms? Email hello@nexusprisminnovations.com.' },
          ].map(({ title, body }) => (
            <div key={title} className="mb-7">
              <h2 className="font-heading font-semibold text-textMain text-lg mb-2">{title}</h2>
              <p className="text-textMuted font-body text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </ClayCard>
      </motion.div>
    </main>
  )
}