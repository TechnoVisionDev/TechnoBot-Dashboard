import styles from './Waves.module.css';

function Waves() {
    return (
        <section className={styles.waves}>
            <div className={`${styles.wave} ${styles.wave1}`}></div>
            <div className={`${styles.wave} ${styles.wave2}`}></div>
            <div className={`${styles.wave} ${styles.wave3}`}></div>
            <div className={`${styles.wave} ${styles.wave4}`}></div>
        </section>
    );
}

export default Waves;