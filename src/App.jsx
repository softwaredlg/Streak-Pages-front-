import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import WelcomePage from './views/WelcomePage'
import StreakPage from './views/StreakPage'
import SaveContent from './views/SaveContent'
import { useEffect, useState } from 'react'
import { themes } from './utils/themes'

import './styles/App.css'

function App() {
  const [themeMode, setThemeMode] = useState("day");

  useEffect(() => {

    const currentHour = new Date().getHours();
    console.log("horario "+ currentHour);

    if(currentHour >= 18 || currentHour < 6){
      setThemeMode("night");
    }else{
      setThemeMode("day");
    }
  }, [])

  const currentTheme = themes[themeMode];

  return (
    <Routes>
      <Route path='/home' element={<HomePage theme={currentTheme}/>} />
      <Route path='/welcome' element={<WelcomePage theme={currentTheme}/>} />
      <Route path='/streak' element={<StreakPage theme={currentTheme}/>} />
      <Route path='/savecontent' element={<SaveContent theme={currentTheme}/>} />
    </Routes>
  )
}

export default App;
