
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import Nav from './components/Nav'
import Service from './components/Service'
import Project from './components/Project'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact />} />
      

    </Routes>
      
    </>
  )
}

export default App
