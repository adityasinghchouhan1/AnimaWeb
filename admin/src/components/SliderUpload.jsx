import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'
const BASE_URL = import.meta.env.VITE_SERVER_URL
const SliderUpload = () => {
  const [data, setData] = useState([])
  const [formdata, setFormdata] = useState({
    image: null,
    Title: '',
    description: '',
  })

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.SliderDataget.url)
        setData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, []) // ✅ add empty dependency array

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormdata((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = async () => {
    const uploadData = new FormData()
    uploadData.append('image', formdata.image)
    uploadData.append('Title', formdata.Title)
    uploadData.append('description', formdata.description)

    try {
      await axios.post(SummaryApi.SliderDatapost.url, uploadData)
      alert('Success')

      setFormdata({ image: null, Title: '', description: '' })

      // refetch updated data after upload
      const updatedRes = await axios.get(SummaryApi.SliderDataget.url)
      setData(updatedRes.data)
    } catch (err) {
      console.log(err)
      alert('Upload failed')
    }
  }

  const hsandleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${SummaryApi.SliderDataDelete.url}/${id}}`
      )
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col p-10">
        <h1 className="text-3xl font-semibold font-serif">
          Upload Slider Content
        </h1>
        <div className="p-8 flex justify-center items-center flex-col gap-3">
          <label>Slider Image</label>
          <input type="file" name="image" onChange={handleInputChange} />

          <label>Title</label>
          <input
            type="text"
            name="Title"
            value={formdata.Title}
            onChange={handleInputChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formdata.description}
            onChange={handleInputChange}
          />

          <button
            onClick={handleSubmit}
            className="p-2 font-semibold font-serif rounded border-dark transition-all active:scale-95"
          >
            Submit
          </button>
        </div>

        {/* Display data in a table */}
        <div className="p-8 w-full overflow-x-auto">
          <h2 className="text-2xl font-semibold font-serif mb-4">
            Slider Data
          </h2>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">
                      <img
                        src={`${BASE_URL}/uploads/${item.image}`} // assuming `item.image` is a URL
                        alt="Slider"
                        className="w-32 h-20 object-cover mx-auto"
                      />
                    </td>
                    <td className="border px-4 py-2">{item.Title}</td>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2">
                      <button className="p-2 font-serif font-semibold rounded active:scale-95 transition-all duration-300 bg-green-600 text-white text-sm m-1">
                        Update
                      </button>
                      <button className="p-2 font-serif font-semibold rounded active:scale-95 transition-all duration-300 bg-red-600 text-white text-sm m-1">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="border px-4 py-2">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SliderUpload
