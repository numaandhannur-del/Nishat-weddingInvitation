'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import CornerFloralDecor from './CornerFloralDecor'
import './OpeningCurtain.css'
import './CornerFloralDecor.css'

const PANEL_DELAY_MS = 1300
const PANEL_DURATION_S = 0.45
const TEXT_VISIBLE_MS = 1700
const COMPLETE_MS = PANEL_DELAY_MS + PANEL_DURATION_S * 1000 + TEXT_VISIBLE_MS
const PANEL_DELAY_S = PANEL_DELAY_MS / 1000

export default function OpeningCurtain({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, COMPLETE_MS)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="curtain"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="curtain__palace-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260)',
        }}
      />
      <div className="curtain__overlay" />

      <CornerFloralDecor position="top-left" />
      <CornerFloralDecor position="top-right" />
      <CornerFloralDecor position="bottom-left" />
      <CornerFloralDecor position="bottom-right" />

      <div className="curtain__corner curtain__corner--tl" />
      <div className="curtain__corner curtain__corner--tr" />
      <div className="curtain__corner curtain__corner--bl" />
      <div className="curtain__corner curtain__corner--br" />

      <motion.div
        className="curtain__logo"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="curtain__rings">
          <svg viewBox="0 0 120 60" aria-hidden="true">
            <ellipse cx="42" cy="32" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
            <ellipse cx="78" cy="32" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
            <ellipse cx="78" cy="32" rx="22" ry="22" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            <circle cx="78" cy="17" r="2.5" fill="#d4af37" />
            <circle cx="84" cy="21" r="1.5" fill="#d4af37" />
            <circle cx="72" cy="21" r="1.5" fill="#d4af37" />
          </svg>
        </div>

        <p className="curtain__names">Nishat & Shamshu Tabrez</p>
        <p className="curtain__text">You&apos;re invited</p>

        <div className="curtain__welcome" aria-hidden="true">
          <motion.div
            className="curtain__welcome-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="curtain__welcome-greeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65, ease: 'easeOut' }}
          >
            With open hearts
          </motion.p>
          <div className="curtain__welcome-sparkles">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="curtain__welcome-sparkle"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.6, 1, 0.4],
                  scale: [0.4, 1, 0.85, 1.1, 0.9],
                  y: [0, -4, 0, -3, 0],
                }}
                transition={{
                  duration: 2.4,
                  delay: 0.5 + i * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ left: `${18 + i * 16}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="curtain__panel curtain__panel--left"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: PANEL_DURATION_S,
          ease: [0.65, 0, 0.35, 1],
          delay: PANEL_DELAY_S,
        }}
      />
      <motion.div
        className="curtain__panel curtain__panel--right"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{
          duration: PANEL_DURATION_S,
          ease: [0.65, 0, 0.35, 1],
          delay: PANEL_DELAY_S,
        }}
      />
    </motion.div>
  )
}
