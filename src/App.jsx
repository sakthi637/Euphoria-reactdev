import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel';
import OfferSection from './Components/OfferSection';
import Newarrivals from './Components/Newarrivals';
import Fashion from './Components/Fashion';
import Categories from './Components/Categories';
import BrandDeal from './Components/BrandDeal';
import Limelight from './Components/Limelight';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer/Footer';
import AuthModal from './Components/Navbar/AuthModal';
import ProductDetail from './Components/ProductDetails/ProductDetail';
import GlobalStyle from './GlobalStyle';


export const AuthContext = React.createContext();

function App() {

  
  
  const [user, setUser] = useState(localStorage.getItem('currentUser') || null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, setIsAuthModalOpen }}>
      <Navbar />
      <GlobalStyle />
      {isAuthModalOpen && (
        <AuthModal
          isSignUp={false} 
          onClose={() => setIsAuthModalOpen(false)}
          setUser={setUser}
        />
      )}
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <OfferSection />
            <Newarrivals />
            <Fashion />
            <Categories />
            <BrandDeal />
            <Limelight />
            <Feedback />
            
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
