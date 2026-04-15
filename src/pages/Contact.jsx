import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Phone } from 'lucide-react'
import ClayCard from '../components/ClayCard'

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <main className="relative z-10 pt-28 pb-20 px-6 max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="font-heading font-extrabold text-5xl text-textMain mb-4">
          Let's <span className="text-primary">Talk</span>
        </h1>
        <p className="text-textMuted font-body text-lg max-w-xl mx-auto">
          Have a project in mind? We'd love to hear about it. Fill in the form or reach out directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <ClayCard>
            {status === 'sent' ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-textMain text-xl mb-2">Message Sent!</h3>
                <p className="text-textMuted font-body text-sm">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
                  { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'hello@example.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-textMuted text-sm font-medium font-body mb-1.5">{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full bg-base border border-white/10 rounded-clay px-4 py-3 text-textMain font-body text-sm placeholder:text-textMuted/50 focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-textMuted text-sm font-medium font-body mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-base border border-white/10 rounded-clay px-4 py-3 text-textMain font-body text-sm placeholder:text-textMuted/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3.5 rounded-clay shadow-clay clay-btn hover:bg-primary/90 transition-all text-sm font-body"
                >
                  Send Message <Send size={15} />
                </motion.button>
              </form>
            )}
          </ClayCard>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-5"
        >
          {[
            { Icon: Mail,    label: 'Email',    value: 'info@nexusprisminnovations.com', href: 'mailto:info@nexusprisminnovations.com' },
            { Icon: Phone,   label: 'Phone',    value: '+91 7010268264',       href: 'tel:+917010268264' },
            { Icon: MapPin,  label: 'Location', value: 'India (Serving Worldwide)',       href: '#' },
          ].map(({ Icon, label, value, href }) => (
            <ClayCard key={label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-clay bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-textMuted text-xs font-body mb-0.5">{label}</p>
                <a href={href} className="text-textMain font-medium text-sm font-body hover:text-primary transition-colors">
                  {value}
                </a>
              </div>
            </ClayCard>
          ))}

          <ClayCard>
            <p className="text-textMuted text-sm font-body mb-4">Follow us on</p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-clay bg-base shadow-clay flex items-center justify-center text-textMuted hover:text-primary hover:shadow-clay-lg transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </ClayCard>

          <ClayCard className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="font-heading font-bold text-textMain text-lg mb-2">
              Ready to build something great?
            </h3>
            <p className="text-textMuted text-sm font-body">
              We're currently accepting new projects. Our typical response time is under 24 hours.
            </p>
          </ClayCard>
        </motion.div>
      </div>
    </main>
  )
}