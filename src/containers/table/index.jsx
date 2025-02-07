import CustomPagination from "@/components/common/Pagination";
import { transformColumns, simpleLabel } from "@/lib/helpers";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import WithPermission from "@/components/HOC/withPermission";
import { AuthServices } from "@/api/services";
import axios from "axios";

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
    pageNo,
    setTableData,
    setPageNo,
    setSelectedData,
    pageSize = 10,
    handleDelete
}) => {

    const [tableColumns, setTableColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data?.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const currentPageData = data?.slice(startIndex, startIndex + pageSize);

    useEffect(() => {
        let final = transformColumns.simpleLabel(columns);
        setTableColumns(final);
    }, [columns]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="card-body">
            <div>
                <div className="table-responsive table-card">
                    <table className={`table align-middle ${tableClass || ''}`} id="customerTable">
                        <thead className={`table-light ${theadClass || ''}`}>
                            <tr className={trClass || ''}>
                                {tableColumns?.map((c) => (
                                    <th className={thClass || ''} key={c?.name}>{c?.value}</th>
                                ))}
                                <th>{"Actions"}</th>
                            </tr>
                        </thead>
                        <tbody className="list form-check-all">
                            {currentPageData?.map((e, i) => {
                                return (
                                    <tr key={e + i}>
                                        {tableColumns?.length && tableColumns.map((d) => {
                                            return (
                                                <td key={d.value}>
                                                    {d.name === "File_Name" ? (
                                                        <ul className="list-unstyled">
                                                            {e.File_Name.map((fileName, index) => (
                                                                <li key={index} className="d-flex align-items-center">
                                                                    <span>{fileName.split('-').slice(1).join('-')}</span>
                                                                    <button
                                                                      onClick={async () => {
                                                                        try {
                                                                            console.log("fileName", fileName);
                                                                    
                                                                            // Use params to send query parameters in a GET request
                                                                            // const response = await axios.get(`http://192.168.20.40:3020/download_file`, {
                                                                            //     params: { "file_name": fileName.split('/').pop() }  // Send fileName as a query parameter
                                                                            // });
                                                                            window.open(`http://192.168.20.40:3020/download_file?file_name=${fileName.split('/').pop()}`, '_blank');
                                                                            
                                                                            console.log("response==downloadfile==>", response);
                                                                        } catch (error) {
                                                                            console.error('Error downloading the file:', error);
                                                                        }
                                                                    }}
                                                                        className="button-style-none ms-1"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-trigger="hover"
                                                                        data-bs-placement="top"
                                                                        title="Download Document"
                                                                    >
                                                                        <i className="ri-download-2-line align-bottom text-Secondary"></i>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setMode('edit');
                                                                            setSelectedData({ "fileName": fileName,"collectionName": data[i]});
                                                                            setModal(true);
                                                                        }}
                                                                        className="button-style-none ms-1"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-trigger="hover"
                                                                        data-bs-placement="top"
                                                                        title="Edit Document"
                                                                    >
                                                                        <i className="ri-pencil-fill align-bottom text-success"></i>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setDeleteModal(true);
                                                                            handleDelete({ "fileName": fileName.split('/').pop() });
                                                                        }}
                                                                        className="button-style-none ms-1"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-trigger="hover"
                                                                        data-bs-placement="top"
                                                                        title="Delete Document"
                                                                    >
                                                                        <i className="ri-delete-bin-fill align-bottom text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        e[d.name]
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td>
                                            <ul className="list-inline hstack gap-2 mb-0">
                                                <WithPermission WrappedComponent={
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                        <button
                                                            onClick={() => {
                                                                setMode('view');
                                                                setSelectedData(data[i]);
                                                                setModal(true);
                                                            }}
                                                            className="button-style-none">
                                                            <i className="ri-eye-fill align-bottom text-muted" style={{ fontSize: '20px' }}></i>
                                                        </button>
                                                    </li>} actionType="view" />
                                                {/* <WithPermission WrappedComponent={ */}
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Download Collection">
                                                        <button
                                                           onClick={() => {
                                                            const collectionName = data[i];

                                                            window.open(`http://192.168.20.40:3020/download_collection?collection_name=${collectionName.Collection_Name}`);
                                                            setSelectedData(data[i]);
                                                            }}
                                                            className="button-style-none">
                                                            <i className="ri-download-2-line align-bottom text-Secondary" style={{ fontSize: '20px' }}></i>
                                                        </button>
                                                    </li>
                                                    {/* } actionType="update" /> */}
                                                {/* <WithPermission WrappedComponent={ */}
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit Colllection">
                                                        <button
                                                            onClick={() => {
                                                                const ColllectionData = {type:'existing',data : data[i]}
                                                                setMode(ColllectionData);
                                                                setSelectedData(data[i]);
                                                                setModal(true);
                                                            }}
                                                            className="button-style-none">
                                                            <i className="ri-pencil-fill align-bottom text-success" style={{ fontSize: '20px' }}></i>
                                                        </button>
                                                    </li>
                                                    {/* } actionType="update" /> */}
                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete Collection">
                                                    <button
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            handleDelete({ "CollectionName": data[i] });
                                                        }}
                                                        className="button-style-none">
                                                        <i className="ri-delete-bin-fill align-bottom text-danger" style={{ fontSize: '20px' }}></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {!data?.length > 0 && (
                        <div className="noresult" style={{ display: "" }}>
                            <div className="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}></lord-icon>
                                <p className="text-muted mb-0">Sorry! No Result Found.</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-end mt-3">
                    {data?.length > pageSize && (
                        <CustomPagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TableContainer;
