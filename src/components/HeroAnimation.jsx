import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

function generateStars(count) {
  const stars = []
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    })
  }
  return stars
}

export default function HeroAnimation({ showStars = true, children }) {
  const [act, setAct] = useState(0) // 0=night, 1=sky, 2=wiping, 3=done
  const [wipeProgress, setWipeProgress] = useState(0)
  const [wipeDone, setWipeDone] = useState(false)
  const stars = useMemo(() => generateStars(showStars ? 45 : 0), [showStars])

  useEffect(() => {
    const timers = [
      setTimeout(() => setAct(1), 820),       // Night → sky crossfade
      setTimeout(() => setAct(2), 1700),      // Start wipe after sky is visible
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  // Wipe animation — slower, 2 seconds
  useEffect(() => {
    if (act !== 2) return
    const duration = 1000
    const start = performance.now()
    let raf

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Smooth ease-in-out
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2
      setWipeProgress(eased * 100)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setWipeDone(true)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [act])

  // The cream layer starts fully off-screen to the bottom-right.
  // As wipeProgress goes 0→100, the leading diagonal edge moves
  // from bottom-right to top-left, COVERING the sky.
  //
  // At 0%: cream is entirely off-screen (to the right)
  // At 100%: cream covers the entire viewport
  //
  // We use a polygon where the left/top edge sweeps across.
  // The "leading edge" is a diagonal line.

  const p = wipeProgress // 0 to 100

  // Map progress to how far the leading edge has traveled
  // The diagonal needs to travel ~250% to fully cover (corner to corner)
  const travel = (p / 100) * 250

  // Leading edge: a diagonal line from (x, 0) to (x-50, 100%)
  // Everything to the RIGHT of this line is cream
  const leadX = 150 - travel  // starts at 150 (off right), ends at -100 (past left)

  const wipeClip = wipeDone
    ? 'none'
    : `polygon(
        ${leadX + 50}% -10%,
        110% -10%,
        110% 110%,
        ${leadX}% 110%
      )`

  // Shimmer — thin bright strip along the leading edge
  const shimmerClip = `polygon(
    ${leadX + 50 - 1}% -10%,
    ${leadX + 50 + 1}% -10%,
    ${leadX + 1}% 110%,
    ${leadX - 1}% 110%
  )`

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Night sky — always at the bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #070b14 0%, #0c1220 30%, #111827 60%, #141b2d 100%)',
          zIndex: 0,
        }}
      />

      {/* Morning sky — crossfades over night */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(170deg, #3a7ca5 0%, #6aa0b8 20%, #a8946e 45%, #d4b48a 60%, #dfc4a0 75%, #e8d4b8 100%)',
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: act >= 1 ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Stars — sit on night sky, fade with crossfade */}
      {showStars && (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            zIndex: 2,
            opacity: act >= 1 ? 0 : 1,
            transition: 'opacity 1.8s ease-in-out',
          }}
        >
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Shimmer edge along the wipe */}
      {act >= 2 && !wipeDone && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            clipPath: shimmerClip,
            zIndex: 4,
          }}
        />
      )}

      {/* Cream + content — ONE layer, swept in by diagonal wipe */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          zIndex: 3,
          clipPath: act >= 2 ? wipeClip : 'polygon(150% -10%, 110% -10%, 110% 110%, 100% 110%)',
        }}
      >
        {/* Cream background */}
        <div className="absolute inset-0 bg-[#faf9f6]" />

        {/* Content on the cream */}
        <div className="relative z-10 w-full">
          {typeof children === 'function' ? children(wipeDone) : children}
        </div>
      </div>
    </section>
  )
}
