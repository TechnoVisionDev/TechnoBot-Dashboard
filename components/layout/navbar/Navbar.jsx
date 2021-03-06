import Link from 'next/link';
import { useSession, signIn, getSession } from 'next-auth/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faPatreon} from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile';
import styles from './Navbar.module.css';

function Navbar() {
    const { data: session, status } = useSession();

    let name = "";
    let avatar = "";
    if (session) {
        name = session.user.name;
        avatar = session.user.image;
    }

    const loginHandler = () => {
        signIn('discord', {callbackUrl: `${window.location.origin}/servers`});
    }

    const loginButton = <button className={styles['login-button']} onClick={loginHandler}>Login</button>;

    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li className={styles['home-link']}>
                    <Link href='/'>
                        <a className={styles.home}>TechnoBot</a>
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                    <a href={process.env.NEXT_PUBLIC_DISCORD_BOT_INVITE} target="_blank" rel="noopener noreferrer">Invite</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                    <a href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">Support</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faPatreon} />
                    <a href="https://www.patreon.com/TechnoVision" target="_blank" rel="noopener noreferrer">Premium</a>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faBook} />
                    <a href="https://github.com/TechnoVisionDev/TechnoBot" target="_blank" rel="noopener noreferrer">Source</a>
                </li>
            </ul>
            <ul className={styles['icon-links']}>
                <li>
                    <Link href='/'>
                        <FontAwesomeIcon className={styles.icon} icon={faHome} />
                    </Link>
                </li>
                <li>
                    <a href={process.env.DISCORD_BOT_INVITE} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                    </a>
                </li>
                <li>
                    <a href="https://www.patreon.com/TechnoVision" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faPatreon} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/TechnoVisionDev/TechnoBot" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.icon} icon={faBook} />
                    </a>
                </li>
            </ul>
            {status !== 'authenticated' ? loginButton : <Profile name={name} avatar={avatar}  />}
        </nav>
    );
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            session: await getSession(context)
        },
    }
}

export default Navbar;