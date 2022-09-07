import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AlbumDetailPage from './pages/AlbumDetailPage';
import AlbumListPage from './pages/AlbumListPage';

function AlbumFeatures(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={AlbumListPage} exact />
        <Route path={`${match.path}/:albumId`} component={AlbumDetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default AlbumFeatures;
