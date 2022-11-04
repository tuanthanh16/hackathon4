import { Pagination } from "react-bootstrap";
const MyPagination = ({ totalPage, currentPage, onChangePage }) => {
  //   let active = 2;
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default MyPagination;
