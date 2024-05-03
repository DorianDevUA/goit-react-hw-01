import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}>{isOnline ? 'Online' : 'Offline '}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
