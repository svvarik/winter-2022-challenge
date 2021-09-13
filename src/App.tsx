import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, ImageGrid } from './components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{paddingTop: 80}}>
        <ImageGrid />
      </div>
    </div>
  )
}

export default App
