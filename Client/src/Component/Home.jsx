import Slide from '../Component/Slider'
import React from 'react'
import HomeAbout from './HomeAbout'
import Servises from './Servises'
import WorkImg from './WorkImg'

const Home = () => {
  return (
    <>
      <Slide />
      <HomeAbout />
      <Servises />
      <WorkImg />
    </>
  )
}

export default Home
