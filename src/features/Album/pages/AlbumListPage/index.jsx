import React, { useMemo, useState } from 'react';
import AlbumForm from '../../components/AlbumForm';
import AlbumList from '../../components/AlbumList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';

export default function AlbumListPage(props) {
  const initAlbumList = [
    {
      id: 1,
      title: 'Em nên dừng lại',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg',
      status: 'new',
    },
    {
      id: 2,
      title: 'Nhìn về phía em',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg',
      status: 'new',
    },
    {
      id: 3,
      title: 'Dang dở',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg',
      status: 'completed',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [albumList, setAlbumList] = useState(initAlbumList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleDeleteClick = (album) => {
    const index = albumList.findIndex((x) => x.id === album.id);
    if (index < 0) return;

    const newAlbumList = [...albumList];
    newAlbumList.splice(index, 1);
    setAlbumList(newAlbumList);
  };

  const handleAlbumClick = (album, idx) => {
    // clone current array to the new one
    const newAlbumList = [...albumList];

    // toggle state
    newAlbumList[idx] = {
      ...newAlbumList[idx],
      status: album.status === 'completed' ? 'new' : 'completed',
    };

    // update album list
    setAlbumList(newAlbumList);
  };

  const handleShowAllClick = () => {
    // setFilterStatus('all');
    const queryParms = { status: 'all' };
    history.push({ pathname: match.path, search: queryString.stringify(queryParms) });
  };
  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParms = { status: 'completed' };
    history.push({ pathname: match.path, search: queryString.stringify(queryParms) });
  };
  const handlesShowNewClick = () => {
    // setFilterStatus('new');
    const queryParms = { status: 'new' };
    history.push({ pathname: match.path, search: queryString.stringify(queryParms) });
  };

  const renderedAlbumList = useMemo(() => {
    return albumList.filter((album) => filterStatus === 'all' || filterStatus === album.status);
  }, [albumList, filterStatus]);

  const handleAlbumFormSubmit = (formValues) => {
    const newAlbum = {
      id: albumList.length + 1,
      ...formValues,
    };
    const newAlbumList = [...albumList];
    newAlbumList.push(newAlbum);
    setAlbumList(newAlbumList);
  };

  return (
    <div>
      <h2>Album list</h2>
      <AlbumList
        albumList={renderedAlbumList}
        onAlbumClick={handleAlbumClick}
        onDeleteClick={handleDeleteClick}
      />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handlesShowNewClick}>Show New</button>
      </div>
      <AlbumForm onSubmit={handleAlbumFormSubmit} />
    </div>
  );
}

// export default AlbumListPage;
