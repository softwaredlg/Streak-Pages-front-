import HomePage from './views/HomePage'
import WelcomePage from './views/WelcomePage'
import StreakPage from './views/StreakPage'
import SaveContent from './views/SaveContent'
import { useEffect, useState } from 'react'
import { themes } from './utils/themes'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import './styles/App.css'

function App() {
  const [themeMode, setThemeMode] = useState("day");
  const location = useLocation();

  useEffect(() => {

    const currentHour = new Date().getHours();

    if (currentHour >= 18 || currentHour < 6) {
      setThemeMode("night");
    } else {
      setThemeMode("day");
    }
  }, [])

  const currentTheme = themes[themeMode];

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route path='/' element={<WelcomePage theme={currentTheme} />} />
          <Route path='/home' element={<HomePage theme={currentTheme} />} />
          <Route path='/streak' element={<StreakPage theme={currentTheme} />} />
          <Route path='/savecontent' element={<SaveContent theme={currentTheme} />} />
        </Routes>

        <Toaster
          position='bottom-center'
          toastOptions={{
            duration: 2000,
          }}
        />
      </AnimatePresence>
    </>
  )
}

export default App;
