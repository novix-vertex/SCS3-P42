import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthProvider from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
import ProductProvider from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <Toaster />
        <App />
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
)
