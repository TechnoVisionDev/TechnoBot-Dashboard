import styles from './Guild.module.css';

function Guild(props) {

    const data = props.data;

    let imageURL = `https://cdn.discordapp.com/icons/${data['id']}/${data['icon']}.png`;
    if (!data['icon']) {
      imageURL = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }

    return (
        <div className={styles.guild}>
            <img className={styles.icon} src={imageURL} alt={`${data['name']} Guild Icon`} />
            <p>{data['name']}</p>
        </div>
    );
}

export default Guild;