import React, { useState } from 'react'
import Button from '../Reuse/Button'
import Heading from '../Reuse/Heading'

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

  const handleSubmit = async (e) => {
    const { name, mail, contact, message } = formdata
    console.log(formdata)
    // Basic validation
    if (!name || !mail || !contact || !message) {
      setError('All fields are required.')
      return
    }

    setError('')
    setSuccess('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess('Message sent successfully!')
        setFormdata({ name: '', mail: '', contact: '', message: '' })
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (error) {
      setError('Failed to send message. Try again later.')
      console.log('Request failed:', error)
    }
  }

  return (
    <div className="flex justify-center flex-col py-10">
      <Heading
        title={'Contact Us'}
        discrption={'Fill out your query here and connect with us'}
        textcolor={'white'}
      />

      <div className="flex justify-center items-center flex-col text-white p-5 border max-w-md mx-auto gap-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handledata}
          placeholder="Enter your name"
          value={formdata.name}
          className="text-black px-3 py-1 rounded w-full"
        />

        <label>Email</label>
        <input
          type="email"
          name="mail"
          onChange={handledata}
          placeholder="Enter your email"
          value={formdata.mail}
          className="text-black px-3 py-1 rounded w-full"
        />

        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          onChange={handledata}
          placeholder="Enter your contact number"
          value={formdata.contact}
          className="text-black px-3 py-1 rounded w-full"
        />

        <label>Message</label>
        <textarea
          name="message"
          onChange={handledata}
          placeholder="Enter your message"
          value={formdata.message}
          className="text-black px-3 py-1 rounded w-full"
        />

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <Button title="Contact Us" color="#ff5733" Onclick={handleSubmit} />
      </div>
    </div>
  )
}

export default ContectUs
