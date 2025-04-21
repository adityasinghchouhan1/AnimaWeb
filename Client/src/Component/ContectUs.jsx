import React from 'react'
import Button from '../Reuse/Button'
const ContectUs = () => {
  const handleData = () => {
    console.log('hellow')
  }
  return (
    <div>
      ContectUs
      <Button title={'Contect us'} color={'#ff5733'} Onclick={handleData} />
    </div>
  )
}

export default ContectUs
