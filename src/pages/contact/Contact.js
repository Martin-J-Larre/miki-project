import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./contact.module.css";

const Contact = () => {

    const form = useRef();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const PUBLIC_KEY= process.env.REACT_APP_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("Message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section>
            <h1>Contact</h1>
            <div className={styles.contactContainer}>
                
                <form 
                    ref={form} 
                    onSubmit={sendEmail}
                    className={styles.form}
                >
                    
                        <input
                            type="text"
                            name="name"
                            placeholder="First name"
                            className={styles.firstNameInput}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            className={styles.lastNameInput}
                        />
                    
                    <input
                        type="email"
                        name="email"
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
