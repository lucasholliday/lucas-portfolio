import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function NavBar() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="brand">Lucas Holliday</NavLink>
          <div>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0})}>Projects </NavLink>
            <NavLink to="/resume">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Controls() {
  const [pct, setPct] = useState(100)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.style.fontSize = pct + '%'
  }, [pct])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="controls" aria-label="Accessibility and theme controls">
      <button onClick={() => setPct(p => Math.max(75, p - 10))}>A–</button>
      <button onClick={() => setPct(p => Math.min(150, p + 10))}>A+</button>
      <button onClick={() => setDark(v => !v)}>🌓</button>

    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Controls />
    </BrowserRouter>
  )
}
