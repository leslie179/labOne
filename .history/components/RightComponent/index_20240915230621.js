import { useState } from 'react';
import styles from './RightComponent.module.css';

export default function RightComponent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = [
        { 
            title: 'Camp (2011)', 
            content: '"Bonfire" \n"Heartbeat" \n"Fire Fly"' 
        },
        { 
            title: 'Because the Internet (2013)', 
            content: '"3005"\n "Sweatpantss"\n "Telegraph Ave."' 
        },
        { 
            title: 'Awaken, My Love!(2016)', 
            content: '"3005"\n "Sweatpantss"\n "Telegraph Ave.' 
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
