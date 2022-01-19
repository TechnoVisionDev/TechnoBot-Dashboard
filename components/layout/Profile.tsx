import { signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Profile.module.css';

type Props = {
    name: string;
    avatar: string;
};

const Profile = ({ name, avatar }: Props) => {
    return (
        <div className={styles.profile} onClick={() => signOut({callbackUrl: window.location.origin})}>
            <p>{name}</p>
            <img className={styles.avatar} src={avatar} />
            <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
        </div>
    );
}

export default Profile;