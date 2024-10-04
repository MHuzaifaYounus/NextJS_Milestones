import styles from './contact.module.css'

export default function ContactPage() {
    return <div className='page-container'>
        <div className="page-title">
            <h1 className="title">Contact Us</h1>
            <p>Welcome to Contact us page. Keep in Touch With us</p>
        </div>
        <div className={styles.contactFormContainer}>
            <form >
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className={styles.textarea}
                        required
                    ></textarea>
                </div>

                <button type="submit" className={styles.button}>Send Message</button>
            </form>
        </div>

    </div>
}