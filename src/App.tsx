import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/home" element={<HomePage />} />

        {/* Redirect all invalid routes to the login page */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
