import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route index="/" element={<App />}>
              <Route index="About-Us" element={<About />}></Route>
            </Route>
        </Routes>
  </BrowserRouter>
)
