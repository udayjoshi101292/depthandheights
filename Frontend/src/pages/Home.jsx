import React, { useEffect } from 'react'
import Hero from '../sections/Hero'
import WhatWeDo from '../sections/WhatWeDo'
import OurStories from '../sections/OurStory'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'
import HelpUsSection from '../sections/HelpUsSection'
import UpComingEvents from '../sections/UpComingEvents.jsx'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  return (
    <div className='overflow-hidden'>
      <Hero/>
    
      <WhatWeDo/>
      <OurStories/>
      <Stats/>
      <UpComingEvents/>
      <Testimonials/>
      <HelpUsSection />
    </div>
  )
}

export default Home
