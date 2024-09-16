import styles from './RightComponent.module.css';
import { useState } from 'react';

export default function RightComponent() {
            const [activeIndex, setActiveIndex] = useState(null);
    
        const toggleAccordion = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };
    
        return (
            <div className={styles.accordion}>
                {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div 
                            className={styles.title} 
                            onClick={() => toggleAccordion(index)}
                        >
                            {item}
                        </div>
                        <div 
                            className={`${styles.content} ${activeIndex === index ? styles.show : ''}`}
                        >
                            <p>This is the content for {item}.</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
