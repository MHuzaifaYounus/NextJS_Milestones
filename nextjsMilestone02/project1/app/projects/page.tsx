import Link from "next/link"
import styles from "./projects.module.css"
import React from 'react'
import Image from "next/image"

 

const Projects = () => {
  return (
    <div className={styles.portfolio}>
        <div className={styles.portfolioContainer}>
            <div className={styles.title}>
                <h1><span>MY</span> <span>P</span>ORTFOLIO</h1>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <Image src={"/static/30days.png"} alt="no found" width={300} height={200}></Image>
                    </div>
                    <div className={styles.cardBody}>
                        <h2><span>30 Projects</span></h2>
                        <p>30 days of 30 projects challenge given by Sir Asharib Ali</p>
                        <button><Link href={"https://30-days-of-projects.vercel.app"}>Read More</Link></button>
                    </div>
                  
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                    <Image src={"/static/ts.jfif"} alt="no found" width={300} height={200}></Image>

                    </div>
                    <div className={styles.cardBody}>
                        <h2><span>100 Days</span></h2>
                        <p>100 Days of Typescript challenge given by Sir Asharib Ali</p>
                        <button><Link href={"https://github.com/MHuzaifaYounus/100_Days_Coding"}>Read More</Link></button>

                    </div>
                  
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                    <Image src={"/static/hackathon.png"} alt="no found" width={300} height={200}></Image>

                    </div>
                    <div className={styles.cardBody}>
                        <h2><span>Hackathon</span></h2>
                        <p>A Resume Builder Hackarhon given by Sir Ameen Alam</p>
                        <button><Link href={"https://huza-resume-maker.vercel.app/Milestone-4-5/index.html"}>Read More</Link></button>

                    </div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects