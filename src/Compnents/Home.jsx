import React from 'react'
import Navbar from './Navbar'
import Hero from '../Compnents/Hero'
import Banner from '../Compnents/Banner'
import Banner2 from './Banner2'
import ValueSection from './ValueSection'
import ConsultingSection from './ConsultingSection'
import MarketingSolutions from './MarketingSolutions'
function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Banner/>
   <Banner2/>
   <ValueSection/>
   <ConsultingSection/>
   <MarketingSolutions/>
   </>
  )
}

export default Home
