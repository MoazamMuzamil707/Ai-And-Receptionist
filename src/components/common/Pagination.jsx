// import React from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from '@/lib/hooks/usePagination';
// // import './pagination.scss';
// const Pagination = props => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   // If there are less than 2 times in pagination range we shall not render the component
//   if (currentPage === 0 || paginationRange?.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange && paginationRange[paginationRange?.length - 1];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//        {/* Left navigation arrow */}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange?.map(pageNumber => {
         
//         // If the pageItem is a DOT, render the DOTS unicode character
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }
		
//         // Render our Page Pills
//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       {/*  Right Navigation arrow */}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

import React from "react";

const CustomPagination = ({ totalPages, currentPage, handlePageChange }) => {
  // Helper function to render page numbers
  const renderPageNumbers = () => {
    let pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: i === currentPage ? "#22417f" : "#f0f0f0",
            color: i === currentPage ? "white" : "#000",
            borderRadius: "5px",
            fontWeight: i === currentPage ? "bold" : "normal",
          }}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div
      className="pagination"
      style={{
        width: "22%",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}
    >
      {/* Left arrow (previous page) */}
      <span
        onClick={() => handlePageChange(currentPage - 1)}
        style={{
          pointerEvents: currentPage === 1 ? "none" : "auto",
          opacity: currentPage === 1 ? 0.3 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        {/* Replace with your Icon component */}
        <i className="ri-arrow-left-s-line"></i> {/* Example Icon */}
      </span>

      {/* Render page numbers */}
      {renderPageNumbers()}

      {/* Right arrow (next page) */}
      <span
        onClick={() => handlePageChange(currentPage + 1)}
        style={{
          pointerEvents: currentPage === totalPages ? "none" : "auto",
          opacity: currentPage === totalPages ? 0.3 : 1,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        {/* Replace with your Icon component */}
        <i className="ri-arrow-right-s-line"></i> {/* Example Icon */}
      </span>
    </div>
  );
};

export default CustomPagination;

