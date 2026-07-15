import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ProductProvider from './context/ProductContext';
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar />
          <AppRoutes />
          <Footer/>
        </Router>
      </ProductProvider>
    </>
  )
}

export default App
