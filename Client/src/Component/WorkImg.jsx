import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import gm from '../../public/Gw3.jpg'
import gm1 from '../../public/BG.avif'
import gm2 from '../../public/Gw2.jpg'
import gm3 from '../../public/Gw.jpg'
import { useNavigate } from 'react-router-dom'
import Heading from '../Reuse/Heading'
import Button from '../Reuse/Button'

const WorkImg = () => {
  const imgref = useRef(null)
  const imgref2 = useRef(null)
  const imgref3 = useRef(null)
  const imgref4 = useRef(null)
  const Navigate = useNavigate()

  const handdleConnect = () => {
    Navigate('/contect')
  }
  useEffect(() => {
    const handleMouse = (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const offsetX = (clientX - centerX) / 20
      const offsetY = (clientY - centerY) / 20

      // Image 1: smallest shift
      gsap.to(imgref.current, {
        x: offsetX / 2,
        y: offsetY / 4,
        duration: 0.5,
        ease: 'power2.out',
      })

      // Image 2: medium shift
      gsap.to(imgref2.current, {
        x: offsetX / 2,
        y: offsetY / 2,
        duration: 0.5,
        ease: 'power2.out',
      })

      // Image 3: largest shift
      gsap.to(imgref3.current, {
        x: offsetX,
        y: offsetY,
        duration: 0.5,
        ease: 'power2.out',
      })
      // Image 4: largest shift
      gsap.to(imgref4.current, {
        x: offsetX,
        y: offsetY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-col pb-10">
        <Heading
          title={'Look at Our creative Work'}
          discrption={
            'Explore a vibrant collection of our most innovative and artistic projects. Each piece reflects our passion for design, attention to detail, and commitment to creativity. From concept to execution, we strive to craft visuals that inspire, engage, and leave a lasting impression. Dive into our world of imagination and skill.'
          }
          textcolor={'white'}
        />
        <div className="flex flex-row justify-center items-center p-10 gap-2 sm:gap-10">
          <img src={gm2} className="w-28 md:w-60" ref={imgref} />
          <div className="flex justify-center sm:gap-7 gap-2 items-center flex-col">
            <img src={gm1} className="w-80" ref={imgref2} />
            <img src={gm} className="w-80" ref={imgref3} />
          </div>
          <img src={gm3} className="w-28 md:w-60" ref={imgref4} />
        </div>
        <Button
          title={'Connect with us'}
          color={'#ff5733'}
          Onclick={handdleConnect}
        />
      </div>
    </>
  )
}

export default WorkImg
