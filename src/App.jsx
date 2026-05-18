import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import WelcomePage from './views/WelcomePage'
import StreakPage from './views/StreakPage'
import SaveContent from './views/SaveContent'

import './styles/App.css'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path='/streak' element={<StreakPage />} />
      <Route path='/savecontent' element={<SaveContent />} />
    </Routes>
  )
}

export default App;
