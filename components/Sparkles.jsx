'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './Sparkles.css'

export default function Sparkles({ count = 20, variant = 'light' }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 23 + 11) % 100}%`,
        top: `${(i * 31 + 5) % 100}%`,
        delay: (i * 0.4) % 5,
        size: 2 + (i % 3),
      })),
    [count]
  )

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className={`sparkle ${variant === 'gold' ? 'sparkle--gold' : ''}`}
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: 2 + (s.id % 3),
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
