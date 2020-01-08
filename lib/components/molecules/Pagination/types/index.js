// @flow

export type Props = {
  pageSize: number,
  data: array,
  onPageChange: func,
  className?: string,
  firstLabel?: string,
  lastLabel?: string,
  nextLabel?: string,
  previousLabel?: string,
  renderPaginationComponent: func,
  totalPosts?: number,
  showNextBtn: boolean,
  showPreviousBtn?: boolean,
  showLastButton?: boolean,
  showFirstButton?: boolean,
};
