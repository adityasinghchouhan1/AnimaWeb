// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import SummaryApi from '../common/SummaryAPI'

// const ContectusData = () => {
//   const [data, setData] = useState(null)
//   const [editRowId, setEditRowId] = useState(null)
//   const [editFormData, setEditFormData] = useState({
//     name: '',
//     contact: '',
//     mail: '',
//     message: '',
//   })

//   const handleEditClick = (entry) => {
//     setEditRowId(entry._id)
//     setEditFormData({
//       name: entry.name,
//       contact: entry.contact,
//       mail: entry.mail,
//       message: entry.message,
//     })
//   }
//   const handleEditChange = (e) => {
//     const { name, value } = e.target
//     setEditFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const res = await axios.get(SummaryApi.contectusdata.url)
//         setData(res.data)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     fetchdata()
//   }, [])

//   const handleDelete = async (id) => {
//     try {
//       const resp = await axios.delete(`${SummaryApi.contectusdelete.url}/${id}`)
//       alert('Deleted successfully')
//       setData((prev) => prev.filter((item) => item._id !== id))
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   // When user clicks "Edit" button for a row
//   // const handleEditClick = (item) => {
//   //   setEditingId(item._id)
//   //   setEditFormData({
//   //     Title: item.Title,
//   //     description: item.description,
//   //     image: null, // cannot prefill file input, so leave null
//   //   })
//   // }

//   // Handle input changes inside editable row
//   const handleEditInputChange = (e) => {
//     const { name, value, files } = e.target
//     setEditFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }))
//   }

//   // Cancel editing mode
//   const handleCancelClick = () => {
//     setEditingId(null)
//     setEditFormData({ Title: '', description: '', image: null })
//   }

//   // Save edited data
//   const handleSaveClick = async (id) => {
//     try {
//       const updateData = new FormData()
//       if (editFormData.image) updateData.append('image', editFormData.image)
//       updateData.append('Title', editFormData.Title)
//       updateData.append('description', editFormData.description)

//       await axios.put(`${SummaryApi.updateSliderData.url}/${id}`, updateData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       })

//       // Update local state after success
//       setData((prev) =>
//         prev.map((item) =>
//           item._id === id
//             ? {
//                 ...item,
//                 Title: editFormData.Title,
//                 description: editFormData.description,
//                 image: editFormData.image
//                   ? editFormData.image.name
//                   : item.image,
//               }
//             : item
//         )
//       )
//       alert('Update successful!')
//       setEditingId(null)
//       setEditFormData({ Title: '', description: '', image: null })
//     } catch (err) {
//       console.error(err)
//       alert('Update failed')
//     }
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-10">
//       <h1 className="text-3xl font-semibold font-serif">Slider Data</h1>

//       <table className="min-w-full border mt-6">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">Image</th>
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Description</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item) => (
//               <tr key={item._id} className="text-center">
//                 <td className="border px-4 py-2">
//                   {editingId === item._id ? (
//                     <input
//                       type="file"
//                       name="image"
//                       onChange={handleEditInputChange}
//                       accept="image/*"
//                     />
//                   ) : (
//                     <img
//                       src={`${BASE_URL}/uploads/${item.image}`}
//                       alt="Slider"
//                       className="w-32 h-20 object-cover mx-auto"
//                     />
//                   )}
//                 </td>

//                 <td className="border px-4 py-2">
//                   {editingId === item._id ? (
//                     <input
//                       type="text"
//                       name="Title"
//                       value={editFormData.Title}
//                       onChange={handleEditInputChange}
//                       className="w-full border rounded px-2 py-1"
//                     />
//                   ) : (
//                     item.Title
//                   )}
//                 </td>

//                 <td className="border px-4 py-2">
//                   {editingId === item._id ? (
//                     <input
//                       type="text"
//                       name="description"
//                       value={editFormData.description}
//                       onChange={handleEditInputChange}
//                       className="w-full border rounded px-2 py-1"
//                     />
//                   ) : (
//                     item.description
//                   )}
//                 </td>

//                 <td className="border px-4 py-2 space-x-2">
//                   {editingId === item._id ? (
//                     <>
//                       <button
//                         onClick={() => handleSaveClick(item._id)}
//                         className="px-3 py-1 bg-green-600 text-white rounded"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={handleCancelClick}
//                         className="px-3 py-1 bg-gray-600 text-white rounded"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEditClick(item)}
//                         className="px-3 py-1 bg-blue-600 text-white rounded"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => hsandleDelete(item._id)}
//                         className="px-3 py-1 bg-red-600 text-white rounded"
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="border px-4 py-2">
//                 No data found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default SliderUpload

import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'
import { useEffect, useState } from 'react'

const ContectusData = () => {
  const [data, setData] = useState(null)
  const [editRowId, setEditRowId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    Title: '',
    description: '',
    image: null,
  })

  const handleEditClick = (entry) => {
    setEditRowId(entry._id)
    setEditFormData({
      name: entry.name,
      contact: entry.contact,
      mail: entry.mail,
      message: entry.message,
    })
  }
  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.contectusdata.url)
        setData(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, []) // Added dependency array

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`${SummaryApi.contectusdelete.url}/${id}`)
      alert('Deleted successfully')
      setData((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const handleupadte = async (id) => {
    try {
      await axios.put(`${SummaryApi.contectUpdate.url}/${id}`, editFormData)
      setEditRowId(null)
    } catch (err) {
      console.error(err)
      alert('Update failed')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Contact Us Submissions
      </h1>
      <tbody>
        {data?.map((entry) => (
          <tr key={entry._id} className="hover:bg-gray-50">
            {editRowId === entry._id ? (
              <>
                <td className="border px-4 py-2">
                  <input
                    className="w-full border px-2 py-1"
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full border px-2 py-1"
                    type="text"
                    name="contact"
                    value={editFormData.contact}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full border px-2 py-1"
                    type="email"
                    name="mail"
                    value={editFormData.mail}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="border px-4 py-2">
                  <textarea
                    className="w-full border px-2 py-1"
                    name="message"
                    value={editFormData.message}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="border px-4 py-2">
                  {new Date(entry.createdAt).toLocaleDateString()}{' '}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleupadte(entry._id)}
                    className="bg-green-500 text-white rounded p-2 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditRowId(null)}
                    className="bg-gray-400 text-white rounded p-2"
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="border px-4 py-2">{entry.name}</td>
                <td className="border px-4 py-2">{entry.contact}</td>
                <td className="border px-4 py-2">{entry.mail}</td>
                <td className="border px-4 py-2 whitespace-pre-wrap">
                  {entry.message}{' '}
                </td>
                <td className="border px-4 py-2">
                  {new Date(entry.createdAt).toLocaleDateString()}{' '}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditClick(entry)}
                    className="bg-yellow-500 text-white rounded p-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry._id)}
                    className="bg-red-500 text-white rounded p-2"
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default ContectusData
