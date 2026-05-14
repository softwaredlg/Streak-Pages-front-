import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import './styles/App.css'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}

export default App
