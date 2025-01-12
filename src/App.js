import './App.css';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  );
}

export default App;
