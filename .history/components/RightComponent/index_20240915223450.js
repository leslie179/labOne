import { useState } from 'react';
import styles from './RightComponent.module.css';

export default function RightComponent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = [
        { 
            title: 'Albums & Discography', 
            content: 'Childish Gambino’s albums include:\nCamp.\nBecause the Internet.\n"Awaken, My Love!".\n3.15.20.' 
        },
        { 
            title: 'Hit Singles', 
            content: 'Notable singles include "3005," "Redbone," and "This Is America," which won Grammys for its cultural impact.' 
        },
        { 
            title: 'Musical Style & Influences', 
            content: 'Gambino blends hip hop, soul, funk, and rock, drawing influence from Prince, OutKast, and more.' 
        }
    ];

    return (
        <div className={styles.accordion}>
            {categories.map((category, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.title} onClick={() => toggleAccordion(index)}>
                        {category.title}
                    </div>
                    <div className={`${styles.content} ${activeIndex === index ? styles.show : ''}`}>
                        <p>{category.content.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
