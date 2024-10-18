import React from 'react'
import styles from "./contact.module.css"
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link';
const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.title}>
                    <h1>Let<span>&apos;</span>s Discuss <span>Your</span> Project</h1>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.contactDetails}>
                        <h1>Contact <span>Me</span></h1>
                        <div className={styles.contactDetailBox}>
                            <div className={styles.icon}>
                                <FaMailBulk></FaMailBulk>
                            </div>
                            <h2>huzaifabuz@gmail.com</h2>
                        </div>
                        <div className={styles.contactDetailBox}>
                            <div className={styles.icon}>
                                <FaPhone></FaPhone>
                            </div>
                            <h2>+923212875227</h2>

                        </div>

                        <div className={styles.iconsBox}>
                            <Link href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
                            <Link href={"#"}> <FaTwitter /></Link>
                            <Link href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
                            <Link href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
                        </div>
                    </div>
                    <div className={styles.contactForm}>

                        <label >Name:</label>
                        <input type="text" id="name" name="name" required placeholder='Enter your name'></input>
                        <label>Email:</label>
                        <input type="email" id="email" name="email" required placeholder='Enter your email'></input>
                        <label >Message:</label>
                        <textarea id="message" name="message" required placeholder='Enter your message'></textarea>
                        <input className={styles.btn} type="submit" value="Send Message"></input>



                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact