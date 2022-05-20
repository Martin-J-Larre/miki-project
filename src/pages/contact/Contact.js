import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <section>
          <h1>Contact</h1>
          <div className={styles.contactContainer}>
            <form>
                <div className={styles.nameGroup}>
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
                    className={styles.email}
                />
                <textarea name="message" placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
            </div>
        </section>
    );
};

export default Contact;
