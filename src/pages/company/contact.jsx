import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";

import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";

const ContactUs = () => {
    const { handleSubmit, control } = useForm({});
    return (
        <div className="contact">
            <Navigation />
            <div className="contact-hero-block">
                <div className="contact-message">
                    <div className="contact-message-intro">
                        <h2>We'd love to hear from you. Get in touch</h2>
                        <p>A member of the team will reach out to you as soon as possible.</p>
                    </div>
                    <form action="">
                        <div className="flex-form">
                            <div className="form_group">
                                <label htmlFor="first_name">First name</label>
                                <Controller name="first_name" defaultValue="" control={control}
                                    render={({ field }) => (
                                        <Input {...field} name="first_name" />
                                    )} />
                            </div>
                            <div className="form_group">
                                <label htmlFor="last_name">Last name</label>
                                <Controller name="last_name" defaultValue="" control={control}
                                    render={({ field }) => (
                                        <Input {...field} name="last_name" />
                                    )} />
                            </div>
                        </div>
                        <div className="flex-form">
                            <div className="form_group">
                                <label htmlFor="email_address">Email address</label>
                                <Controller name="email_address" defaultValue="" control={control}
                                    render={({ field }) => (
                                        <Input {...field} name="email_address" />
                                    )} />
                            </div>
                            <div className="form_group">
                                <label htmlFor="phone_number">Phone number</label>
                                <Controller name="phone_number" defaultValue="" control={control}
                                    render={({ field }) => (
                                        <Input {...field} name="phone_number" />
                                    )} />
                            </div>
                        </div>
                        <div className="form_group">
                            <label htmlFor="message">Your Message</label>
                            <Controller name="message" defaultValue="" control={control}
                                render={({ field }) => (
                                    <Input.TextArea rows={6} {...field} name="message" />
                                )} />
                        </div>
                        <div className="mt_10">
                            <button className="btn btn-main">Reach out to us</button>
                        </div>
                    </form>
                    {/* <div className="mt_5">
                        <div className="grid-2">
                            <div className="white-info-bg">
                                <div className="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Email us</h4>
                                    <p>support@busha.co</p>
                                </div>
                            </div>
                            <div className="white-info-bg">
                                <div className="icon-box">
                                    <ion-icon name="compass-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Email us</h4>
                                    <p>support@busha.co</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="form-extra"></div>
            <Footer />
        </div>
    )
}


export default ContactUs;