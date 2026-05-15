import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import './styles/App.css'
import WelcomePage from './views/WelcomePage'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/welcome' element={<WelcomePage />} />
    </Routes>
  )
}

export default App;
