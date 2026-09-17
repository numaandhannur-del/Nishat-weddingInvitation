'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import CornerFloralDecor from './CornerFloralDecor'
import ArchFrame from './ArchFrame'
import VenueSection from './VenueSection'
import './InvitationCard.css'
import './CornerFloralDecor.css'
import './ArchFrame.css'

const CARD_BG =
  'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260'

const contentStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.18 },
  },
}

const textReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const dateStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

const dateReveal = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

const sideRevealLeft = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

const sideRevealRight = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function InvitationCard() {
  const cardRef = useRef(null)
  const [bgReady, setBgReady] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setBgReady(true)
    img.src = CARD_BG
  }, [])

  useEffect(() => {
    if (!cardRef.current) return
    const arch = cardRef.current.querySelector('.arch-path')
    if (!arch) return
    const length = arch.getTotalLength()
    gsap.set(arch, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 })
    gsap.to(arch, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.85,
      ease: 'power2.inOut',
      delay: 0.25,
    })
  }, [])

  return (
    <div ref={cardRef} className="invitation-card">
      <div className="invitation-card__glow" aria-hidden="true" />
      <div className="invitation-card__inner">
        <div
          className={`invitation-card__bg${bgReady ? ' invitation-card__bg--ready' : ''}`}
          style={{ backgroundImage: `url(${CARD_BG})` }}
          aria-hidden="true"
        />
        <div className="invitation-card__wash" aria-hidden="true" />
        <ArchFrame />
        <CornerFloralDecor position="top-left" />
        <CornerFloralDecor position="top-right" />
        <CornerFloralDecor position="bottom-left" />
        <CornerFloralDecor position="bottom-right" />

        <motion.div
          className="invitation-card__body"
          variants={contentStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="rings-icon" variants={textReveal}>
            <svg viewBox="0 0 100 50" aria-hidden="true">
              <ellipse cx="35" cy="27" rx="18" ry="18" fill="none" stroke="#b8c0cc" strokeWidth="2.5" />
              <ellipse cx="65" cy="27" rx="18" ry="18" fill="none" stroke="#b8c0cc" strokeWidth="2.5" />
              <ellipse cx="65" cy="27" rx="18" ry="18" fill="none" stroke="#d4af37" strokeWidth="1.2" />
              <circle cx="65" cy="14" r="1.8" fill="#d4af37" />
              <circle cx="70" cy="17" r="1.2" fill="#d4af37" />
              <circle cx="60" cy="17" r="1.2" fill="#d4af37" />
            </svg>
          </motion.div>

          <motion.h2 className="invitation-card__header" variants={textReveal}>
            Wedding Ceremony
          </motion.h2>
          <motion.p className="invitation-card__names" variants={textReveal}>
            Nishat & Shamshu Tabrez
          </motion.p>
          <motion.p className="invitation-card__sub" variants={textReveal}>
            are getting married
          </motion.p>
          <motion.p className="invitation-card__celebrate" variants={textReveal}>
            Let&apos;s get together to celebrate
          </motion.p>

          <motion.div
            className="invitation-card__date"
            variants={dateStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="date-side date-side--left" variants={sideRevealLeft}>
              <span className="date-line" />
              <span className="date-label">Thursday</span>
              <span className="date-line" />
            </motion.div>

            <div className="date-center">
              <motion.span className="date-month" variants={dateReveal}>
                October
              </motion.span>
              <motion.span className="date-day" variants={dateReveal}>
                08
              </motion.span>
              <motion.span className="date-year" variants={dateReveal}>
                2026
              </motion.span>
            </div>

            <motion.div className="date-side date-side--right" variants={sideRevealRight}>
              <span className="date-line" />
              <span className="date-label">12:15 PM</span>
              <span className="date-line" />
            </motion.div>
          </motion.div>

          <VenueSection />
        </motion.div>
      </div>
    </div>
  )
}
