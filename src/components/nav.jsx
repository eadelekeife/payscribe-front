import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/payscribe.png";
import { Dropdown } from "antd";
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

    const businessItems = [
        {
            key: "1",
            label: (
                <Link to="/">
                    Why Payscribe
                </Link>
            )
        },
        {
            key: "2",
            label: (
                <Link to="/">
                    How It Works
                </Link>
            )
        }
    ];

    const solutionItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Sell Giftcards
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    Virtual Dollar (coming soon)
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to="/">
                    Airtime to Cash
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to="/">
                    Save and Earn
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link to="/">
                    Events
                </Link>
            ),
        }
        // {
        //     key: '6',
        //     label: (
        //         <Link to="/">
        //             Why Payscribe
        //         </Link>
        //     ),
        // },
        // {
        //     key: '7',
        //     label: (
        //         <Link to="/">
        //             How It Works
        //         </Link>
        //     ),
        // }
    ];

    const developerItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Overview
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    API Documentation
                </Link>
            ),
        }
    ];

    const companyItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    About
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    Contact Us
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="3">
                    Frequently Asked Questions
                </Link>
            ),
        }
    ];

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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: solutionItems,
                                    }}
                                >
                                    <Link to="/">Products</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: businessItems
                                    }}
                                >
                                    <Link to="/">For Businesses</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: developerItems,
                                    }}
                                >
                                    <Link to="/">For Developers</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: companyItems,
                                    }}
                                >
                                    <Link to="/">Companies</Link>
                                </Dropdown>
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