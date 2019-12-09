// @flow
/**
 *HOC
 * paginationHoc
 *
 */

import React, { useState, useEffect } from 'react';

import { getDisplayName } from '../../../core/utils/getDisplayName';
import Pagination from '../../atoms/Pagination';
import defaultConfig from '../PaginationHoc/PaginationHoc.mock';

const PaginationHocComponent = (WrappedComponent, props) => {
  // ...and returns another component...
  debugger;
  function PaginationHoc(props) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [post, setCurrentPosts] = useState([]);
    debugger;
    useEffect(() => {
      setPosts(defaultConfig.items);
    }, []);

    useEffect(() => {
      setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          firstPost={indexOfFirstPost}
          lastPost={indexOfLastPost}
        />
        <WrappedComponent {...post} {...props} />
      </>
    );
  }

  PaginationHoc.displayName = `PaginationHoc(${getDisplayName(WrappedComponent)})`;
  return PaginationHoc;
};

export default PaginationHocComponent;
export { PaginationHocComponent as PaginationHocVanilla };
