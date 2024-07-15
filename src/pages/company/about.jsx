import React from "react";
import Navigation from "../../components/nav";

import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";
import Footer from "../../components/footer";

const AboutUsPage = () => {
    const { handleSubmit, control } = useForm({});
    return (
        <div className="contact about">
            <Navigation />
            <div className="contact-hero-block">
                <div className="contact-message">
                    <div className="contact-message-intro">
                        <h2>We'd love to hear from you. Get in touch</h2>
                    </div>
                    <div className="abt-img"></div>
                </div>
            </div>
            <div className="abt-content">
                <p>We are committed to building a world-class technology that delivers real value to our customers and makes a positive
                    impact on the lives of people in Africa. We are excited to be at the forefront of this important work and look
                    forward to making a difference for many years to come.</p>
                <p>We believe that everyone should have access to financial services and the ability to manage their money
                    effectively, regardless of their background or circumstances. We are committed to building technology that is
                    accessible and easy to use for everyone. Our customers are at the heart of everything we do, and we are
                    dedicated to delivering the best possible products and services to meet their needs and exceed their expectations.</p>

                <p>We are committed to building a world-class technology that delivers real value to our customers and makes a positive
                    impact on the lives of people in Africa. We are excited to be at the forefront of this important work and look
                    forward to making a difference for many years to come.</p>
                <p>We believe that everyone should have access to financial services and the ability to manage their money
                    effectively, regardless of their background or circumstances. We are committed to building technology that is
                    accessible and easy to use for everyone. Our customers are at the heart of everything we do, and we are
                    dedicated to delivering the best possible products and services to meet their needs and exceed their expectations.</p>
                <p>We are committed to building a world-class technology that delivers real value to our customers and makes a positive
                    impact on the lives of people in Africa. We are excited to be at the forefront of this important work and look
                    forward to making a difference for many years to come.</p>
                <p>We believe that everyone should have access to financial services and the ability to manage their money
                    effectively, regardless of their background or circumstances. We are committed to building technology that is
                    accessible and easy to use for everyone. Our customers are at the heart of everything we do, and we are
                    dedicated to delivering the best possible products and services to meet their needs and exceed their expectations.</p>
            </div>
            <Footer />
        </div>
    )
}


export default AboutUsPage;