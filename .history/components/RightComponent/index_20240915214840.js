import styles from './RightComponent.module.css';
import { useState } from 'react';

export default function RightComponent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                <div key={index}>
                    <div onClick={() => toggleAccordion(index)}>
                        {item}
                    </div>
                    <div style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        <p>This is the content for {item}.</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
