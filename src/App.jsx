// import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './App.css';
import HomePage from './pages/HomePage';
import SeeYourStorySection from './components/SeeYourStorySection';
import ReadStoriesPage from './pages/ReadStoriesPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/read-stories" element={<ReadStoriesPage />} />
          <Route path="/see-your-story" element={<SeeYourStorySection />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
