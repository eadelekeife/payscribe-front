import "../assets/css/homepage.css";

import React, { useEffect, useLayoutEffect, useRef } from "react";

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

import WomanImg from "../assets/images/friends.jpg";


import _1 from "../assets/images/payscribe/_1.svg";
import _2 from "../assets/images/payscribe/_2.svg";
import _3 from "../assets/images/payscribe/_3.svg";
import _4 from "../assets/images/payscribe/_4.svg";

import _5 from "../assets/images/payscribe/jjd.webp";

import PhoneImg from "../assets/images/phone.png";

import TrackExpense from "../components/track/track";

import NoiseImg from "../assets/images/noise.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Homepage = () => {

    const textRef = useRef([]);

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
    };

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        textRef.current.map(elem => {

            // var childSplit = new SplitText(elem, {
            //     type: "lines",
            //     linesClass: "split-child"
            // });
            // var parentSplit = new SplitText(elem, {
            //     type: "lines",
            //     linesClass: "split-parent"
            // });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elem,
                    // start: "top center+=150",
                    // end: "top 50%",
                    // scrub: 1,
                    // markers: true,
                }
            });
            tl.fromTo(
                elem,
                {
                    y: 30,
                    autoAlpha: 0,
                    opacity: 0
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: .8,
                    stagger: 0.3,
                    opacity: 1
                }
            );
        })
    }, [])

    // const sections = gsap.utils.toArray()

    const pushElementToRef = ele => {
        textRef.current.push(ele);
    }

    return (
        <div className="homepage">
            <Navigation />
            <div>
                <div className="homepage-hero">
                    <div className="cover-div">
                        <div className="hero-content">
                            <div className="grid-2 main-grid">
                                <div>
                                    <h2 ref={pushElementToRef}>Versatile payment <br /> solutions designed to fit your business needs.</h2>
                                    <div className="mt_1">
                                        <p ref={pushElementToRef} className="millions">
                                            Payscribe offers a robust payment infrastructure enabling businesses to securely accept payments, issue
                                            USD/NGN cards for seamless cross-border transactions, and provide comprehensive financial services to their customers.
                                        </p>
                                    </div>
                                    <div className="button-flex mt_3">
                                        <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                        <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                                    </div>
                                    <div className="companies-box">
                                        <p ref={pushElementToRef}>Trusted by over 20,000 businesses</p>
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
                        </div>
                    </div>
                </div>
                <div className="hero-props-main mt_5">
                    <div className="container">
                        <div className="top-card-tile">
                            {/* <h5 className="top-tag">What we do</h5> */}
                            <h2 ref={pushElementToRef}>Flexible and Programmable Financial Primitives</h2>
                        </div>
                        <div className="grid-2-bias top">
                            <div className="hero-block-main main-story _dark">
                                <img src={NoiseImg} alt="ash image" />
                                <div className="">
                                    <div className="inner-grid">
                                        <div>
                                            <h5 className="top-tag white">For Businesses</h5>
                                            <h3>Powering global growth with innovative payment solutions.</h3>
                                        </div>
                                        <div>
                                            <p ref={pushElementToRef}>Powering global growth with innovative payment solutions that simplify
                                                transactions, <br /> reduce costs, and increase financial inclusion.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-block-main main-story light">
                                <img src={NoiseImg} alt="ash image" />
                                <div className="">
                                    <div className="inner-grid">
                                        <div>
                                            <h5 className="top-tag">For Individuals</h5>
                                            <h3>Take Control of Your <br /> Finances.</h3>
                                        </div>
                                        <div>
                                            <p ref={pushElementToRef}>Enjoy access to a wide range of tools and solutions tailored to
                                                 support <br /> you as your entrepreneurship journey.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2-bias sec-content mt_3">
                            <div className="hero-block-main light">
                                <img src={NoiseImg} alt="ash image" />
                                <div className="img-box">
                                </div>
                                <h5 className="top-tag color">For Freelancers</h5>
                                <h3>Simplify Your Finances, Amplify Your Success.</h3>
                                <p ref={pushElementToRef}>Seamlessly track your projects, payments, and expenses, and freeing <br /> up time to
                                    focus on growing your skills.</p>
                            </div>
                            <div className="hero-block-main _dark">
                                <img src={NoiseImg} alt="ash image" />
                                <div className="img-box">
                                </div>
                                <h5 className="top-tag white">For Your Business</h5>
                                <h3>Seemless Payment Integration, <br /> Boosted Sales.</h3>
                                <p ref={pushElementToRef}>Payscribe's payment solutions integrate with your business, enabling fast, secure, <br /> and
                                    hassle-free transactions.</p>
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
                                <p ref={pushElementToRef}>
                                    Payscribe offers a comprehensive payment platform that enables businesses of all sizes - from small ventures
                                    to large corporations - to effortlessly issue white label USD/NGN card, process local and global
                                    transactions, unlocking new revenue streams and fueling growth.
                                </p>
                                <p ref={pushElementToRef}>Enjoy access to a wide range of tools and solutions tailored to
                                    support you as your entrepreneurship journey.</p>

                                <div className="grid-3 mt_3">
                                    <div className="comp-border">
                                        <h5>200+</h5>
                                        <p ref={pushElementToRef}>Products and Services</p>
                                    </div>
                                    <div className="comp-border">
                                        <h5>100+</h5>
                                        <p ref={pushElementToRef}>Countries</p>
                                    </div>
                                    <div className="comp-border">
                                        <h5>8</h5>
                                        <p ref={pushElementToRef}>Payment Options</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company-props-img">
                            </div>
                            {/* <div>
                            <div>
                                <img src={WomanImg} className="woman" alt="globe img" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className="hero-company-disp mt_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div>
                                <h3>The Backbone for Global <br /> Digital Business.</h3>
                            </div>
                            <div>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                        </div>
                        <div className="mt_">
                            <Swiper
                                centeredSlides={false} spaceBetween={50}
                                slidesPerView={3.2}
                                loop={false}>
                                <SwiperSlide key={1}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Sell Giftcards</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Pay Bills</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Airtime to Cash</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img _2">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Sell Giftcards</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Sell Giftcards</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={6}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Sell Giftcards</h5>
                                            <p ref={pushElementToRef}>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                                our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="hero-company-props mt_5">
                    <div className="cover-div">
                        <div className="grid-2-bias">
                            <div>
                                <h5 className="top-tag">Global Scale</h5>
                                <h3>The Backbone for Global <br /> Digital Business.</h3>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                                <p ref={pushElementToRef} className="last">Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios.</p>
                            </div>
                            <div className="company-props-img">
                            </div>
                            {/* <img src={WomanImg} className="woman" alt="globe img" /> */}
                        </div>
                    </div>
                </div>
                <div className="hero-company-disp mt_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div>
                                <h3>The Backbone for Global <br /> Digital Business.</h3>
                            </div>
                            <div>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Close to The Metal</h5>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Reliable 24/7 customer support</h5>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Close to The Metal</h5>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cover-div mt_5">
                    <div className="cover-di">
                        <div className="join-us">
                            <div className="cover-div">
                                <div className="grid-2-bias">
                                    <div>
                                        <h5 className="top-tag">Global Scale</h5>
                                        <h3>Start Building Today</h3>
                                        <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                            recharged millios of companies.</p>
                                        <div className="flex-div">
                                            <Link className="btn btn-accent" to="">Start Building <img src={ArrowRightMain} alt="arrow right" /></Link>
                                            <Link className="btn btn-gray-border" to="">Contact Sales <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="phone-block">
                                            <img src={PhoneImg} className="phone" alt="Phone" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Homepage;