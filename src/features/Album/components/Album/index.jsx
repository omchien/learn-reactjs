import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  album: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func,
};

Album.defaultProps = { onDeleteClick: null };

function Album({ album, onDeleteClick }) {
  const handleClick = (album) => {
    onDeleteClick(album);
  };

  return (
    <div className="album">
      {/* <div className="album__icon" onClick={() => handleClick(album)}>
        X
      </div> */}
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.title} />
      </div>
      <p className="album__name">{album.title}</p>
    </div>
  );
}

export default Album;
