import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const ContectusData = () => {
  const [data, setData] = useState(null)
  const [editRowId, setEditRowId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    contact: '',
    mail: '',
    message: '',
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
        console.log(data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchdata()
  }, []) // Added dependency array

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`${SummaryApi.contectusdelete.url}/${id}`)
      setData((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      console.log('Delete failed:', err)
    }
  }

  const handleupadte = async (id) => {
    try {
      await axios.put(`${SummaryApi.contectUpdate.url}/${id}`, editFormData)
      setEditRowId(null)
    } catch (err) {
      console.error(err)
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
                  {new Date(entry.createdAt).toLocaleDateString()}
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
                  {entry.message}
                </td>
                <td className="border px-4 py-2">
                  {new Date(entry.createdAt).toLocaleDateString()}
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
