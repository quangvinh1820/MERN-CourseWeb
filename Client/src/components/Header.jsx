import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { exitLgout } from '../redux/apiCalls';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    //lấy thong tin user 
    const currentUser = useSelector(state => state.user.currentUser)
    useEffect(() => {
        if (currentUser != null) {
            setIsLoggedIn(true);
        }
    }, [currentUser]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLogout = () => {
      exitLgout(dispatch);
      setIsLoggedIn(false);
      navigate('/');
    };
    
    const handleLogin = () => {
        navigate("/login");
    };

    return (
        // Navbar Start
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="/"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <h2 className="m-0 text-primary">
                    <i className="fa fa-book me-3"></i>eLEARNING
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className={`nav-item nav-link ${activeLink === '/' && 'active'}`}>
                        Home
                    </Link>
                    <Link to="/about" className={`nav-item nav-link ${activeLink === '/about' && 'active'}`}>
                        About
                    </Link>
                    <Link to="/courses" className={`nav-item nav-link ${activeLink === '/courses' && 'active'}`}>
                        Courses
                    </Link>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </Link>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to="/create" className={`dropdown-item ${activeLink === '/create' && 'active'}`}>
                                Create Courses
                            </Link>
                            <Link to="/team" className={`dropdown-item ${activeLink === '/team' && 'active'}`}>
                                Our Team
                            </Link>
                            <Link to="/testimonial" className={`dropdown-item ${activeLink === '/testimonial' && 'active'}`}>
                                Testimonial
                            </Link>
                            <Link to="/404" className={`dropdown-item ${activeLink === '/404' && 'active'}`}>
                                404 Page
                            </Link>
                        </div>
                    </div>
                    <Link to="/contact" className={`nav-item nav-link ${activeLink === '/contact' && 'active'}`}>
                        Contact
                    </Link>
                </div>
                {!isLoggedIn && (
                    <a
                        href="/login"
                        className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                        onClick={handleLogin}
                    >
                        Log in
                    </a>
                )}
                {isLoggedIn && (
                    <a
                        href=""
                        className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                        onClick={handleLogout}
                    >
                        Log out
                    </a>
                )}
            </div>
        </nav>
        // Navbar End
    );
};

export default Header;
