import './app.css'
import { useState } from 'react'
import { Navigation } from './components/nav'
import { Notes } from './components/notes'
import { Sidebar } from './components/sidebar'

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
