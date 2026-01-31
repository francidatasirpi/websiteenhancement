
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/main/LandingPage';
import ScrollToTop from './common/components/scroll-to-top/ScrollToTop';

function App() {
  return (
    <div className='app'>
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
