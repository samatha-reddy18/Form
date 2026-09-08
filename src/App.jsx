import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App