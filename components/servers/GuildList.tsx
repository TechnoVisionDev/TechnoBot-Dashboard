import Guild from './Guild';

import styles from './GuildList.module.css';

function GuildList(props) {

    const items = [];
    if (props.isLoading) {
      items.push(<p className={styles.loading}>Loading...</p>);
    } else {
      for (var i = 0; i < props.data['length']; i++) {
        items.push(<Guild data={props.data[i]} />);
      }
    }

    return (
        <>
            <h1 className={styles.header}>Server Selector</h1>
            <div className={styles.container}>{items}</div>
        </>
    );
}

export default GuildList;