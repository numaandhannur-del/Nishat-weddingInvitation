'use client'

export default function CornerFloralDecor({ position = 'top-left' }) {
  const isTop = position.startsWith('top')
  const isLeft = position.endsWith('left')

  return (
    <svg
      className={`corner-floral corner-floral--${position}`}
      viewBox="0 0 120 100"
      aria-hidden="true"
    >
      {isTop ? (
        <>
          <path
            d={isLeft
              ? 'M10 80 Q5 50 20 25 Q35 8 55 5'
              : 'M110 80 Q115 50 100 25 Q85 8 65 5'}
            fill="none"
            stroke="#c9a84c"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <circle cx={isLeft ? 28 : 92} cy={22} r="10" fill="#f4c4cb" opacity="0.75" />
          <circle cx={isLeft ? 18 : 102} cy={32} r="7" fill="#d4e8f4" opacity="0.7" />
          <circle cx={isLeft ? 38 : 82} cy={35} r="6" fill="#f0d4dc" opacity="0.65" />
          <ellipse
            cx={isLeft ? 45 : 75}
            cy={18}
            rx="9"
            ry="5"
            fill="#c8e6d0"
            opacity="0.55"
            transform={`rotate(${isLeft ? -25 : 25} ${isLeft ? 45 : 75} 18)`}
          />
          <circle cx={isLeft ? 22 : 98} cy={18} r="2.5" fill="#c9a84c" opacity="0.8" />
        </>
      ) : (
        <>
          <path
            d={isLeft
              ? 'M10 20 Q5 50 20 75 Q35 92 55 95'
              : 'M110 20 Q115 50 100 75 Q85 92 65 95'}
            fill="none"
            stroke="#7aaed4"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <circle cx={isLeft ? 25 : 95} cy={78} r="9" fill="#a8cce8" opacity="0.7" />
          <circle cx={isLeft ? 40 : 80} cy={85} r="7" fill="#8fb89a" opacity="0.6" />
          <circle cx={isLeft ? 15 : 105} cy={68} r="5" fill="#d4e8f4" opacity="0.65" />
          <ellipse
            cx={isLeft ? 32 : 88}
            cy={90}
            rx="8"
            ry="4"
            fill="#f4c4cb"
            opacity="0.5"
            transform={`rotate(${isLeft ? 30 : -30} ${isLeft ? 32 : 88} 90)`}
          />
        </>
      )}
    </svg>
  )
}
