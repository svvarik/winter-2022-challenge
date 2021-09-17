import React from 'react'
import './App.css'
import { Navbar, ImageGrid } from './components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{ paddingTop: 80, backgroundColor: '#fafafa' }}>
        <ImageGrid />
      </div>
    </div>
  )
}

export default App
