import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import JobList from './components/JobList';
import CompanyList from './components/CompanyList';
import ContactForm from './components/ContactForm';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/Profile';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
      <AuthProvider>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<JobList />} />
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/signUp" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
  );
}

export default App;
