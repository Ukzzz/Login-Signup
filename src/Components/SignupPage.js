import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, UserPlus, ArrowLeft } from 'lucide-react';
import './signupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup Data:', formData);
      setIsSubmitting(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="signup-container"
    >
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
      </Link>

      <form className="signup-box glass-card" onSubmit={handleSubmit}>
        <div className="signup-header">
          <h2 className="signup-title">Create Account</h2>
          <p className="signup-subtitle">Join us to experience the future</p>
        </div>

        <div className="form-grid">
          <div className="input-group">
            <User className="input-icon" size={18} />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div className="input-group">
            <User className="input-icon" size={18} />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <User className="input-icon" size={18} />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <div className="input-group">
          <Phone className="input-icon" size={18} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password (min. 6 characters)"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            minLength="6"
            required
          />
        </div>

        <button type="submit" className="signup-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="loader"></div>
          ) : (
            <>
              <UserPlus size={20} />
              Create Account
            </>
          )}
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </motion.div>
  );
};

export default SignupPage;
