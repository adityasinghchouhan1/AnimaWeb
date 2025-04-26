import axios from 'axios'
import React, { useState } from 'react'
import SummaryApi from '../common/SummaryAPI'

const ServicesCard = () => {
  const [formData, setFormData] = useState({
    file: null,
    Title: '',
    description: '',
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = async () => {
    const UploadData = new FormData()
    UploadData.append('file', formData.file)
    UploadData.append('description', formData.description)
    UploadData.append('Title', formData.Title)

    try {
      await axios.post(SummaryApi.Uploadservices.url, UploadData)
      alert('sucesss')
      setFormData({ file: null, description: '', Title: '' })
    } catch (err) {
      console.error(err)
      alert('Upload failed')
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold font-serif my-4">Upload Services</h1>
        <div className="flex flex-col justify-center items-start gap-3 p-8">
          <label>Card Image</label>
          <input type="file" name="file" onChange={handleInputChange} />

          <label>Tilte</label>
          <input
            type="text"
            name="Title"
            value={formData.Title}
            placeholder="Title"
            onChange={handleInputChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Sumbit</button>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
