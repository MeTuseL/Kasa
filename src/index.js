import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/header'
import Error from './pages/error'
import Footer from './components/footer'
import Housing from './pages/housing'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
          <Route path="/housing/:idHousing" element={<Housing />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
