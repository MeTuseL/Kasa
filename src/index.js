import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/header'
import Error from './components/Error'
import Freelances from './pages/freelances'
import Footer from './components/footer'
import GlobalStyle from './utils/styles/globalStyle'
import styled from 'styled-components'

const BodyContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 1440px;
`

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <BodyContainer>
        {/*add a div for center contenu */}
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
          <Route path="/freelances" element={<Freelances />} />
        </Routes>
      </BodyContainer>
      <Footer />
    </Router>
  </React.StrictMode>,
)
