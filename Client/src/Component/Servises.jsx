// import React from 'react'
// import Heading from '../Reuse/Heading'
// import Gimg1 from '../../public/GS.jpg'
// import Gimg2 from '../../public/GS5.jpg'
// import Gimg3 from '../../public/GS4.jpg'

// import Gimg from '../../public/GS2.webp'

// const Servises = () => {
//   const data = [
//     {
//       img: Gimg1,
//       heading: 'The Services',
//       dis: 'consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum   Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,repellat temporibus quae debitis, accusantium id officia in eaatque',
//     },
//     {
//       img: Gimg2,
//       heading: 'The Services',
//       dis: 'consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum   Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,repellat temporibus quae debitis, accusantium id officia in eaatque',
//     },
//     {
//       img: Gimg3,
//       heading: 'The Services',
//       dis: 'consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum   Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,repellat temporibus quae debitis, accusantium id officia in eaatque',
//     },
//     {
//       img: Gimg,
//       heading: 'The Services',
//       dis: 'consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum   Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,repellat temporibus quae debitis, accusantium id officia in eaatque',
//     },
//   ]

//   return (
//     <>
//       <div className="p-5">
//         <Heading
//           title={'Support that You Want'}
//           discrption={
//             'Servises Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum atque'
//           }
//           textcolor={'white'}
//         />
//         <div className="flex justify-content-center items-center flex-col sm:flex-row flex-grow-1 gap-10 sm:mb-32 mb-20 mt-24">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="text-white flex justify-center items-center flex-col
//                 rounded-md p-2
//                transition-all duration-300
//                hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
//             >
//               <div className="overflow-hidden rounded-md">
//                 <img
//                   src={item.img}
//                   className="object-cover hover:scale-110 transition-all duration-500 w-96 sm:w-80"
//                 />
//               </div>
//               <div>
//                 <h1 className="font-bold my-3 font-serif">{item.heading}</h1>
//                 <p className="text-xs font-sans">{item.dis}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Servises

import React, { useEffect, useState } from 'react'
import Heading from '../Reuse/Heading'
import axios from 'axios'
import SummaryApi from '../common/SummaryApi'
const BASE_URL = import.meta.env.VITE_SERVER_URL
const Servises = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.Servisesget.url)
        setData(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, [])
  return (
    <>
      <div className="p-5">
        <Heading
          title={'Support that You Want'}
          discrption={
            'Servises Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum atque'
          }
          textcolor={'white'}
        />
        <div className="flex justify-content-center items-center flex-col sm:flex-row flex-grow-1 gap-10 sm:mb-32 mb-20 mt-24">
          {/* {data?.map((entry) => ( */}

          {data?.map((item, index) => (
            <div
              key={index}
              className="text-white flex justify-center items-center flex-col 
                rounded-md p-2 
               transition-all duration-300 
               hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={`${BASE_URL}/uploads/${item.file}`}
                  className="object-cover hover:scale-110 transition-all duration-500 w-96 sm:w-80"
                />
              </div>
              <div>
                <h1 className="font-bold my-3 font-serif">{item.Title}</h1>
                <p className="text-xs font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Servises
