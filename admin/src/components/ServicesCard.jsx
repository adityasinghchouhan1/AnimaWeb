import axios from 'axios'
import React from 'react'
import SummaryApi from '../common/SummaryAPI'

const ServicesCard = () => {
  const handleSubmit = async () => {
    try {
      await axios.post(SummaryApi.Uploadservices, url)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold font-serif my-4">Upload Services</h1>
        <div className="flex flex-col justify-center items-start gap-3 p-8">
          <label>Card Image</label>
          <input type="file" />

          <label>Tilte</label>
          <input type="text" />

          <label>Discription</label>
          <input type="text" />
          <button>Sumbit</button>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
