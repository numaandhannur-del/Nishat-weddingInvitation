'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BackgroundVideo from './BackgroundVideo'
import Sparkles from './Sparkles'
import InvitationCard from './InvitationCard'
import OpeningCurtain from './OpeningCurtain'
import WelcomeHero from './WelcomeHero'
import './InvitationApp.css'

export default function InvitationApp() {
  const [scene, setScene] = useState('curtain')
  const [showCard, setShowCard] = useState(false)

  const handleCurtainComplete = () => setScene('welcome')

  const handleOpenInvitation = () => {
    setShowCard(true)
    setScene('card')
  }

  return (
    <div className="app">
      <BackgroundVideo active={scene !== 'curtain'} />

      {scene !== 'curtain' && <Sparkles variant="gold" count={scene === 'card' ? 28 : 20} />}

      {showCard && (
        <motion.div
          className="card-scene-bg"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="card-scene-bg__orb card-scene-bg__orb--1" />
          <div className="card-scene-bg__orb card-scene-bg__orb--2" />
          <div className="card-scene-bg__orb card-scene-bg__orb--3" />
        </motion.div>
      )}

      <AnimatePresence>
        {scene === 'curtain' && (
          <OpeningCurtain key="curtain" onComplete={handleCurtainComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {scene === 'welcome' && !showCard && (
          <WelcomeHero key="welcome" onOpen={handleOpenInvitation} />
        )}
        {showCard && (
          <motion.div
            key="card"
            className="app__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <InvitationCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
