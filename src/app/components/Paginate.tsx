import ReactPaginate from 'react-paginate';

interface PaginateProps {
    pageCount: number;
    changePage: any;
}

export const Paginate = ({pageCount, changePage} : PaginateProps) => {
  return (
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data: any) => changePage(data.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
  );
}

