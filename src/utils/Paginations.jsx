import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

// css
import "./paginationStyles.css";

const Paginations = (props) => {
  const { banksPerPage, totalBanks, handlePageChange } = props;

  const pageNumers = [];
  var i;
  for (i = 1; i <= Math.ceil(totalBanks / (banksPerPage * 10)); i++) {
    pageNumers.push(i);
  }

  const onPageChange = (number) => {
    handlePageChange(number);
  };

  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={i}
      marginPagesDisplayed={5}
      pageRangeDisplayed={5}
      onPageChange={() => onPageChange(Math.random() * pageNumers.length)}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Paginations;
