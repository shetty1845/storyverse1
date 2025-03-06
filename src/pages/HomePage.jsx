// src/components/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
// import FlowingTextSection from '../components/FlowingTextSection';
import HeroSection from '../components/HeroSection';
import SeeYourStorySection from '../components/SeeYourStorySection';
import DiscoverSection from '../components/DiscoverSection';
import GetInTouchSection from '../components/GetInTouchSection';
import Footer from '../components/Footer';
import WriteStoriesPage from './WriteStoriesPage.jsx';
import ReadStoriesPage from './ReadStoriesPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import { useAuth } from '../AuthContext/Context.jsx';


function HomePage() {
  const info = useAuth()
  return (
    <>
    <div className="navbar bg-customBgColor">
            <Navbar />
            {/* <FlowingTextSection /> */}
            {!info.isLoggedIn &&  <HeroSection />}
            {!info.isLoggedIn && <DiscoverSection />}
            {!info.isLoggedIn && <SeeYourStorySection />}
            {!info.isLoggedIn && <GetInTouchSection />}
            
            <WriteStoriesPage />
            <ReadStoriesPage />    
           
            <SignupPage/>
           
            <LoginPage />
            <Footer />
         
     

       
    </div>


   

  
    </>
  );
}

export default HomePage;
