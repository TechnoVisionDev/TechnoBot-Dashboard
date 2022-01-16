import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import styles from './Logo.module.css';

import Image from 'next/image';

function Logo() {
    return (
        <main className={styles.main}>
            <div className={styles.logo}>
                <Image src="/assets/home/logo.png" alt="TechnoBot logo" layout="fill" />
            </div>
            <h1 className={styles['large-header']}>The Ultimate Discord Bot</h1>
            <h1 className={styles['small-header']}>TechnoBot</h1>
            <div className={styles.buttons}>
                <a href="https://discord.com/oauth2/authorize?client_id=795534384367009802&permissions=4294962807&redirect_uri=https%3A%2F%2Fcarl.gg%2F&scope=bot"
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