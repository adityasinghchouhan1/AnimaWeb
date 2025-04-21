import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Gimg from '../../public/GS3.png'
import Heading from '../Reuse/Heading'
gsap.registerPlugin(ScrollTrigger)

const HomeAbout = () => {
  const myref = useRef(null)

  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: myref.current,
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacer: true,
      },
    })

    animation.to('.mark-clip', {
      height: '100vh',
      width: '100vw',
    })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <>
      <div className="pt-10">
        <Heading
          title={'Explore the World Of Creativity With Us'}
          textcolor={'white'}
          discrption={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta eos fugit vitae voluptatem quisquam asperiores tenetur ad beatae suscipit possimus veniam molestias nostrum vel dolore magnam officiis explicabo labore'
          }
        />
        <div className="container" ref={myref}>
          <img
            src={Gimg}
            className="element mark-clip object-fit-cover bg-cover"
          />
        </div>
        {/* Add some scroll space after pin ends */}
        <div style={{ height: '20vh' }}></div>
      </div>
    </>
  )
}

export default HomeAbout
