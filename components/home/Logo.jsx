import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

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
                <a href="https://discord.com/oauth2/authorize?client_id=795534384367009802&scope=bot&permissions=2088234230" target="_blank" rel="noopener noreferrer">
                    <button className={styles['add-button']}>
                        <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                        &nbsp;Add To Discord
                    </button></a>
                <Link href="/servers">
                    <button className={styles['dashboard-button']}>Dashboard</button>
                </Link>
            </div>
        </main>
    );
}

export default Logo;