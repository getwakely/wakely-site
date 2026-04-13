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
      twinkleDelay: Math.random() * 3,
    })
  }
  return stars
}

// Each gradient layer is a separate div — we crossfade between them
const gradientLayers = [
  // 0: Night
  'linear-gradient(180deg, #070b14 0%, #0c1220 30%, #111827 60%, #141b2d 100%)',
  // 1: Pre-dawn (deep blue/purple hint)
  'linear-gradient(180deg, #0f1d36 0%, #1e3a5f 25%, #3a6080 50%, #6a4f5c 75%, #8c6a5a 100%)',
  // 2: Sunrise (warm blue → peach)
  'linear-gradient(180deg, #4a8aad 0%, #7ba4b8 20%, #c9a87a 45%, #e0c4a0 65%, #edd9c4 85%, #f2e8dc 100%)',
  // 3: Morning (light warm)
  'linear-gradient(180deg, #c8dce6 0%, #e0d0be 20%, #ede0d2 40%, #f4ece4 60%, #f8f4ef 80%, #faf9f6 100%)',
  // 4: Final (solid cream)
  'linear-gradient(180deg, #faf9f6 0%, #faf9f6 100%)',
]

export default function HeroAnimation({ showStars = true, children }) {
  const [progress, setProgress] = useState(0) // 0 to 4
  const stars = useMemo(() => generateStars(showStars ? 45 : 0), [showStars])
  const [contentVisible, setContentVisible] = useState(false)


  // Timeline — 4s total
  useEffect(() => {
    const timers = [
      setTimeout(() => setProgress(1), 600),
      setTimeout(() => setProgress(2), 1600),
      setTimeout(() => setProgress(3), 2600),
      setTimeout(() => setProgress(4), 3400),
      setTimeout(() => {
        setContentVisible(true)
      }, 4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  // Each layer fades in when progress reaches its index
  const getLayerOpacity = (layerIndex) => {
    if (progress >= layerIndex) return 1
    return 0
  }

  // Transition duration for each layer crossfade
  const layerDurations = [0, 1.2, 1.2, 1.0, 0.8]

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Stacked gradient layers — each fades in on top of the previous */}
      {gradientLayers.map((gradient, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ background: gradient, zIndex: i - 10 }}
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{ opacity: getLayerOpacity(i) }}
          transition={{ duration: layerDurations[i], ease: 'easeInOut' }}
        />
      ))}

      {/* Stars */}
      {showStars && (
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -4 }}>
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
              }}
              initial={{ opacity: star.opacity }}
              animate={{
                opacity: progress >= 2 ? 0 : [star.opacity, star.opacity * 0.15, star.opacity],
              }}
              transition={
                progress >= 2
                  ? { duration: 3, ease: 'easeInOut' }
                  : { duration: 2.5 + Math.random() * 2, repeat: Infinity, repeatType: 'reverse', delay: star.twinkleDelay }
              }
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        {typeof children === 'function' ? children(contentVisible) : children}
      </div>
    </section>
  )
}
