import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeatures from './features/Album';
import PostFeatures from './features/Post';
// import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      try {
        const productList = await productApi.getAll({ _limit: 10 });
      } catch (error) {
        console.log('failed to fetch product list', error.message);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h4>Header</h4>
      <p>
        <NavLink to="/albums" activeClassName="active-album-menu">
          Albums
        </NavLink>
      </p>
      <p>
        <NavLink to="/posts" activeClassName="active-post-menu">
          Posts
        </NavLink>
      </p>
      <Switch>
        <Route path="/" component={AlbumFeatures} exact />
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/posts" component={PostFeatures} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
