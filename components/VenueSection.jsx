'use client'

import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import './VenueSection.css'

const VENUE_MAPS_URL =
  'https://maps.google.com/?q=Krushi+Bhavan+Opp+Boat+Club+Kakinada'

export const venueBlock = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const venueItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

function PaperPlaneIcon() {
  return (
    <svg
      className="maps-btn__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9z" />
    </svg>
  )
}

export default function VenueSection() {
  return (
    <motion.div
      className="venue-section"
      variants={venueBlock}
    >
      <motion.div className="venue-section__divider" variants={venueItem} />
      <motion.h3 className="venue-section__name" variants={venueItem}>
        Krushi Bhavan
      </motion.h3>
      <motion.p className="venue-section__address" variants={venueItem}>
        Opp Boat Club, Kakinada
      </motion.p>

      <motion.div className="venue-section__qr" variants={venueItem}>
        <div className="qr-wrapper">
          <QRCodeSVG
            value={VENUE_MAPS_URL}
            size={120}
            fgColor="#1a2d5a"
            bgColor="#ffffff"
            level="M"
            includeMargin={false}
            className="qr-svg"
          />
        </div>
        <p className="qr-label">Scan for directions</p>
      </motion.div>

      <motion.a
        href={VENUE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="maps-btn"
        variants={venueItem}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <PaperPlaneIcon />
        <span className="maps-btn__text">Click to open Google Maps</span>
      </motion.a>
    </motion.div>
  )
}
