import Paginations from "@/components/common/Pagination";
import { transformColumns } from "@/lib/helpers";
import { Fragment, useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Table, Row, Col, Button, Input, CardBody } from "reactstrap";
// import ReactPaginate from 'react-paginate';
import 'react-paginate/theme/basic/react-paginate.css';
import WithPermission from "@/components/HOC/withPermission";
import { transformcolumns } from "@/lib/helpers/transformColumns";

const TableContainer = ({
    columns,
    data,
    tableClass,
    theadClass,
    trClass,
    thClass,
    divClass,
    setDeleteModal,
    setMode,
    setModal,
    pageSize,
    pageNo,
    setTableData,
    setPageNo,
    setSelectedData
}) => {

    const [tableColumns, setTableColumns] = useState([]);

    const onPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setPageNo(page);
        },
        [setPageNo]
    );

    const handlePageClick = (event) => {
        // const newOffset = (event.selected * pageSize)  data?.totalRecords;
        console.log(
            `User requested page number ${event.selected}, which is offset `
        );
        // setItemOffset(newOffset);
    };

    useEffect(() => {
        console.log("columnscolumns", columns)
        let final = transformcolumns(columns)
        console.log("final array", final)
        setTableColumns(final)
    }, [columns])

    return (
        <>
            <div className="card-body">
                <div>
                    <div className="table-responsive table-card">
                        <table className="table align-middle" id="customerTable">
                            <thead className="table-light">
                                <tr>
                                    {/* <th scope="col" style={{ width: "50px" }}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                        </div>
                                    </th> */}
                                    {tableColumns?.map(c => (
                                        <th className="sort" data-sort="name" key={c?.name}>{c?.value}</th>
                                    ))}
                                    <WithPermission WrappedComponent={
                                        <th className="sort" data-sort="name">{"Actions"}</th>
                                    } actionType={"view" || "update" || "delete"} />
                                </tr>
                            </thead>
                            <tbody className="list form-check-all">
                                {data?.map((e, i) => (
                                    <tr key={e + i}>
                                        {/* <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                            </div>
                                        </th> */}
                                        {tableColumns?.length && tableColumns.map(d => (
                                            <td key={d.value}>{e[d.name]}</td>
                                        ))}
                                        <td>
                                            <ul className="list-inline hstack gap-2 mb-0">

                                                <WithPermission WrappedComponent={<li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                    <button onClick={() => {
                                                        setMode('view');
                                                        setSelectedData(data?.records[i]);
                                                        setModal(true);
                                                    }} className="button-style-none">
                                                        <i className="ri-eye-fill align-bottom text-muted"></i>
                                                    </button>
                                                </li>
                                                } actionType="view" />
                                                <WithPermission WrappedComponent={
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                        <button onClick={() => {
                                                            setMode('edit');
                                                            setSelectedData(data?.records[i]);
                                                            setModal(true);
                                                        }} className="button-style-none">
                                                            <i className="ri-pencil-fill align-bottom text-muted"></i>
                                                        </button>
                                                    </li>
                                                } actionType="update" />
                                                <WithPermission WrappedComponent={
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                        <button onClick={() => {
                                                            setDeleteModal(true);
                                                            setSelectedData(data?.records[i])
                                                        }} className="button-style-none" >
                                                            <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                        </button>
                                                    </li>
                                                } actionType="delete" />
                                            </ul>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {!data?.length > 0 &&
                            <div className="noresult" style={{ display: "" }}>
                                <div className="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}></lord-icon>
                                    {/* <h5 className="mt-2">Sorry! No Result Found</h5> */}
                                    {/* <p className="text-muted mb-0">We have searched more than 150+ leads We did not find any leads for you search.</p> */}
                                    <p className="text-muted mb-0">Sorry! No Result Found.</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        {/* <Paginations
                            className="pagination-bar"
                            currentPage={pageNo}
                            totalCount={data?.records?.length}
                            pageSize={pageSize}
                            onPageChange={page => setPageNo(page)}
                        /> */}
                        {/* {console.log("react paginate ======", Math.ceil(data?.records?.length / pageSize), data?.records?.length, pageSize)}
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={Math.ceil(data?.totalRecords / pageSize)}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                        /> */}
                        {/* <div className="pagination-wrap hstack gap-2">
                            <a className="page-item pagination-prev disabled" href="#">
                                Previous
                            </a>
                            <ul className="pagination listjs-pagination mb-0"></ul>
                            <a className="page-item pagination-next" href="#">
                                Next
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableContainer;