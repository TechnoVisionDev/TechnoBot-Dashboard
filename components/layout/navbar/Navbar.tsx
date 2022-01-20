import Link from 'next/link';
import { useSession, signIn, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faPatreon} from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile';
import styles from './Navbar.module.css';

function Navbar() {
    const { data: session, status } = useSession()
    const name : string = session?.user?.name!;
    const avatar : string = session?.user?.image!;

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
                    <a href={process.env.DISCORD_BOT_INVITE} target="_blank" rel="noopener noreferrer">Invite</a>
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
            {status !== 'authenticated' ? loginButton : <Profile name={name} avatar={avatar}  />}
        </nav>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            session: await getSession(context)
        },
    }
}

export default Navbar;