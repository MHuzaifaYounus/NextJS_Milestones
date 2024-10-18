import styles from "./about.module.css"
import React from 'react'

const About = () => {

    const skills = {
        "TypeScript": "75%",
        "JavaScript": "80%",
        "GitHub": "84%",
        "UI/UX": "86%",
        "React": "54%",
        "NextJS": "47%",
    }
    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.title}>
                    <h1>ABOUT <span>ME</span></h1>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.education}>
                        <h1><span>E</span>ducation</h1>
                        <div className={styles.innerContainer}>
                            <div className={styles.educationBar}>
                                <div className={styles.circle}>
                                    <div className={styles.innerCircle}></div>

                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.circle}>
                                    <div className={styles.innerCircle}></div>

                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.circle}>
                                    <div className={styles.innerCircle}></div>

                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.circle}>
                                    <div className={styles.innerCircle}></div>

                                </div>
                                <div className={styles.line}></div>

                            </div>
                            <div className={styles.educationText}>
                                <h1>Matric 2011 - 2023</h1>
                                <h1>Intermediate 2023 - 2025</h1>
                                <h1>SoftWare Engineering from NED 2025 - ..</h1>
                                <h1>Comming Soon..</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <h1><span>S</span>kills</h1>
                        {Object.entries(skills).map((skill, index) => {
                            return <div key={index} className={styles.skillBox}>
                                <div className={styles.skillText}>
                                    <h3>{skill[0]}</h3>
                                    <h3>{skill[1]}</h3>

                                </div>
                                <div className={styles.skillBar}>
                                    <div className={`${styles.inner}`}
                                        style={{ width: skill[1] }}></div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About