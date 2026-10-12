/** Slowly drifting soft glows for light sections (teal and sky blue, about 40% opacity).
 *  Pure CSS (classes in globals.css): radial gradients moved with transform only, no filter blur,
 *  behind the content (z-0) and never clickable. Still under prefers-reduced-motion.
 *  The parent section needs `relative overflow-hidden` and its content `relative z-10`.
 *  variant "a": teal top left, sky bottom right. variant "b": mirrored, for alternating sections. */
export default function AmbientGlows({ variant = 'a' }: { variant?: 'a' | 'b' }) {
  const a = variant === 'a'
  return (
    <div className="sb-glows" aria-hidden="true">
      <span
        className={`sb-glow sb-glow-1 ${a ? 'sb-glow-teal' : 'sb-glow-sky'}`}
        style={a ? { left: -240, top: -200 } : { right: -260, bottom: -240 }}
      />
      <span
        className={`sb-glow sb-glow-2 ${a ? 'sb-glow-sky' : 'sb-glow-teal'}`}
        style={a ? { right: -220, bottom: -240 } : { left: -200, top: -180 }}
      />
      {a && <span className="sb-glow sb-glow-3 sb-glow-pale" style={{ left: 'calc(45% - 120px)', top: 'calc(30% - 120px)' }} />}
    </div>
  )
}
