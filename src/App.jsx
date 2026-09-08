
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Signup from './pages/SignUp'


function App() {
 // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </div>
   
  )
}

export default App
