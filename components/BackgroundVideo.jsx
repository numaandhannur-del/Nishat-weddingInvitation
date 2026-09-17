'use client'

import { useEffect, useRef } from 'react'
import './BackgroundVideo.css'

const VIDEOS = [
  {
    src: 'https://videos.pexels.com/video-files/1448055/1448055-sd_640_360_24fps.mp4',
    opacity: 0.4,
  },
]

export default function BackgroundVideo({ active }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [active])

  return (
    <div className={`bg-video ${active ? 'bg-video--active' : ''}`}>
      <div
        className="bg-video__palace"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260)',
        }}
      />
      {VIDEOS.map((video) => (
        <video
          key={video.src}
          ref={videoRef}
          className="bg-video__layer"
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          style={{ opacity: video.opacity }}
        />
      ))}
      <div className="bg-video__overlay" />
      <div className="bg-video__vignette" />
    </div>
  )
}
