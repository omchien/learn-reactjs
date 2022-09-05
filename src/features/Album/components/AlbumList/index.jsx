import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
  onAlbumClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

AlbumList.defaultProps = { onAlbumClick: null, onDeleteClick: null };

function AlbumList({ albumList, onAlbumClick, onDeleteClick }) {
  const handleAlbumClick = (album, idx) => {
    if (!onAlbumClick) return;
    onAlbumClick(album, idx);
  };

  return (
    <ul className="album-list">
      {albumList.map((album, idx) => (
        <li
          key={album.id}
          className={classNames({ completed: album.status === 'completed' })}
          onClick={() => handleAlbumClick(album, idx)}
        >
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
