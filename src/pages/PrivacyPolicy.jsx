import { motion } from 'framer-motion'
import ClayCard from '../components/ClayCard'

export default function PrivacyPolicy() {
  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <ClayCard>
          <h1 className="font-heading font-bold text-4xl text-textMain mb-2">Privacy Policy</h1>
          <p className="text-textMuted text-sm font-body mb-8">Last updated: April 2025</p>

          {[
            { title: '1. Information We Collect', body: 'When you use the contact form on this website, we collect your name, email address, and message. No other personal data is collected or stored.' },
            { title: '2. How We Use Your Information', body: 'Your contact information is used solely to respond to your enquiry. Nexus Prism Innovations does not sell, share, or distribute your data to any third parties.' },
            { title: '3. Cookies', body: 'This site uses no tracking cookies. We may use essential session cookies for functionality purposes only.' },
            { title: '4. Third-Party Links', body: 'This website links to external client projects. Nexus Prism Innovations is not responsible for the privacy practices of those external websites.' },
            { title: '5. Contact', body: 'For any privacy-related questions, please reach out at hello@nexusprisminnovations.com.' },
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