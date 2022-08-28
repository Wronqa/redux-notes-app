import './app.css'
import { useState } from 'react'
import { Navigation } from './components/nav'
import { Notes } from './components/Notes'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='App__content'>
        <Navigation />
        <Notes />
      </div>
    </div>
  )
}

export default App
