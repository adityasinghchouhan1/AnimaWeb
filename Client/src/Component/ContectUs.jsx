import React, { useState } from 'react'
import Button from '../Reuse/Button'
import Heading from '../Reuse/Heading'
import axios from 'axios'
import SummaryApi from '../common/SummaryApi'
const ContectUs = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    mail: '',
    contact: '',
    message: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handledata = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    console.log('submit')
    try {
      const res = await axios.post(SummaryApi.Contect.url, formdata)
      console.log('POST request successful')
      if (res.status === 200) {
        setSuccess('Message sent successfully!')
        setFormdata({ name: '', mail: '', contact: '', message: '' })
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to send message. Try again later.')
      console.log('error', err)
    }
  }

  return (
    <div className="flex justify-center flex-col py-12">
      <Heading
        title={'Contact Us'}
        discrption={'Fill out your query here and connect with us'}
        textcolor={'white'}
      />

      <div className="flex justify-center sm:items-start  sm:mx-80 mx-10 flex-col text-white p-5 gap-5">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handledata}
          placeholder="Enter your name"
          value={formdata.name}
          className="text-white px-3 py-1 rounded w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label>Email</label>
        <input
          type="email"
          name="mail"
          onChange={handledata}
          placeholder="Enter your email"
          value={formdata.mail}
          className="text-white px-3 py-1 rounded w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          onChange={handledata}
          placeholder="Enter your contact number"
          value={formdata.contact}
          className="text-white px-3 py-1 rounded w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label>Message</label>
        <textarea
          name="message"
          onChange={handledata}
          placeholder="Enter your message"
          value={formdata.message}
          className="text-white px-3 py-5 mb-5  rounded w-full shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
        />

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <Button title="Contact Us" color="#ff5733" Onclick={handleSubmit} />
      </div>
    </div>
  )
}

export default ContectUs
