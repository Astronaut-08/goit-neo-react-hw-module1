import styles from './FriendListItem.module.css';

const FriendListItem = ( { avatar, name, isOnline } ) => {
    return (
        <div className={styles.friendCard}>
            <img src={ avatar } alt="Avatar" width="48" className={styles.friendAvatar} />
            <p className={styles.friendName}> { name } </p>
            <p className={ isOnline ? styles.friendStatus + ' ' + styles.online : styles.friendStatus + ' ' + styles.offline }>
                { isOnline ? 'Online' : 'Offline' }
            </p>
        </div>
    )
};

export default FriendListItem;