import React from 'react'
import Navigation from './Navigation'
import LandingPage from '../Pages/Landingpage'
import Features from '../Pages/Features'
import Homeabout from '../Pages/Homeabout'
import Footer from '../Components/Footer'
import Clients from '../Pages/Clients'



function Home() {
  return (
    <div>
        <Navigation />
        <LandingPage/>
        <Homeabout/>
        <Features/>
      <Clients/>
        <Footer/>
    </div>
  )
}

export default Home