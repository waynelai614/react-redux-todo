import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainSection from './components/MainSection'

class App extends Component {
    render() {
        return (
            <div>
              <Navbar/>
              <Hero/>
              <MainSection />
            </div>
        )
    }
}

export default App
