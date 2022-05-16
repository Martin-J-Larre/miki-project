import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section>
          <h1>Contact</h1>
          <div className="contact-container">
            <form>
                <div className="name-group">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Last name"
                    />
                </div>
                <input
                    type="email"
                    name="user_email"
                    placeholder="Subject"
                    className="email"
                />
                <textarea name="message" placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
            </div>
        </section>
    );
};

export default Contact;
