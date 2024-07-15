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
import TrackExpense from "../components/track";

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
            <div className="hero-summary">
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
                {/* <div className="grid-4">
                    <div>
                        <h2>99<span>%</span></h2>
                        <p>customer satisfaction</p>
                    </div>
                    <div>
                        <h2>99<span>%</span></h2>
                        <p>average transaction time</p>
                    </div>
                    <div>
                        <h2>24/7</h2>
                        <p>customer support</p>
                    </div>
                    <div>
                        <h2>24/7</h2>
                        <p>industry encryption</p>
                    </div>
                </div> */}
            </div>
            <div className="hero-company-data mt_5">
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
            <div className="hero-company-prop mt_5">
                <div className="cover-div">
                    <div className="top-cover">
                        <div className="tag-block-cover colored">
                            <h4>SIMPLIFY, SUCCEED</h4>
                        </div>
                        <h3>The modern finance platform. <br />
                            All your business in one app.</h3>
                        <div className="">
                            <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                recharged millios of companies of all.</p>
                        </div>
                        <div className="bg-white-block">
                            <div className="grid-3">
                                <div className="company-prop-lead active-disp">
                                    <div>
                                        <h5>Business Account</h5>
                                    </div>
                                </div>
                                <div className="company-prop-lead">
                                    <div>
                                        <h5>Business Account</h5>
                                    </div>
                                </div>
                                <div className="company-prop-lead">
                                    <div>
                                        <h5>Business Account</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prop-box mt_4">
                        <div className="company-prop-list">
                            <div className="card-btn">
                                <div className="card-btn-header"></div>
                                <div className="card-btn-body">
                                    <h5>For Businesses</h5>
                                    <h4>Micro-finance and loan providers.</h4>
                                    <p>Payscribe's API could be integrated into micro-finance and loan providers platforms, providing an easy way
                                        to manage savings and loan. Millios of companies of all sizes use Payscribe online and in person to accept
                                        payments, send payouts, automate financial processes, and grow revenue.</p>
                                    <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                </div>
                            </div>
                        </div>
                        <div className="company-prop-list black">
                            <div className="card-btn">
                                <div className="card-btn-header">
                                    <TrackExpense />
                                </div>
                                <div className="card-btn-body">
                                    <h5>Personal Use</h5>
                                    <h4>Financial Control in your Pocket.</h4>
                                    <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                        processes, and grow revenue. No more panic.
                                    </p>
                                    <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prop-box mt_2 inverse">
                        <div className="company-prop-list black">
                            <div className="card-btn">
                                <div className="card-btn-header"></div>
                                <div className="card-btn-body">
                                    <h5>Personal Use</h5>
                                    <h4>Micro-finance and loan providers.</h4>
                                    <p>Millios of companies of all sizes use Payscribe online  and in person to accept payments, send payouts, automate financial
                                        processes, and grow revenue. No more panic.
                                    </p>
                                    <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                </div>
                            </div>
                        </div>
                        <div className="company-prop-list">
                            <div className="card-btn">
                                <div className="card-btn-header"></div>
                                <div className="card-btn-body">
                                    <h5>Personal Use</h5>
                                    <h4>Financial Control in your Pocket.</h4>
                                    <p>Payscribe's API could be integrated into micro-finance and loan providers platforms, providing an easy way
                                        to manage savings and loan. Millios of companies of all sizes use Payscribe online and in person to accept
                                        payments, send payouts, automate financial processes, and grow revenue.</p>
                                    <Link to="">See How It Works <ion-icon name="chevron-forward-circle-outline"></ion-icon></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-pricing">
                <div className="cover-div">
                    <div className="center-box">
                        <h3 className="tile_header large">OUR CUSTOMERS SAID</h3>
                        <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios
                            of companies of all.</p>
                    </div>
                </div>
                <div className="testimonial-swiper-cover">
                    <div className="mt_2">
                        <Swiper
                            centeredSlides={true}
                            loop={true}>
                            <div className="gallery-controller">
                                <SwiperButtonPrev>
                                    <div className="btn-control">
                                        {/* <img src={ArrowLeft} alt="arrow left" /> */}
                                        <ion-icon name="arrow-back-outline"></ion-icon>
                                    </div>
                                </SwiperButtonPrev>
                                <SwiperButtonNext>
                                    <div className="btn-control right">
                                        {/* <img src={ArrowRight} alt="arrow right" /> */}
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </SwiperButtonNext>
                            </div>
                            <SwiperSlide key={1}>
                                <div className="swiper-cover">
                                    <div className="testimonial-mssg-box">
                                        <div className="mssg-author"></div>
                                        <div className="mssg-content"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div className="swiper-cover">
                                    <div className="testimonial-mssg-box">
                                        <div className="mssg-author"></div>
                                        <div className="mssg-content"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div className="swiper-cover">
                                    <div className="testimonial-mssg-box">
                                        <div className="mssg-author"></div>
                                        <div className="mssg-content"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
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