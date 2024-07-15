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
import { Rate } from "antd";

const Homepage = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="hero-div">
                <div className="cover-div">
                    <div className="grid-2">
                        <div>
                            {/* <div className="star-rating">
                                <Rate value={4.5} disabled allowHalf={true} />
                                <p>4.5 Star Rating on AppStore</p>
                            </div> */}
                            <h2>Versatile payment solutions designed to fit any business need.</h2>
                            {/* <h2>Payment solutions <br /> for every business</h2> */}
                            {/* <h2>One solution for<br />  streamlining your business.</h2> */}
                            <div className="mt_1">
                                <p className="millions">
                                    Payscribe offers a robust payment infrastructure enabling businesses to securely accept payments, issue
                                    USD/NGN cards for seamless cross-border transactions, and provide comprehensive financial services to their customers.
                                </p>
                                {/* <p className="millions">Payscribe provide a payment infrastructure that help businesses to accept payments
                                    securely, issue a USD/NGN cards for cross border payments, and offer financial services to their customers.</p> */}
                            </div>
                            <div className="button-flex mt_3">
                                <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
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
                            {/* <img src={HeroImg} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt_5 company-list">
                <div className="companies">
                    <img src={_1} alt="" />
                    <img src={_2} alt="" />
                    <img src={_3} alt="" />
                    <img src={_4} alt="" />
                    <img src={_1} alt="" />
                </div>
            </div> */}
            {/* <div className="contain">
                <div className="hero-sec-story">
                    <div className="contain">
                        <div className="grid-2">
                            <div>
                                <h3>Empower your finances with safe, smart and seamless transactions.</h3>
                            </div>
                            <div>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.</p>
                                <button className="btn btn-black">Explore More</button>
                            </div>
                        </div>
                        <div className="company-props grid-3">
                            <div className="props-data">
                                <div className="icon-sect"></div>
                                <h5>Smart spending</h5>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.</p>
                            </div>
                            <div className="props-data">
                                <div className="icon-sect"></div>
                                <h5>Smart spending</h5>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.</p>
                            </div>
                            <div className="props-data">
                                <div className="icon-sect"></div>
                                <h5>Smart spending</h5>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="blk-bg">
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
            </div> */}
            <div className="hero-props-main mt_5">
                <div className="cover-div">
                    <div className="top-card-tile center-div">
                        <h5 className="top-tag">Features</h5>
                        <h2>Flexible and Programmable Financial Primitives</h2>
                        {/* <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged
                            millios of companies.</p> */}
                    </div>
                    <div className="grid- mt_3">
                        <div className="hero-block-main">
                            <div className="grid-2">
                                <div>
                                    <h5 className="top-tag">cards</h5>
                                    <h3>Programmatically design cards for your businesses.</h3>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                                    <Link to=''>Learn More</Link>
                                </div>
                                <div className="img-box">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-2 mt_3">
                        <div className="hero-block-main">
                            {/* <h5 className="top-tag">cards</h5> */}
                            <h3 className="sec-header">Boost your revenue.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            {/* <Link to=''>Learn More</Link> */}
                            <div className="img-box">
                            </div>
                        </div>
                        <div className="hero-block-main">
                            {/* <h5 className="top-tag">cards</h5> */}
                            <h3 className="sec-header">Boost your revenue.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            {/* <Link to=''>Learn More</Link> */}
                            <div className="img-box">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-props-intro sec-bg">
                <div className="cover-div">
                    <div className="grid-2 page-sect">
                        <div>
                            <div className="img-cover"></div>
                        </div>
                        <div>
                            <h3>Empower your finances with safe, smart and seamless transactions.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Get Started with Payscribe</Link>

                            <div className="page-line"></div>
                            <div className="grid-2">
                                <div className="icon-bar">
                                    <ion-icon name="compass-outline"></ion-icon>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes.</p>
                                </div>
                                <div className="icon-bar sec">
                                    <ion-icon name="compass-outline"></ion-icon>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-props-intro hero-props-message">
                <div className="cover-div">
                    <div className="grid-2 page-sect">
                        <div>
                            <h3>Empower your finances with safe, smart and seamless transactions.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Get Started with Payscribe</Link>

                            <div className="page-line"></div>
                            <div className="grid-2">
                                <div className="icon-bar">
                                    <ion-icon name="compass-outline"></ion-icon>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes.</p>
                                </div>
                                <div className="icon-bar sec">
                                    <ion-icon name="compass-outline"></ion-icon>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="img-cover"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-company-disp sec-bg mt_5">
                <div className="cover-div">
                    <div className="grid-2-bias">
                        <div>
                            <div className="center-div">
                                <h5 className="top-tag">Global Scale</h5>
                                <h3>The Backbone for Global <br /> Digital Business.</h3>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                            <div className="grid-3 mt_3">
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-props-bottom">

            </div>
            <Footer noMargin={true} />
        </div>
    )
}

export default Homepage;