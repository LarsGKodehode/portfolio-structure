// Libraries
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Routes
import LandingPage from './routes';
import ContactPage from './routes/Contact';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<LandingPage />}>
          <Route path='/Contact' element={<ContactPage />} />
        </Route>

        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;