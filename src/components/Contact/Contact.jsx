import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () =>{
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to connect</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" className={styles.icon} />
                    <a href="mailto:avinashabbina1999@gmail.com">Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin icon" className={styles.icon} />
                    <a href="https://www.linkedin.com/in/avinash-abbina-5a6a81192/" target="_blank">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/phoneIcon.png')} alt="phone icon" className={styles.icon} />
                    <p>+1 (573)-587-1873</p>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="github icon" className={styles.icon} />
                    <a href="https://github.com/" target="_blank">Github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/leetcodeIcon.png')} alt="leetcode icon" className={styles.icon} />
                    <a href="https://leetcode.com/u/avinashabbina/" target="_blank">Leetcode</a>
                </li>
            </ul>
        </footer>
    )
}