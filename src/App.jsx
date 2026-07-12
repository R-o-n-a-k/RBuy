import './App.css'
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
        </Router>
      </ProductProvider>
    </>
  )
}

export default App
