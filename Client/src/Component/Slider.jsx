// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import gokuimg from '../../public/Goku.jpg'
// import gokuimg2 from '../../public/Goku2.jpg'
// import gokuimg3 from '../../public/Goku3.jpg'
// import gokuimg4 from '../../public/Goku4.jpg'

// // Slides with image, main text, and two lines of description
// const slides = [
//   {
//     img: gokuimg,
//     text: 'Unleash Your Inner Power',
//     line1:
//       'Discover the strength that lies within Push past your limits every single day.',
//   },
//   {
//     img: gokuimg2,
//     text: 'Train Beyond Limits',
//     line1:
//       'Embrace the grind and level up your skills Every drop of sweat builds greatness.',
//   },
//   {
//     img: gokuimg3,
//     text: 'The Saiyan Spirit Lives On',
//     line1:
//       'Stand tall, fight hard, and never surrender.Victory favors the fearless.',
//   },
//   {
//     img: gokuimg4,
//     text: 'Never Give Up, Never Surrender',
//     line1:
//       'Even in darkness, a true warrior shines. Stay focused. Stay powerful',
//   },
// ]

// export default function ImageSlider() {
//   return (
//     <div className="w-full overflow-hidden h-[100vh] mt-10">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={0}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-[90vh]  bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
//               style={{ backgroundImage: `url(${slide.img})` }}
//             >
//               <div className=" absolute bottom-10 sm:left-8 left-0  flex flex-col justify-start items-start p-5">
//                 <h1 className="text-4xl sm:text-6xl font-bold bg-transparent text-White">
//                   {slide.text}
//                 </h1>
//                 <p className="mt-4 text-sm  font-medium bg-transparent text-White">
//                   {slide.line1}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import axios from 'axios'
import SummaryApi from '../common/SummaryApi'
const BASE_URL = import.meta.env.VITE_SERVER_URL
export default function ImageSlider() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.Sliderdataget.url)
        setData(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, [])

  return (
    <div className="w-full overflow-hidden h-[100vh] mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[90vh]  bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
              style={{
                backgroundImage: `url(${BASE_URL}/uploads/${slide.image})`,
              }}
            >
              <div className=" absolute bottom-10 sm:left-8 left-0  flex flex-col justify-start items-start p-5">
                <h1 className="text-4xl sm:text-6xl font-bold bg-transparent text-White">
                  {slide.Title}
                </h1>
                <p className="mt-4 text-sm  font-medium bg-transparent text-White">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
