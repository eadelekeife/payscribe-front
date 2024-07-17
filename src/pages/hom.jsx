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

import HeroImg from "../assets/images/hero.svg";

import { Link } from "react-router-dom";
import { Rate } from "antd";

const Homepage = () => (
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
                        <img src={HeroImg} className="hero-img" alt="" />
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
        <div className="hero-props-main">
            <div className="cover-div">
                <div className="top-card-tile center-div">
                    <h2>Comprehensive and Customizable Financial Services</h2>
                    {/* <h2>Flexible and Programmable Financial Primitives</h2> */}
                    {/* <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged
            millios of companies.</p> */}
                </div>
                <div className="grid- mt_3">
                    <div className="hero-block-main">
                        <div className="grid-2">
                            <div>
                                <h5 className="top-tag">More than payments</h5>
                                <h3>Enabling companies to create groundbreaking financial services <br /> and solutions</h3>
                                <p>
                                    Payscribe's robust infrastructure empowers companies to develop diverse financial applications. From B2B
                                    payments and expense management to digital health, e-commerce, and accounting solutions, our platform provides
                                    the tools for secure transactions and seamless integration, enabling businesses to deliver innovative financial
                                    services to their customers.
                                </p>
                                <Link to=''>Learn More</Link>
                            </div>
                            <div className="img-box">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-2 mt_3">
                    <div className="hero-block-main">
                        <h3 className="sec-header">Invoicing and Payment Solutions</h3>
                        <p>We offer comprehensive solutions designed to simplify the invoicing process and manage payments efficiently, making
                            it easier for freelancers and local business owners to create accurate invoices and receive payments on time
                            without any hassle.</p>
                        <div className="img-box">
                        </div>
                    </div>
                    <div className="hero-block-main">
                        <h3 className="sec-header">Financial Control in your Pocket</h3>
                        <p>Take charge of your finances with our user-friendly mobile solutions, providing you with real-time
                            insights, secure transactions, and effortless management of your financial activities, all from the convenience of your pocket.</p>
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
                        <h3>Optimize Your Payment Process with Payscribe's Diverse Service Integration</h3>
                        <p>
                            At Payscribe, we've invested in the seamless integration of a diverse range of services and payment methods. This investment
                            means your platform can effortlessly connect with our unified API, simplifying the process of collecting payments.
                        </p>
                        {/* <p>Millios of companies of all sizes use Payscribe online and in person to accept payments, send payouts, automate
            financial processes, and grow revenue. No more panic. Send Payscribe the airtime you erroneously recharged millios of companies.</p> */}
                        <Link to=''>Get Started with Payscribe</Link>

                        <div className="page-line"></div>
                        <div className="grid-2">
                            <div className="icon-bar">
                                <ion-icon name="card-outline"></ion-icon>
                                <p>
                                    Whether it's credit cards or bank transfers, you can offer multiple payment channels without managing separate integrations.
                                </p>
                            </div>
                            <div className="icon-bar sec">
                                <ion-icon name="color-filter-outline"></ion-icon>
                                <p>
                                    Our integrated solutions enhance convenience and efficiency, allowing your business to focus on growth and innovation.
                                </p>
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
                        <h3>Ensuring Advanced <br /> Security and Integrity for Your Financial Transactions</h3>
                        <p>Employing robust and advanced security measures is fundamental to ensuring that your payments are safeguarded against
                            potential threats, providing you with peace of mind and confidence in the security and integrity
                            of every transaction you conduct.</p>
                        <Link to=''>Get Started with Payscribe</Link>

                        <div className="page-line"></div>
                        <div className="grid-2">
                            <div className="icon-bar">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <p>Our platform is continuously monitored to detect and prevent any suspicious activities, ensuring
                                    that your transactions remain secure.</p>
                            </div>
                            <div className="icon-bar sec">
                                <ion-icon name="browsers-outline"></ion-icon>
                                <p>With our advanced security, you can conduct transactions confidently, knowing your
                                    payments are secure and protected.</p>
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
                            <h5 className="top-tag">Instant Compliance</h5>
                            <h3>Rapidly innovate with fully <br /> compliant solutions</h3>
                            <p>Develop and deploy new products swiftly while meeting all regulatory standards. Our solutions ensure rapid innovation
                                without compromising compliance, allowing you to focus on creativity and business growth with complete confidence
                                and peace of mind.</p>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Easy Integration</h5>
                                <p>Our streamlined integration process ensures compatibility and smooth connectivity, enabling businesses to adopt
                                    our solutions effortlessly. This ease of integration enhances operational efficiency for our users.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Build and launch faster</h5>
                                <p>By leveraging our tools and resources, users can accelerate their product development cycles and swiftly bring
                                    their innovations to market. This advantage enables our customers to stay competitive.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Comprehensive Solutions</h5>
                                <p>Our offerings span a wide range of functionalities, from core services to advanced features, ensuring
                                    that users have access to a complete suite of tools necessary to address various challenges and requirements.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Responsive Support</h5>
                                <p>Our support team is readily available to address inquiries, provide assistance, and offer
                                    guidance whenever needed. We prioritize quick response times to ensure
                                    that our users receive the support they require.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>User-Friendly Interface</h5>
                                <p>Our interface is intuitively structured and straightforward, facilitating seamless navigation and interaction
                                    with features. It ensures that users can efficiently perform tasks with minimal effort
                                    and without extensive training.</p>
                            </div>
                            <div className="block-border">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <h5>Cost-Effective</h5>
                                <p>By delivering efficient and scalable solutions, we help organizations achieve their objectives while staying 
                                    within budget, making it a smart financial choice for long-term growth and sustainability.</p>
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

export default Homepage;