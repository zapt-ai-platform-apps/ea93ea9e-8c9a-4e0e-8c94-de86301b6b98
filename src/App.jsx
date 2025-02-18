import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductTimeline from './components/ProductTimeline';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import MadeOnZaptBadge from './components/MadeOnZaptBadge';
import { AuthProvider, useAuth } from './features/auth/AuthContext';
import AuthUI from './components/AuthUI';

/**
 * Main application component rendering the shopping app.
 * Displays authentication UI if user is not logged in.
 */
function MainApp() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-lightBlue text-black flex flex-col">
      <Header />
      {!user ? (
        <AuthUI />
      ) : (
        <>
          <HeroSection />
          <ProductTimeline />
          <FeaturesSection />
        </>
      )}
      <Footer />
      <MadeOnZaptBadge />
    </div>
  );
}

/**
 * Root App component with authentication provider.
 */
export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}