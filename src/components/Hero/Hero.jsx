import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Avinash Abbina</h1>
                <p className={styles.description}>
                    I am a Master's student in Computer and Information Sciences with over 3 years of experience in software development. Skilled in full-stack development using JavaScript, React, Angular, and Spring Boot, I have expertise in Python, Java, C++, and C#. Please reach out if you would like to learn more.
                </p>
                <a href="mailto:avinashabbina1999@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('/hero/heroImage.png')} alt="My image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}
