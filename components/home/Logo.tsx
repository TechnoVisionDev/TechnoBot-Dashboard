import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import styles from './Logo.module.css';

function Logo() {
    return (
        <main className={styles.main}>
            <div className={styles.logo}>
                <Image src="/assets/home/logo.png" alt="TechnoBot logo" layout="fill" />
            </div>
            <h1 className={styles['large-header']}>The Ultimate Discord Bot</h1>
            <h1 className={styles['small-header']}>TechnoBot</h1>
            <div className={styles.buttons}>
                <a href={process.env.DISCORD_BOT_INVITE}
                    target="_blank" rel="noopener noreferrer">
                    <button className={styles['add-button']}>
                        <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                        &nbsp;Add To Discord
                    </button></a>
                <a href="#top">
                    <button className={styles['dashboard-button']}>Dashboard</button>
                </a>
            </div>
        </main>
    );
}

export default Logo;