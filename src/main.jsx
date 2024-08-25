import React from 'react'
import ReactDOM from 'react-dom/client'
import '@stripe/react-stripe-js'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { MyProvider } from './Context/context.jsx'
import AuthProvider from './Context/authcontext.jsx';
import Navbar from './assets/navbar.jsx';
import Footer from './assets/footer.jsx';
import AuthRoutes from './routes/authroutes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MyProvider>
            <Navbar />
              <AuthRoutes />
            <Footer />
        </MyProvider>
      </AuthProvider>
    </Router>
    
  </React.StrictMode>,
)
