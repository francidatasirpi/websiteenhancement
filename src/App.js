
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/main/LandingPage';
import ScrollToTop from './common/components/scroll-to-top/ScrollToTop';
import AnimatedBackground from './common/components/animated-background/AnimatedBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className='app'>
      <AnimatedBackground />
      <Router>
        <Routes>
          <Route exact path="/*" element={<LandingPage />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;

