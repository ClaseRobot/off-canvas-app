import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { OffCanvas } from './components/OffCanvas'
import { Main } from './pages/main/Main'
import { Info } from './components/Info'
import { Dashboard } from './pages/dashboard/Dashboard'


function App() {

  return (
    <>
      <Dashboard />
      {/* <OffCanvas /> */}
      {/* <div className="main-container"> */}
        {/* <Main /> */}
        {/* <Info /> */}
      {/* </div> */}
    </>
  )
}

export default App
