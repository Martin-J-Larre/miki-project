import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <section>
            <h1>Contact</h1>
            <div className={styles.contactContainer}>
                <form className={styles.form}>
                    
                        <input
                            type="text"
                            name="user_name"
                            placeholder="First name"
                            className={styles.firstNameInput}
                        />
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Last name"
                            className={styles.lastNameInput}
                        />
                    
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Subject"
                        className={styles.InputEmail}
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message"
                        className={styles.textArea}
                        />
                    <div className={styles.buttonSubmit}>
                        <input 
                            type="submit" 
                            value="Send"
                            />
                    </div>    
        
                </form>
            </div>
        </section>
    );
};

export default Contact;
