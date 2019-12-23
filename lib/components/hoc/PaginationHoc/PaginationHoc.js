// @flow
/**
 *HOC
 * paginationHoc
 *
 */

import React, { useState, useEffect } from 'react';

import { getDisplayName } from '../../../core/utils/getDisplayName';
import Pagination from '../../molecules/Pagination';

const PaginationHocComponent = (WrappedComponent, data) => {
  // ...and returns another component...

  function PaginationHoc(props) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(12);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
      setPosts(data.items);
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    useEffect(() => {
      setCurrentPage(1);
    }, []);

    useEffect(() => {
      const updatedData =
        posts && posts.length > 0 && posts.slice(indexOfFirstPost, indexOfLastPost);
      setCurrentData(updatedData);
    }, [currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <>
        <WrappedComponent {...props}>{paginationContent(currentData)}</WrappedComponent>
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
