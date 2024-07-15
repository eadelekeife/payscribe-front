import "../../assets/css/products.css";

import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";

const SendPayments = () => {
    return (
        <div>
            <Navigation />
            <div className="payments-hero-block">
                <div className="cover-div">
                    <div className="payments-hero">
                        <div className="payment-hero-content">
                            <h2>Send and Receive money from anywhere for free</h2>
                            <p>With Payscribe, you can send and receive money from anywhere in the world without breaking the bank. This feature makes it
                                easy to transfer funds to friends, family, or business associates, no matter where they are located. Simply link your
                                bank account or use a credit card to start sending and receiving money with ease.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-page-story mt_5">
                <div className="cover-div">
                    <div className="mt_10">
                        <div className="grid-2">
                            <div>
                                <div className="img-div"></div>
                            </div>
                            <div>
                                <h3>Delight customers with a seamless payments experience</h3>
                                <p>With Payscribe, you can send and receive money from anywhere in the world without breaking the bank. This feature makes it
                                    easy to transfer funds to friends, family, or business associates, no matter where they are located. Simply link your
                                    bank account or use a credit card to start sending and receiving money with ease.</p>
                                <ul>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt_5">
                        <div className="grid-2">
                            <div>
                                <h3>Delight customers with a seamless payments experience</h3>
                                <p>With Payscribe, you can send and receive money from anywhere in the world without breaking the bank. This feature makes it
                                    easy to transfer funds to friends, family, or business associates, no matter where they are located. Simply link your
                                    bank account or use a credit card to start sending and receiving money with ease.</p>
                                <ul>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bank Account</li>
                                </ul>
                            </div>
                            <div>
                                <div className="img-div"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="long-img-cover mt_5"></div>
            <Footer />
        </div>
    )
}


export default SendPayments;