import React from 'react';
import { Link } from 'react-router-dom';
import { appConfigs } from '../../configs/appConfigs';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
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
                </div>
            </div>
        </nav>
    );
}

export default NavBar;