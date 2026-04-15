import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-surface/50 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-textMain mb-3">
              <span className="text-primary">N</span>exus<span className="text-primary">P</span>rism
            </h3>
            <p className="text-textMuted text-sm leading-relaxed">
              Nexus Prism Innovations — Building high-performance web experiences with React, PHP, WordPress & Shopify for businesses worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-textMain mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['/', '/projects', '/about', '/blog', '/contact'].map((path, i) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-textMuted text-sm hover:text-primary transition-colors"
                  >
                    {['Home', 'Projects', 'About', 'Insights', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-heading font-semibold text-textMain mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Github,   href: '',                         label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/nijanthan-shankar/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B02x6Fn3vRfmt%2BcTpaYK5Zw%3D%3D',                         label: 'LinkedIn' },
                { Icon: Twitter,  href: '',                         label: 'Twitter' },
                { Icon: Mail,     href: 'mailto:info@nexusprisminnovations.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-clay bg-surface shadow-clay flex items-center justify-center text-textMuted hover:text-primary hover:shadow-clay-lg transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-textMuted">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms"          className="hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-textMuted text-xs">
          © {new Date().getFullYear()} Nexus Prism Innovations. All rights reserved. Built with ⚡ React + Tailwind.
        </div>
      </div>
    </footer>
  )
}