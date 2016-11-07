import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainSectionContainer from './containers/MainSectionContainer'

const App = (props) => (
  <div>
    <Navbar/>
    <Hero/>
    <MainSectionContainer />
  </div>
)

export default App
