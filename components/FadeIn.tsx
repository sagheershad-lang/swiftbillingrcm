'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const initial =
    direction === 'up' ? { opacity: 0, y: 32 }
    : direction === 'left' ? { opacity: 0, x: -32 }
    : direction === 'right' ? { opacity: 0, x: 32 }
    : { opacity: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
