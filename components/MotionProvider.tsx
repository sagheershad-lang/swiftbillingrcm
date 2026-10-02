'use client'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

// Components use the lightweight `m` element; this supplies only the domAnimation features
// (animate, variants, exit, whileInView, hover/tap/focus). `strict` throws if a full `motion`
// component sneaks back in. Switch to domMax only if layout or drag animations are added.
// reducedMotion="user": with the OS "reduce motion" setting, transform animations (slides,
// floats, scale) are skipped and elements still fade to fully visible.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  )
}
