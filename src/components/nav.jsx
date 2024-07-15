import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/payscribe.png";
// import Logo from "../assets/images/logo.png";

const Navigation = props => {

    const [fixedNav, setFixed] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    return (
        <div className={`navigation ${fixedNav ? 'fixed' : ''} ${props?.pageFixedNav ? 'fixed' : ''}`}>
            <div className="nav-box">
                <div className="inline-nav">
                    <div className="div-logo">
                        <img src={Logo} alt="logo" className="logo" />
                        <h2 className="logo-title">Payscribe</h2>
                        {/* <div className="logo-box"></div>
                    <h3>PayScribe</h3> */}
                    </div>
                    <div className="desktop-only">
                        <ul>
                            <li>
                                <Link to="">Home</Link>
                            </li>
                            <li>
                                <Link to="">Products</Link>
                            </li>
                            <li>
                                <Link to="">Solutions</Link>
                            </li>
                            <li>
                                <Link to="">Developers</Link>
                            </li>
                            <li>
                                <Link to="">Resources</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="desktop-only">
                    <ul className="extra-nav">
                        <li>
                            <Link className="btn btn-white" to="/">Sign In Now</Link>
                        </li>
                        <li>
                            <Link className="btn btn-main" to="/">Open a Free Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;