import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">Ê</div>
            <span className="logo-text">ÊM DẠ MODE</span>
          </Link>
          <nav className="nav">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Trang chủ</Link>
            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About us</Link>
            <a className="nav-link" href="#test">Test</a>
            <a className="nav-link" href="#qa">Q&A</a>
            <a className="nav-link" href="#contact">Liên hệ</a>
          </nav>
          <div className="header-actions">
            <a className="btn-cta" href="#test">
              <span className="material-symbols-outlined">bolt</span>
              LÀM TEST NGAY
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
