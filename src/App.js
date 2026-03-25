import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './Components/Home';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Simulated authentication for demonstration
    if (email && password.length >= 6) {
      const userData = { email, name: email.split('@')[0] };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        {/* Background Decorative Elements */}
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        
        <Routes>
          <Route path="/" element={<HomePage user={user} onLogout={handleLogout} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
