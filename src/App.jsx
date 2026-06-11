import Navbar from './components/navbar/Navbar';
import HeroSlider from './pages/HeroSlider';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <HeroSlider/>
    </div>
  );
}
