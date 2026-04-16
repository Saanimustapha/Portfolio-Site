import { motion } from 'framer-motion'

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.div>
  )
}