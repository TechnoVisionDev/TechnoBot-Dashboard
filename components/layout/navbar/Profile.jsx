import { signOut } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faServer, faSignOutAlt, faGem } from '@fortawesome/free-solid-svg-icons';

import styles from './Profile.module.css';

const Profile = ({ name, avatar }) => {
    const [isClicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(!isClicked);
    }

    return (
        <div className={styles.dropdown} onClick={clickHandler}>
            <div className={styles.profile}>
                <p className={styles.username}>{name}</p>
                <img className={styles.avatar} src={avatar} alt="Account profile picture" />
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className={`${styles.menu} ${!isClicked ? styles.hidden : ''}`}>
                <Link href="/servers" passHref>
                    <div className={styles.button}>
                        <FontAwesomeIcon icon={faServer} />
                        <p>Servers</p>
                    </div>
                </Link>
                <Link href="https://www.patreon.com/TechnoVision" passHref>
                    <div className={styles.button}>
                        <FontAwesomeIcon icon={faGem} />
                        <p>Premium</p>
                    </div>
                </Link>
                <div className={styles.button} onClick={() => signOut({callbackUrl: window.location.origin})}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <p>Sign Out</p>
                </div>
           </div>
        </div>
    );
}

export default Profile;