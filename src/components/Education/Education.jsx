import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Education.module.css'

export const Education = () =>{
    return (
        <section className={styles.container} id='education'>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <img src = {getImageUrl('about/books.png')} alt='books image' className={styles.booksImage} />
                <ul className={styles.eduItems}>
                    <li className={styles.eduItem}>
                        <img src = {getImageUrl('about/semo.png')} alt='semo logo' />
                        <div className={styles.eduItemText}>
                            <h3>Southeast Missouri State University, Missouri, US</h3>
                            <p>Master's in Computers and Information Sciences</p>
                            <p className={styles.eduTime}>Aug 2023 - May 2025</p>
                        </div>
                    </li>
                    <li className={styles.eduItem}>
                        <img src = {getImageUrl('about/nitw.png')} alt='nitw logo' />
                        <div className={styles.eduItemText}>
                            <h3>National Institute of Technology, Warangal, India</h3>
                            <p>Bachelor of Technology in Computer Science and Engineering</p>
                            <p className={styles.eduTime}>Aug 2016 - May 2020</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}