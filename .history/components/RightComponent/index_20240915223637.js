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
            content: 'Childish Gambino’s albums include:\nCamp.\nBecause the Internet.\nAwaken, My Love!' 
        },
        { 
            title: 'Hit Singles', 
            content: '"3005"\n "Redbone"\n "This Is America" which won Grammys for its cultural impact.' 
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
