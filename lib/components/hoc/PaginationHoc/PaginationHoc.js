// @flow
/**
 *HOC
 * paginationHoc
 *
 */

import React, { useState, useEffect } from 'react';

import { getDisplayName } from '../../../core/utils/getDisplayName';
import Pagination from '../../atoms/Pagination';
import defaultConfig from './PaginationHoc.mock';

const PaginationHocComponent = WrappedComponent => {
  // ...and returns another component...

  function PaginationHoc(props) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [post, setCurrentPosts] = useState([]);

    useEffect(() => {
      setPosts(defaultConfig.items);
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    useEffect(() => {
      setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
    }, []);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <>
        <WrappedComponent {...post} {...props}>
          {' '}
        </WrappedComponent>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          firstPost={indexOfFirstPost}
          lastPost={indexOfLastPost}
        />
      </>
    );
  }

  PaginationHoc.displayName = `PaginationHoc(${getDisplayName(WrappedComponent)})`;
  return PaginationHoc;
};

export default PaginationHocComponent;
export { PaginationHocComponent as PaginationHocVanilla };
