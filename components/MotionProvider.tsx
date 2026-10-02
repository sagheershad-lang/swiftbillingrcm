'use client'
import { LazyMotion, domAnimation } from 'framer-motion'

// Components use the lightweight `m` element; this supplies only the domAnimation features
// (animate, variants, exit, whileInView, hover/tap/focus). `strict` throws if a full `motion`
// component sneaks back in. Switch to domMax only if layout or drag animations are added.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
