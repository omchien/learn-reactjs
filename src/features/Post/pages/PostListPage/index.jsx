import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Clock from '../../../../components/Clock';
import Pagination from '../../../../components/Pagination';
import PostFiltersForm from '../../components/PostFilterForm';
import PostList from '../../components/PostList';

function PostListPage(props) {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({ _page: 1, _limit: 10, _totalRows: 1 });
  const [filters, setFilters] = useState({ _page: 1, _limit: 10 });

  useEffect(() => {
    (async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?${paramsString}`);
        const repsonseJSON = await response.json();

        const { data, pagination } = repsonseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('failed to fetch post list', error.message);
      }
    })();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, _page: newPage });
  };

  const handleFiltersChange = (newFilters) => {
    setFilters({ ...filters, _page: 1, title_like: newFilters.searchTerm });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <h3>
          Post list - <Clock />
        </h3>
      </div>

      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} onPageChange={handlePageChange} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </>
  );
}

export default PostListPage;
