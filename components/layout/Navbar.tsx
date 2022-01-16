import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faPatreon} from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.css';

const DISCORD_OAUTH2 : string = "https://discord.com/api/oauth2/authorize?client_id=795534384367009802&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2F&response_type=code&scope=identify%20email%20guilds";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li className={styles['home-link']}>
                    <a href="/" className={styles.home}>TechnoBot</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                    <a href="https://discord.com/api/oauth2/authorize?client_id=795534384367009802&permissions=4294962807&redirect_uri=https%3A%2F%2Fcarl.gg%2F&scope=bot" target="_blank" rel="noopener noreferrer">Invite</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                    <a href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">Support</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faPatreon} />
                    <a href="https://patreon.com" target="_blank" rel="noopener noreferrer">Premium</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faBook} />
                    <a href="https://www.makeuseof.com/tag/4-sites-create-wikipedialike-website/" target="_blank" rel="noopener noreferrer">Docs</a>
                </li>
            </ul>
            <ul className={styles['icon-links']}>
                <li>
                    <a href="#top" className={styles.home}>
                        <FontAwesomeIcon className={styles.icon} icon={faHome} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=795534384367009802&permissions=4294962807&redirect_uri=https%3A%2F%2Fcarl.gg%2F&scope=bot" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                    </a>
                </li>
                <li>
                    <a href="https://patreon.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faPatreon} />
                    </a>
                </li>
                <li>
                    <a href="https://www.makeuseof.com/tag/4-sites-create-wikipedialike-website/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faBook} />
                    </a>
                </li>
            </ul>
            <Link href={DISCORD_OAUTH2}>
                <button className={styles['login-button']}>Login</button>
            </Link>
        </nav>
    );
}

export default Navbar;