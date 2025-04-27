// LandingPage.jsx
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LandingPage = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const element = sectionRef.current
    const textElement = textRef.current

    gsap.fromTo(
      textElement,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // when top of section hits 80% of viewport
          end: 'top 30%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div style={{ height: '200vh', backgroundColor: '#f5f5f5' }}>
      <section
        ref={sectionRef}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          color: '#fff',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        <div ref={textRef}>Welcome to My Landing Page</div>
      </section>
    </div>
  )
}

export default LandingPage
