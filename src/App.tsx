import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

Amplify.configure(awsmobile);

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for dashboard page */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Redirect all invalid routes to the login page */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
