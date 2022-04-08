import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Guild.module.css';

type Props = { data: any; }

function Guild({data}: Props) {

    let imageURL = `https://cdn.discordapp.com/icons/${data['id']}/${data['icon']}.png`;
    if (!data['icon']) {
      imageURL = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }

    return (
        <div className={styles.guild}>
            <Link href={`/dashboard/${data['id']}/settings`}>
                <img className={styles.icon} src={imageURL} alt={`${data['name']} Guild Icon`} />
            </Link>
            <p>{data['name']}</p>
        </div>
    );
}

export default Guild;