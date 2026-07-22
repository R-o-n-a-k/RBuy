import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import CartProvider from './context/CartContext';
import ProductProvider from './context/ProductContext';
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <AppRoutes />
            <Footer />
          </Router>
        </ProductProvider>
      </CartProvider>
    </>
  )
}

export default App
