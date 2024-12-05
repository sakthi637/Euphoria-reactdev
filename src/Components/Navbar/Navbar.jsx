import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import AuthModal from './AuthModal';
import { AuthContext } from '../../App';
import logoImage from '../../assets/images/Logo.svg';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext); 
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isSignUp, setIsSignUp] = useState(false); 
  const [wishlist, setWishlist] = useState([]); 
  const [cart, setCart] = useState([]); 
  const navigate = useNavigate(); 

  const handleHamburgerClick = () => setIsNavOpen(!isNavOpen);

  const handleAuthClick = () => setIsModalOpen(true);

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    toast.error('Signed out');
    navigate('/'); 
  };

  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setWishlist(savedWishlist);
    setCart(savedCart);
  }, []);

  return (
    <header className="header" id="header">
      <div className="navigation">
        <div className="nav-center container d-flex">
         
          <Link to="/" className="logo">
            <img src={logoImage} alt="Logo" />
         </Link>

         
          <ul className={`nav-list d-flex ${isNavOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-links">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Men</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Women</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Combos</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Joggers</Link>
            </li>
          </ul>

        
          <div className="search-bar">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search" />
          </div>

          
          <div className="icons d-flex">
           
            {user ? (
              <button onClick={handleSignOut} className="icon signout-btn">
                <i className="bx bx-log-out"></i>
              </button>
            ) : (
              <button onClick={handleAuthClick} className="icon auth-btn">
                <i className="bx bx-user"></i>
              </button>
            )}

           
            <div className="icon">
              <i className="bx bx-heart"></i>
              {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
            </div>

            
            <div className="icon">
              <i className="bx bx-cart"></i>
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
          </div>

          
          <div className="hamburger" onClick={handleHamburgerClick}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>

     
      {isModalOpen && (
        <AuthModal
          isSignUp={isSignUp}
          onClose={handleModalClose}
          onSignUp={() => setIsSignUp(true)}
          onSignIn={() => setIsSignUp(false)}
          setUser={setUser}
        />
      )}

      
      <ToastContainer />
    </header>
  );
};

export default Navbar;
