import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const SliderUpload = () => {
  const [formdata, setFormdata] = useState({
    image: null,
    Tilte: '',
    description: '',
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormdata((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = () => {
    const uploadData = FormData()
    uploadData.append('image', formdata.image)
    uploadData.append('Title', formdata.Tilte)
    uploadData.append('description', formdata.description)

    try {
      const res = axios.post(SummaryApi.SliderDatapost.url, uploadData)
      alert('sucesss')

      setFormdata({ image: null, Title: '', description: '' })
    } catch (err) {
      console.log(err)
      alert('Upload failed')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col p-10">
        <h1 className="text-3xl font-semibold font-serif flex justify-center items-center flex-col">
          Upload Slider Content
        </h1>
        <div className="p-8 flex justify-center items-center flex-col gap-3">
          <label>slider image</label>
          <input type="file" name="image" onChange={handleInputChange} />
          <label>Title</label>
          <input
            type="text"
            name="Title"
            value={formdata.Tilte}
            onChange={handleInputChange}
          />
          <label>Title</label>
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
      </div>
    </>
  )
}

export default SliderUpload
