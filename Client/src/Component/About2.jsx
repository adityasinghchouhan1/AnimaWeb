import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import gm from '../../public/GM.jpg'
import Button from '../Reuse/Button'
import { useNavigate } from 'react-router-dom'
import Heading from '../Reuse/Heading'

const About2 = () => {
  const imgRef = useRef(null)
  const Navigate = useNavigate()

  const handdleConnect = () => {
    Navigate('/contect')
    console.log('navigate')
  }
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 20
      const y = (clientY - window.innerHeight / 2) / 20

      gsap.to(imgRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="sm:p-16 p-5 pb-10 flex justify-center items-center flex-col">
      <Heading
        title={'Meet Our Guiding Mentor'}
        discrption={
          'Our journey is inspired and led by a visionary mentor who brings years of wisdom, leadership, and dedication. Discover the story behind the mission and get in touch to be a part of this empowering movement.'
        }
        textcolor={'white'}
      />
      <img ref={imgRef} src={gm} alt="GM" className="sm:w-[90%] my-10" />
      <Button
        title={'Connect with us'}
        color={'#ff5733'}
        Onclick={handdleConnect}
      />
    </div>
  )
}

export default About2
