/* import { useState } from 'react'
 *//* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dcLogo from '/img/dc-logo.png' */
import './App.css'
import MyMain from './components/main'
import MyHeader from './components/header'
import MyFooter from './components/footer'

function App() {
/*   const [count, setCount] = useState(0)
 */
  return (
    <>
    <MyHeader></MyHeader>
      <MyMain></MyMain>
      <MyFooter></MyFooter>
    </>
  )
}

export default App
