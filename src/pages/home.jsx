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

// import WomanImg from "../assets/images/friends.jpg";


import _1 from "../assets/images/payscribe/_1.svg";
import _2 from "../assets/images/payscribe/_2.svg";
import _3 from "../assets/images/payscribe/_3.svg";
import _4 from "../assets/images/payscribe/_4.svg";

import _5 from "../assets/images/payscribe/jjd.webp";

// import PhoneImg from "../assets/images/phone.png";

import TrackExpense from "../components/track/track";

import NoiseImg from "../assets/images/noise.jpg";
import HomepageHero from "../assets/images/homepage_hero.svg";

import Freelancer from "../assets/images/homepage/freelancer.png";
import BusinessImg from "../assets/images/homepage/business.png";
import WomanImg from "../assets/images/homepage/woman.png";
import LastImg from "../assets/images/homepage/last.jpg";
import PhoneImg from "../assets/images/homepage/phone.png";

import PaymentImg from "../assets/images/homepage/card.jpg";
import SupportImg from "../assets/images/homepage/support.jpg";
import CustomerCareImg from "../assets/images/homepage/help.jpg";
import SingleImg from "../assets/images/homepage/single.jpg";

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

    let breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.2,
            spaceBetween: 40
        }
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
                                    <img src={HomepageHero} className="hero" alt="hero sect" />
                                    {/* <div className="hero-img">
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
                                    </div> */}
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
                                <img src={NoiseImg} className="ash" alt="ash image" />
                                <div className="">
                                    <div className="inner-grid">
                                        <div>
                                            <h5 className="top-tag white">For Businesses</h5>
                                            <h3>Powering global growth with innovative payment solutions.</h3>
                                        </div>
                                        <div>
                                            <div className="desktop-only">
                                                <p ref={pushElementToRef}>Powering global growth with innovative payment solutions that simplify
                                                    transactions, <br /> reduce costs, and increase financial inclusion.</p>
                                            </div>
                                            <div className="mobile-only">
                                                <p ref={pushElementToRef}>Powering global growth with innovative payment solutions that simplify
                                                    transactions, reduce costs, and increase financial inclusion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-block-main main-story light">
                                <img src={NoiseImg} className="ash" alt="ash image" />
                                <div className="">
                                    <div className="inner-grid">
                                        <div>
                                            <h5 className="top-tag">For Individuals</h5>
                                            <h3>Take Control of Your <br /> Finances.</h3>
                                        </div>
                                        <div>
                                            <div className="desktop-only">
                                                <p ref={pushElementToRef}>Enjoy access to a wide range of tools and solutions tailored to
                                                    support <br /> you as your entrepreneurship journey.</p>
                                            </div>
                                            <div className="mobile-only">
                                                <p ref={pushElementToRef}>Enjoy access to a wide range of tools and solutions tailored to
                                                    support you as your entrepreneurship journey.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2-bias sec-content mt_3">
                            <div className="hero-block-main light">
                                <img src={NoiseImg} className="ash" alt="ash image" />
                                <div className="img-box">
                                    <img src={Freelancer} className="main-img" alt="freelancer" />
                                </div>
                                <h5 className="top-tag color">For Freelancers</h5>
                                <h3>Simplify Your Finances, <br /> Amplify Your Success.</h3>
                                <div className="mobile-only">
                                    <p ref={pushElementToRef}>Seamlessly track your projects, payments, and expenses, and freeing up time to
                                        focus on growing your skills.</p>
                                </div>
                                <div className="desktop-only">
                                    <p ref={pushElementToRef}>Seamlessly track your projects, payments, and expenses, and freeing <br /> up time to
                                        focus on growing your skills.</p>
                                </div>
                            </div>
                            <div className="hero-block-main _dark">
                                <img src={NoiseImg} className="ash" alt="ash image" />
                                <div className="img-box">
                                    <img src={BusinessImg} className="main-img" alt="freelancer" />
                                </div>
                                <h5 className="top-tag white">For Your Business</h5>
                                <div className="">
                                    <h3>Seemless Payment Integration, <br /> Boosted Sales.</h3>
                                </div>
                                <div className="desktop-only">
                                    <p ref={pushElementToRef}>Payscribe's payment solutions integrate with your business, enabling fast, secure, <br /> and
                                        hassle-free transactions.</p>
                                </div>
                                <div className="mobile-only">
                                    <p ref={pushElementToRef}>Payscribe's payment solutions integrate with your business, enabling fast, secure, and
                                        hassle-free transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-company-props mt_5">
                    <div className="cover-div">
                        <div className="grid-2-bias">
                            <div>
                                <h5 className="top-tag">Global Scale</h5>
                                <div className="desktop-only">
                                    <h3>The Backbone for Global <br /> Digital Business.</h3>
                                </div>
                                <div className="mobile-only">
                                    <h3>The Backbone for <br /> Global Digital Business.</h3>
                                </div>
                                <p ref={pushElementToRef}>
                                    Payscribe offers a comprehensive payment platform that enables businesses of all sizes - from small ventures
                                    to large corporations - to effortlessly issue white label USD/NGN card, process local and global
                                    transactions, unlocking new revenue streams and fueling growth.
                                </p>
                                <p ref={pushElementToRef}>Enjoy access to a wide range of tools and solutions tailored to
                                    support you as your entrepreneurship journey. From comprehensive resources to innovative solutions, everything you need to navigate
                                    and thrive in your business endeavors is at your fingertips.</p>

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
                            {/* <div className="company-props-img">
                            </div> */}
                            <div>
                                <div>
                                    <img src={WomanImg} className="woman" alt="globe img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-company-disp mt_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div>
                                <h3>Your one-stop <br /> payment partner.</h3>
                            </div>
                            <div>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                        </div>
                        <div className="mt_">
                            <Swiper
                                centeredSlides={false}
                                // spaceBetween={50} slidesPerView={3.2}
                                loop={false} breakpoints={breakpoints}>
                                <SwiperSlide key={1}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Issue USD/NGN Cards</h5>
                                            {/* <p>his service ensures quick, secure, and efficient transactions, allowing you to manage and reconcile payments with ease. Whether 
                                                you're collecting payments online, in-person, or through mobile devices, our solution integrates seamlessly with your 
                                                existing systems.</p> */}
                                            <p ref={pushElementToRef}>Whether you're making international purchases, paying for local services, or traveling
                                                abroad, our dual-currency cards provide the flexibility and convenience you need. With competitive exchange rates
                                                you can enjoy a hassle-free experience, ensuring your financial activities are smooth.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Payment Collections</h5>
                                            <p ref={pushElementToRef}>This service ensures quick, secure, and efficient transactions, allowing you to manage and reconcile payments with ease. Whether
                                                you're collecting payments online, in-person, or through mobile devices, our solution integrates seamlessly with your
                                                existing systems.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Payment links</h5>
                                            <p ref={pushElementToRef}>By providing customers with a convenient and straightforward payment option, you can enhance
                                                your sales process and improve customer satisfaction. Whether you're offering a service or selling products, this service
                                                makes receiving payments hassle-free and efficient.</p>
                                        </div>
                                        <div className="products-card-img _2">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Payment invoices</h5>
                                            <p ref={pushElementToRef}>Customize your invoices to reflect your brand, and provide your clients with multiple payment
                                                options to make the process seamless. This service streamlines the invoicing process for
                                                businesses and freelancers, ensuring you get paid promptly and accurately.</p>
                                        </div>
                                        <div className="products-card-img">

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <div className="products-card">
                                        <div className="products-card-body">
                                            <h5>Bills Payment</h5>
                                            <p ref={pushElementToRef}>Payscribe offers a hassle-free solution for managing and paying your bills. From
                                                utilities and rent to subscriptions and other recurring expenses, our platform allows you handle all your payments in one place. Simplify
                                                your financial routine and avoid late fees.</p>
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
                                <h5 className="top-tag">Easy to Implement</h5>
                                <div className="desktop-only">
                                    <h3>Built by developers <br /> for developers</h3>
                                </div>
                                <div className="mobile-only">
                                    <h3>Built by developers <br /> for developers</h3>
                                </div>
                                <p ref={pushElementToRef}>We've simplified the complexity of integrating multiple services and payment methods, providing a single API to unify your
                                    financial ecosystem. Now, focus on building a scalable business and gain a competitive advantage in the marketF.</p>
                                <p ref={pushElementToRef} className="last">Our integrated platform empowers you to manage payments effortlessly, reducing operational
                                    costs and increasing revenue. By utilizing our comprehensive solution, you can streamline your financial
                                    operations and enhance profitability, allowing you to concentrate on driving innovation and fostering
                                    growth within your organization.</p>
                                <button className="btn btn-white">View our documentation</button>
                            </div>
                            {/* <div className="company-props-img"> */}
                            <div className="">
                                {/* <img src={LastImg} style={{ marginTop: 0 }} className="woman" alt="globe img" /> */}
                                <img src={WomanImg} className="woman" alt="globe img" />
                            </div>
                            {/* <img src={WomanImg} className="woman" alt="globe img" /> */}
                        </div>
                    </div>
                </div>
                <div className="hero-company-disp mt_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div className="desktop-only">
                                <h3>Why Business & Consumers <br /> love Payscribe?</h3>
                            </div>
                            <div className="mobile-only">
                                <h3>The Backbone for <br /> Global Digital Business.</h3>
                            </div>
                            <div>
                                <p ref={pushElementToRef}>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
                                    financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously
                                    recharged millios of companies.</p>
                            </div>
                        </div>
                        <div className="grid- mt_3">
                            <Swiper
                                centeredSlides={false}
                                // spaceBetween={50} slidesPerView={3.2}
                                loop={false} breakpoints={breakpoints}>
                                <SwiperSlide key={1}>
                                    <div className="block-border">
                                        <img src={PaymentImg} alt="payment" />
                                        <h5>Payment Insights at Your Fingertips</h5>
                                        <p ref={pushElementToRef}>Gain a comprehensive understanding of your business performance with our intuitive dashboards and advanced
                                            analytics. Our platform offers real-time visibility into every stage of the payment journey, from
                                            initial transactions to detailed revenue tracking</p>
                                        {/* <p ref={pushElementToRef}>Get a complete view of your business performance with our intuitive dashboards and advanced analytics, providing
                                            real-time visibility into every stage of the payment journey, from transactions to revenue tracking.</p> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <div className="block-border">
                                        <img src={CustomerCareImg} alt="payment" />
                                        <h5>Reliable 24/7 customer support</h5>
                                        <p ref={pushElementToRef}>Experience unparalleled performance with Payscribe's robust infrastructure, designed to support your
                                            business with exceptional reliability. Our system boasts an impressive 99.95% uptime, ensuring that
                                            your operations run smoothly and without interruption. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <div className="block-border">
                                        <img src={SingleImg} alt="payment" />
                                        <h5>Unified Payment Gateway</h5>
                                        <p ref={pushElementToRef}>Simplify your payment infrastructure with our single API integration, designed to streamline your
                                            payment processing capabilities effortlessly. With just one integration, you can enable seamless
                                            payment transactions across Nigeria and worldwide. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <div className="block-border">
                                        <img src={SupportImg} alt="payment" />
                                        <h5>Personalized Support, Always</h5>
                                        <p ref={pushElementToRef}>Experience tailored assistance with Payscribe's dedicated team of account managers, providing
                                            expert technical support and personalized relationship management, ensuring you receive the help you need, when you need it</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="cover-div mt_5">
                    <div className="cover-di">
                        <div className="join-us">
                            <div className="cover-div">
                                <div className="grid-2-bias">
                                    <div>
                                        {/* <h5 className="top-tag">Get Started</h5> */}
                                        <h3>Start Building Today</h3>
                                        <p ref={pushElementToRef}>Sign up in seconds and start processing payments right away! Alternatively, our
                                            experts are here to help you craft a tailored payment solution that perfectly suits your
                                            business needs - just reach out to us!.</p>
                                        <div className="flex-div">
                                            <Link className="btn btn-accent" to="">Start Building <img src={ArrowRightMain} alt="arrow right" /></Link>
                                            <Link className="btn btn-gray-border" to="">Contact Sales <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div>
                                            <img src={PhoneImg} className="phone" alt="Phone" />
                                        </div>
                                    </div> */}
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