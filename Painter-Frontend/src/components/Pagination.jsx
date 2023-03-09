import { Box, Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { usePagination, DOTS } from "../hooks/use-pagination.hook";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // // If there are less than 2 times in pagination range we shall not render the component
  // if (currentPage === 0 || paginationRange.length < 2) {
  //     return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Box>
      {/* Left navigation arrow */}
      <Button disabled={currentPage === 1} onClick={onPrevious}>
        <AiOutlineArrowLeft />
      </Button>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <Button key={index}>&#8230;</Button>;
        }

        return <span key={index}></span>;
        // Render our Page Pills
        // return (
        //     <Button
        //         background={
        //             pageNumber === currentPage ? "green.500" : "initial"
        //         }
        //         onClick={() => onPageChange(pageNumber)}
        //     >
        //         {pageNumber}
        //     </Button>
        // );
      })}
      {/*  Right Navigation arrow */}
      <Button disabled={currentPage === lastPage} onClick={onNext}>
        <AiOutlineArrowRight />
      </Button>
    </Box>
  );
};

export default Pagination;
