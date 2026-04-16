import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="stars" />

      <motion.div
        className="planet planet-one"
        animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <motion.div
        className="planet planet-two"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <motion.div
        className="meteor"
        animate={{ x: [0, 140], y: [0, 140], opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: 'easeOut', repeatDelay: 3 }}
      />

      <div className="blur-glow glow-left" />
      <div className="blur-glow glow-right" />
    </div>
  )
}