import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        
                        <span className="fs-4 fw-semibold">React Data Tables</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/form" className="nav-link">
                                Form
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/table" className="nav-link">
                                Table
                            </Link>
                        </li>

                        
                        
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default Header;
