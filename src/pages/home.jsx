import "../assets/css/homepage.css";

import React from "react";

import Navigation from "../components/nav";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";

import Logo from "../assets/images/logo.png";

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

import _5 from "../assets/images/payscribe/jjd.webp";

import TrackExpense from "../components/track/track";

const Homepage = () => {
    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
    };
    return (
        <div className="homepage">
            <Navigation />
            {/* <div className="homepage-her">
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
                                </div>
                            </div>
                        </div>
                        <div className="hero-img">
                            <div>
                                <div className="grid-3">
                                    <div></div>
                                    <div>
                                        <img src={Img3} alt="" />
                                    </div>
                                    <div>
                                        <img src={Img4} alt="" />
                                    </div>
                                </div>
                                <div className="grid-2">
                                    <div>
                                        <img src={Img2} alt="" />
                                    </div>
                                    <div>
                                        <img src={Img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="homepage-hero">
                <div className="contain">
                    <div className="hero-content">
                        <div>
                            {/* <h2>The modern finance platform.</h2>
                            <h2>All your business in one app.</h2> */}
                            <div className="tag-block-cover">
                                <h4>SIMPLIFY, SECURE, SUCCEED.</h4>
                            </div>
                            <h2>One Solution for<br />  streamlining your business.</h2>
                            {/* <h2>Pay Lifestyle bills and manage your finances at ease</h2> */}
                            {/* <h2>Suite of Financial <br /> and Payment <br /> Products</h2> */}
                            <div className="mt_1">
                                <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                    processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged.
                                </p>
                            </div>
                            <div className="button-flex mt_3">
                                <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightMain} alt="arrow right" /></Link>
                                <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                            </div>
                            <div className="mt_3">
                                <div className="screenshot-bg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hero-summary">
                <div>
                    <h4>The fastest growing companies in Nigeria use Payscribe.</h4>
                    <div className="flex-div">
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="hero-company-data">
                <div className="cover-div">
                    <div className="flex-div">
                        <div>
                            <h4 className="sect-header">Loved by industy leaders <br /> See what our customers are saying.</h4>
                        </div>
                        <div>
                            <div>
                                <Link to="" className="btn btn-main main">View Our Customer Stories <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid-2 mt_2">
                        <div className="company-prop-list">
                            <div className="card-btn">
                                <div className="card-btn-header"></div>
                                <div className="card-btn-body">
                                    <div className="card-btn-body">
                                        <h5>For Businesses</h5>
                                        <h4>Micro-finance and loan providers.</h4>
                                        <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                            processes, and grow revenue. No more panic. Millios of companies of all sizes use Payscribe online.
                                        </p>
                                        <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="company-prop-list">
                            <div className="card-btn">
                                <div className="card-btn-header"></div>
                                <div className="card-btn-body">
                                    <div className="card-btn-body">
                                        <h5>For Businesses</h5>
                                        <h4>Micro-finance and loan providers.</h4>
                                        <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                            processes, and grow revenue. No more panic. Millios of companies of all sizes use Payscribe online.
                                        </p>
                                        <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hero-company-offers mt_5">
                <div className="cover-div">
                    <div className="top-tile">
                        <h3>Simple, easy payments</h3>
                        <p>Building a business is hard. Getting paid shouldn't be.</p>
                    </div>
                    <div className="grid-2">
                        <div>
                            <div className="offer-block"></div>
                        </div>
                        <div>
                            <h3>Delight customers with <br /> a seamless payments <br /> experience.</h3>
                            <p>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your
                                customers pay you however they want.</p>
                            <p className="last">We automatically route payments through the most optimal channels, ensuring the
                                highest transaction success rates in the market.</p>
                            <ul>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                            </ul>
                            <Link to=""><ion-icon name="chevron-forward-circle-outline"></ion-icon> Find out how we achieve high success rate</Link>
                        </div>
                    </div>
                    <div className="grid-2 mt_5">
                        <div>
                            <h3>Delight customers with <br /> a seamless payments <br /> experience.</h3>
                            <p>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your
                                customers pay you however they want.</p>
                            <p className="last">We automatically route payments through the most optimal channels, ensuring the
                                highest transaction success rates in the market.</p>
                            <ul>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                            </ul>
                            <Link to=""><ion-icon name="chevron-forward-circle-outline"></ion-icon> Find out how we achieve high success rate</Link>
                        </div>
                        <div>
                            <div className="offer-block"></div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="hero-props-main mt_5">
                <div className="cover-div">
                    <div className="top-card-tile">
                        <h5 className="top-tag">Features</h5>
                        <h2>Flexible and Programmable Financial Primitives</h2>
                        <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged
                            millios of companies.</p>
                    </div>
                    <div className="hero-block-main main-story">
                        <div className="grid-2">
                            <div className="">
                                <div className="inner-grid">
                                    <div>
                                        <h5 className="top-tag">cards</h5>
                                        <h3>Programmatically design cards for your businesses.</h3>
                                    </div>
                                    <div>
                                        <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                            recharged millios of companies.</p>
                                        <Link to=''>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="img-box"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-2 mt_3">
                        <div className="hero-block-main">
                            <div className="img-box">
                                <TrackExpense />
                            </div>
                            <h5 className="top-tag">cards</h5>
                            <h3>Programmatically design cards for your businesses.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p>
                            <Link to=''>Learn More</Link>
                        </div>
                        <div className="hero-block-main">
                            <div className="img-box">
                                <img src={_5} alt="efk" />
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
            <div className="hero-company-props mt_5">
                <div className="cover-div">
                    <div className="grid-2-bias">
                        <div>
                            <h5 className="top-tag">Global Scale</h5>
                            <h3>The Backbone for Global <br /> Digital Business.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                recharged millios of companies.</p>
                            <p className="last">Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                recharged millios.</p>

                            <div className="grid-3 mt_3">
                                <div className="comp-border">
                                    <h5>100+</h5>
                                    <p>Best in class platform partners</p>
                                </div>
                                <div className="comp-border">
                                    <h5>100+</h5>
                                    <p>Best in class platform partners</p>
                                </div>
                                <div className="comp-border">
                                    <h5>100+</h5>
                                    <p>Best in class platform partners</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <img src={GlobeImg} className="globe" alt="globe img" />
            </div>
            <div className="hero-company-disp mt_5">
                <div className="cover-div">
                    <div className="grid-2-bias">
                        <div>
                            <h5 className="top-tag">Global Scale</h5>
                            <h3>The Backbone for Global <br /> Digital Business.</h3>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                recharged millios of companies.</p>

                            <div className="grid-3 mt_3">
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                        recharged millios of companies.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                        recharged millios of companies.</p>
                                </div>
                                <div className="block-border">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <h5>Close to The Metal</h5>
                                    <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                        financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                        recharged millios of companies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cover-div testimonial mt_5">
                <div className="hero-company-props">
                    <div className="cover-div">
                        <div className="grid-2-bias">
                            <div>
                                <h5 className="top-tag">Global Scale</h5>
                                <h3>Start Building Today</h3>
                                <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                                <div className="flex-div">
                                    <Link className="btn btn-accent" to="">Start Building <img src={ArrowRightMain} alt="arrow right" /></Link>
                                    <Link className="btn btn-gray-border" to="">Contact Sales <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="last-bar">
                <div className="cover-div">
                    <div className="grid-2">
                        <div>
                            <h3>ONE SOLUTION FOR STREAMLINING YOUR BUSINESS.</h3>
                        </div>
                        <div>
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios
                                of companies of all. Experience the power of work.</p>
                        </div>
                    </div>
                    <div className="mt_5">
                        <Link className="btn btn-black">Get Started Now <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div >
    )
}

export default Homepage;