import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path ="*" element = {<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
