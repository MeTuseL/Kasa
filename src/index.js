import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Error from './pages/error'
import Housing from './pages/housing'
import About from './pages/about'
import Header from './components/header'
import Footer from './components/footer'

import './css/global.css'
import styles from './css/body.module.css'

//router
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <div className={styles.container}>
        {/*add a div for center body */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a_propos" element={<About />} />
            <Route path="/logement/:idHousing" element={<Housing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
