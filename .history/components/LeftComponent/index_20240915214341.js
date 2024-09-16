import styles from './LeftComponent.module.css';

export default function LeftComponent() {
    return (
        <div>
            <img src="/path/to/childish_icon.jpg" alt="Childish Icon" className={styles.image} />
        </div>
    );
}
