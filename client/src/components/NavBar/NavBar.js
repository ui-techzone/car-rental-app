import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { appConfigs } from '../../configs/appConfigs';

function NavBar() {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedInUser = window.localStorage.getItem("isLoggedInUser");
        setIsLoggedIn(String(true) === isLoggedInUser);
    }, []);

    function navigateToLogin() {
        navigate("/login");
    }

    function logoutUser() {
        window.localStorage.setItem("isLoggedInUser", false);
        navigate('/home');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Car Rental</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                        appConfigs.navItems.map((navItem) => {
                            return <li key={navItem.name} className="nav-item">
                                 <Link to={navItem.link} className="nav-link">{navItem.name}</Link>
                                </li>
                        })
                    }
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {
                    isLoggedIn ? <button className='btn btn-primary ms-5' onClick={logoutUser}>Logout</button> :
                    <button className='btn btn-primary ms-5' onClick={navigateToLogin}>Login</button>
                }
                {/* <div className="dropdown text-end">
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;