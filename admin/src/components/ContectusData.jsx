import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const ContectusData = () => {
  const [data, setData] = useState(null)

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
      await axios.put(`${SummaryApi.contectUpdate.url}/${id}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Contact Us Submissions
      </h1>
      {data ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Contact</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{entry.name}</td>
                  <td className="border px-4 py-2">{entry.contact}</td>
                  <td className="border px-4 py-2">{entry.mail}</td>
                  <td className="border px-4 py-2 whitespace-pre-wrap">
                    {entry.message}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2 ">
                    <button
                      className="bg-red-500 font-semibold rounded p-2"
                      onClick={() => handleupadte(entry._id)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="bg-blue-500 font-semibold rounded p-2 active:scale-95 transition-all "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  )
}

export default ContectusData
