'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CornerFloralDecor from './CornerFloralDecor'
import './WelcomeHero.css'
import './CornerFloralDecor.css'

export default function WelcomeHero({ onOpen }) {
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="welcome-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <CornerFloralDecor position="top-left" />
      <CornerFloralDecor position="top-right" />
      <CornerFloralDecor position="bottom-left" />
      <CornerFloralDecor position="bottom-right" />

      <div className="welcome-hero__border welcome-hero__border--tl" />
      <div className="welcome-hero__border welcome-hero__border--tr" />
      <div className="welcome-hero__border welcome-hero__border--bl" />
      <div className="welcome-hero__border welcome-hero__border--br" />

      <p className="welcome-hero__greeting">With love & joy</p>
      <h1 className="welcome-hero__title">Welcome</h1>
      <p className="welcome-hero__subtitle">
        Dear Guest, we are delighted to share our joy with you
      </p>

      <div className="welcome-hero__rings">
        <svg viewBox="0 0 120 60" aria-hidden="true">
          <ellipse cx="42" cy="32" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
          <ellipse cx="78" cy="32" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
          <ellipse cx="78" cy="32" rx="22" ry="22" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="78" cy="17" r="2.5" fill="#d4af37" />
        </svg>
      </div>

      <h2 className="welcome-hero__names">Mohana & Rahul</h2>
      <p className="welcome-hero__label">Engagement Invitation</p>

      <div className="welcome-hero__actions">
        <motion.button
          type="button"
          className={`welcome-hero__btn${showHint ? ' welcome-hero__btn--hint' : ''}`}
          onClick={onOpen}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="welcome-hero__btn-border" aria-hidden="true" />
          {showHint && <span className="welcome-hero__btn-ring" aria-hidden="true" />}
          Open our invitation
        </motion.button>
      </div>
    </motion.div>
  )
}
