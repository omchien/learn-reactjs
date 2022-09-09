import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import PostDetailPage from './pages/PostDetailPage';
import PostListPage from './pages/PostListPage';

function PostFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={PostListPage} exact />
        <Route path={`${match.path}/:postId`} component={PostDetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default PostFeatures;
