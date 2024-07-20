import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/card';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}


{/* <img src={logo} className="App-logo" alt="logo" /> */}