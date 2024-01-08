import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <div className="first-page">
      <header className="App-header">
        <p>In the beginning, God... </p> <br />
        <Link to="/second-page">"But the world is broken!"</Link>
      </header>
    </div>
  )
}

function SecondPage() {
  return (
    <div className="second-page">
      <header className="App-header">
        <p>
          Yeah... We broke everything with sin. <br /> <br />
          <Link to="/third-page">"How do we fix it?"</Link>
        </p>
      </header>
    </div>
  )
}

function ThirdPage() {
  return (
    <div className="third-page">
      <header className="App-header">
        <p>
          We can't :( <br />
          but Jesus can!
          <br />
          <br />
          <Link to="/fourth-page">"How?"</Link>
        </p>
      </header>
    </div>
  )
}

function FourthPage() {
  return (
    <div className="fourth-page">
      <header className="App-header">
        <p>
          He died for you! Follow him! <br />
          <br />
          <Link to="/yes-page">Ok</Link> / / / <Link to="/no-page">Nahh</Link>
        </p>
      </header>
    </div>
  )
}

function YesPage() {
  return (
    <div className="yes-page">
      <header className="App-header">
        <p>Woohoo! welcome to the club</p>
      </header>
    </div>
  )
}

function NoPage() {
  return (
    <div className="no-page">
      <header className="App-header">
        <p>dang... oh well.</p>
      </header>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<FourthPage />} />

        <Route path="/yes-page" element={<YesPage />} />
        <Route path="/no-page" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App
