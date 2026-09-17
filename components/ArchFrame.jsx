import './ArchFrame.css'

export default function ArchFrame() {
  return (
    <svg className="arch-frame" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">
      <path
        className="arch-path"
        d="M 20 70 L 20 45 Q 20 15, 200 15 Q 380 15, 380 45 L 380 70"
        fill="none"
        stroke="#1a2d5a"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
