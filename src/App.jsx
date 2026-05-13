import { useState } from 'react'
import Footer from './components/footer'
import Layout from './components/layout'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const responsive = `bg-red-500 md:bg-blue-500 lg:bg-green-500`

  return (
    <Layout>
      <h1 className={responsive}>holaaa</h1>
    </Layout>
  )
}

export default App
