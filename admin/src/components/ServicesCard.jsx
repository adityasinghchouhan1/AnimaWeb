import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const BASE_URL = import.meta.env.VITE_SERVER_URL

const ServicesCard = () => {
  const [data, setData] = useState([])
  const [formdata, setFormdata] = useState({
    file: null,
    Title: '',
    description: '',
  })
  const [editingId, setEditingId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    file: null,
    Title: '',
    description: '',
  })

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.Servisesget.url)
        setData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, [])

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormdata((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = async () => {
    if (!formdata.file || !formdata.Title || !formdata.description) {
      alert('Please fill all fields and upload an image.')
      return
    }

    const UploadData = new FormData()
    UploadData.append('file', formdata.file)
    UploadData.append('description', formdata.description)
    UploadData.append('Title', formdata.Title)
    try {
      await axios.post(SummaryApi.Uploadservices.url, UploadData)
      alert('Upload successful!')
      setFormdata({ file: null, Title: '', description: '' })
    } catch (err) {
      console.error(err)
      alert('Upload failed')
    }
  }

  const hsandleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return

    try {
      await axios.delete(`${SummaryApi.deleteServices.url}/${id}`)
      alert('Delete successful!')

      // Update local data state
      setData((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      console.error(err)
      alert('Delete failed')
    }
  }

  const startEditing = (item) => {
    setEditingId(item._id)
    setEditFormData({
      file: null,
      Title: item.Title,
      description: item.description,
      currentImage: item.file,
    })
  }

  const handleEditChange = (e) => {
    const { name, value, files } = e.target
    setEditFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSaveClick = async (id) => {
    if (!editFormData.Title || !editFormData.description) {
      alert('Title and description cannot be empty.')
      return
    }

    try {
      const updateData = new FormData()
      if (editFormData.file) {
        updateData.append('file', editFormData.file)
      }
      updateData.append('Title', editFormData.Title)
      updateData.append('description', editFormData.description)

      const res = await axios.put(
        `${SummaryApi.updateServices.url}/${id}`,
        updateData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      const updatedItem = res.data

      setData((prev) =>
        prev.map((item) => (item._id === id ? updatedItem : item))
      )
      setEditingId(null)
      alert('Update successful!')

      setEditingId(null)
    } catch (err) {
      console.error(err)
      alert('Update failed')
    }
  }

  const handleCancelClick = () => {
    setEditingId(null)
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center font-serif mb-10 text-indigo-700">
        Upload Services Content
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mb-12">
        <label className="block mb-2 font-semibold text-gray-700">
          Services Image
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleInputChange}
          className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
        />

        <label className="block mb-2 font-semibold text-gray-700">Title</label>
        <input
          type="text"
          name="Title"
          value={formdata.Title}
          onChange={handleInputChange}
          className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          placeholder="Enter slider Title"
        />

        <label className="block mb-2 font-semibold text-gray-700">
          description
        </label>
        <input
          type="text"
          name="description"
          value={formdata.description}
          onChange={handleInputChange}
          className="mb-6 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          placeholder="Enter slider description"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition duration-300"
        >
          Submit
        </button>
      </div>

      {/* Slider Data Table */}
      <div className="overflow-x-auto">
        <h2 className="text-3xl font-semibold font-serif mb-6 text-indigo-700 text-center">
          Slider Data
        </h2>
        <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-100 text-indigo-900">
            <tr>
              <th className="border border-gray-300 px-6 py-3">Image</th>
              <th className="border border-gray-300 px-6 py-3">Title</th>
              <th className="border border-gray-300 px-6 py-3">description</th>
              <th className="border border-gray-300 px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item._id}
                  className="text-center border border-gray-300 hover:bg-indigo-50 transition"
                >
                  <td className="border border-gray-300 p-3">
                    <img
                      src={`${BASE_URL}/uploads/${item.file}`}
                      alt="Slider"
                      className="w-36 h-24 object-cover rounded-lg mx-auto"
                    />
                  </td>

                  {editingId === item._id ? (
                    <>
                      <td className="border border-gray-300 p-3">
                        <input
                          type="text"
                          name="Title"
                          value={editFormData.Title}
                          onChange={handleEditChange}
                          className="w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
                        />
                      </td>
                      <td className="border border-gray-300 p-3 space-y-2">
                        <input
                          type="text"
                          name="description"
                          value={editFormData.description}
                          onChange={handleEditChange}
                          className="w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
                        />
                        <input
                          type="file"
                          name="file"
                          accept="image/*"
                          onChange={handleEditChange}
                          className="w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
                        />
                      </td>
                      <td className="border border-gray-300 p-3 space-x-2">
                        <button
                          onClick={() => handleSaveClick(item._id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 p-3 font-semibold">
                        {item.Title}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.description}
                      </td>
                      <td className="border border-gray-300 p-3 space-x-2">
                        <button
                          onClick={() => startEditing(item)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => hsandleDelete(item._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-300 p-4 text-center text-gray-500 italic"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ServicesCard
