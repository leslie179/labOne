import { useState } from 'react';
import styles from './RightComponent.module.css';

export default function RightComponent() {
    <h1>Pop Star Details</h1>
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = [
        { title: 'Albums & Discography', content: 'Childish Gambino’s albums like *Camp*, *Because the Internet*, *"Awaken, My Love!"*, and *3.15.20* show his evolution in music.' },
        { title: 'Hit Singles', content: 'Notable singles include "3005," "Redbone," and "This Is America," which won Grammys for its cultural impact.' },
        { title: 'Musical Style & Influences', content: 'Gambino blends hip hop, soul, funk, and rock, drawing influence from Prince, OutKast, and more.' }
    ];

    return (
        <div className={styles.accordion}>
            {categories.map((category, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.title} onClick={() => toggleAccordion(index)}>
                        {category.title}
                    </div>
                    <div className={`${styles.content} ${activeIndex === index ? styles.show : ''}`}>
                        <p>{category.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
