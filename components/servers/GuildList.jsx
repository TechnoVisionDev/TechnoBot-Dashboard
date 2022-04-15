import Guild from './Guild';

import styles from './GuildList.module.css';

function GuildList({data, isLoading}) {

    const items = [];
    if (isLoading) {
      items.push(<p className={styles.loading}>Loading...</p>);
    } else {
      for (var i = 0; i < data['length']; i++) {
        items.push(<Guild key={i} data={data[i]} />);
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