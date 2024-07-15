import "../assets/css/hom.css";

import React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";
import GlobeImg from "../assets/images/globe.png";

import Img1 from "../assets/images/payscribe/_1.png";
import Img2 from "../assets/images/payscribe/_2.png";
import Img3 from "../assets/images/payscribe/_3.png";
import Img4 from "../assets/images/payscribe/_4.png";

import _1 from "../assets/images/payscribe/_1.svg";
import _2 from "../assets/images/payscribe/_2.svg";
import _3 from "../assets/images/payscribe/_3.svg";
import _4 from "../assets/images/payscribe/_4.svg";

import HeroImg from "../assets/images/payscribe/hero.png";

import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <Navigation />
            <div className="hero-div">
                <div className="cover-div">
                    <div className="grid-2">
                        <div>
                            <h2>One Solution for<br />  streamlining your business.</h2>
                            <div className="mt_1">
                                <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                    processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.
                                </p>
                            </div>
                            <div className="button-flex mt_3">
                                <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightMain} alt="arrow right" /></Link>
                                <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                            </div>
                            <div className="companies-box">
                                <p>Trusted by over 20,000 businesses</p>
                                <div className="companies">
                                    <img src={_1} alt="" />
                                    <img src={_2} alt="" />
                                    <img src={_3} alt="" />
                                    <img src={_4} alt="" />
                                    <img src={_1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blk-bg">
                <div className="center-div">
                    <h3>We’ve made some friends along the way</h3>
                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                        financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.</p>
                </div>
                <div className="grid-3">
                    <div>
                        <h2>300+</h2>
                        <p>signed up users</p>
                    </div>
                    <div>
                        <h2>300+</h2>
                        <p>signed up users</p>
                    </div>
                    <div>
                        <h2>300+</h2>
                        <p>signed up users</p>
                    </div>
                </div>
            </div>
            <div className="hero-props-main mt_5">
                <div className="cover-div">
                    <div className="top-card-tile center-div">
                        <h5 className="top-tag">Features</h5>
                        <h2>Flexible and Programmable Financial Primitives</h2>
                        <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged
                            millios of companies.</p>
                    </div>
                    <div className="grid-2 mt_3">
                        <div className="hero-block-main">
                            <div className="img-box">
                                {/* <TrackExpense /> */}
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                        <div className="hero-block-main">
                            <div className="img-box">
                                {/* <img src={_5} alt="efk" /> */}
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                    </div>
                    <div className="grid-3 mt_3">
                        <div className="hero-block-main">
                            <div className="img-box">
                                {/* <TrackExpense /> */}
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                        <div className="hero-block-main">
                            <div className="img-box">
                                {/* <img src={_5} alt="efk" /> */}
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                        <div className="hero-block-main">
                            <div className="img-box">
                                {/* <img src={_5} alt="efk" /> */}
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;