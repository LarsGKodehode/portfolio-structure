// Libraries
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Routes
import LandingPage from './routes';
import ContactPage from './routes/Contact';

// Context
import AboutContext from './contexts/AboutContext';
import AboutPage from './routes/About';

// Data
import dataBio from './data/dataBio';

function App() {
  return (
    <Router>
      <AboutContext.Provider value={dataBio}>
        <Routes>

          <Route path='/' element={<LandingPage />}>
            <Route path='/Contact' element={<ContactPage />} />
            <Route path='/About' element={<AboutPage />} />
          </Route>

          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
      </AboutContext.Provider>
    </Router>
  );
}

export default App;