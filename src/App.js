import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Product from './components/Product/Product'
import Collection from './components/Collection/Collection'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <About/>
      <Product/>
      <Collection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
