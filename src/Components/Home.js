import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, LogOut, ArrowRight } from 'lucide-react';
import './Home.css';

const HomePage = ({ user, onLogout }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <div className="home-box glass-card">
        <h1 className="home-title">
          {user ? `Welcome back, ${user.name}!` : "Experience the Future"}
        </h1>
        <p className="home-subtitle">
          A premium, secure, and lightning-fast platform built for modern users.
        </p>
        
        <nav className="home-nav">
          {user ? (
            <button onClick={onLogout} className="home-button outline">
              <LogOut size={20} />
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="home-button primary">
                <LogIn size={20} />
                Login
              </Link>
              <Link to="/signup" className="home-button secondary">
                <UserPlus size={20} />
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {!user && (
          <div className="home-footer">
            <span>New here?</span>
            <Link to="/signup" className="footer-link">
              Create an account <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
