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
import { getUserData } from './helpers/storage.service'
import { getClaimData } from './helpers/storage.service'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/themeContext'

import './styles/App.css'

function App() {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

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
  const userData = getUserData();
  const claimData = getClaimData();

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path='/'
            element={
              userData
                ? <Navigate to="/home" replace />
                : <WelcomePage theme={currentTheme} />
            }
          />

          <Route
            path='/home'
            element={
              userData
                ? <HomePage theme={currentTheme} />
                : <Navigate to="/" replace />
            }
          />

          <Route
            path='/streak'
            element={
              claimData
                ? <StreakPage theme={currentTheme} />
                : <Navigate to="/home" replace />
            }
          />

          <Route
            path='/savecontent'
            element={
              userData
                ? <SaveContent theme={currentTheme} />
                : <Navigate to="/" replace />
            }
          />
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
