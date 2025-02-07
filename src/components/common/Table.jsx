
const Table = ({ columns, data }) => {
    return (
        <>
            <div className="card-body">
                <div>
                    <div className="table-responsive table-card">
                        <table className="table align-middle" id="customerTable">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col" style={{ width: "50px" }}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                        </div>
                                    </th>

                                    <th className="sort" data-sort="name">Name</th>
                                    <th className="sort" data-sort="company_name">Company</th>
                                    <th className="sort" data-sort="leads_score">Leads Score</th>
                                    <th className="sort" data-sort="phone">Phone</th>
                                    <th className="sort" data-sort="location">Location</th>
                                    <th className="sort" data-sort="tags">Tags</th>
                                    <th className="sort" data-sort="date">Create Date</th>
                                    <th className="sort" data-sort="action">Action</th>
                                </tr>
                            </thead>
                            <tbody className="list form-check-all">
                                <tr>
                                    <th scope="row">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                        </div>
                                    </th>
                                    <td className="id" style={{ display: "none" }}><a href="javascript:void(0);" className="fw-medium link-primary">#VZ2101</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src="assets/images/users/avatar-10.jpg" alt="" className="avatar-xxs rounded-circle image_src object-fit-cover" />
                                            </div>
                                            <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                        </div>
                                    </td>
                                    <td className="company_name">Force Medicines</td>
                                    <td className="leads_score">147</td>
                                    <td className="phone">580-464-4694</td>
                                    <td className="location">Los Angeles, USA</td>
                                    <td className="tags">
                                        <span className="badge bg-primary-subtle text-primary">Lead</span>
                                        <span className="badge bg-primary-subtle text-primary">Partner</span>
                                    </td>
                                    <td className="date">07 Apr, 2021</td>
                                    <td>
                                        <ul className="list-inline hstack gap-2 mb-0">
                                            <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                <a href="javascript:void(0);" className="text-muted d-inline-block">
                                                    <i className="ri-phone-line fs-16"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                <a href="javascript:void(0);" className="text-muted d-inline-block">
                                                    <i className="ri-question-answer-line fs-16"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0);"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                            </li>
                                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                            </li>
                                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                    <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="noresult" style={{ display: "none" }}>
                            <div className="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}></lord-icon>
                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                <p className="text-muted mb-0">We have searched more than 150+ leads We did not find any leads for you search.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <div className="pagination-wrap hstack gap-2">
                            <a className="page-item pagination-prev disabled" href="#">
                                Previous
                            </a>
                            <ul className="pagination listjs-pagination mb-0"></ul>
                            <a className="page-item pagination-next" href="#">
                                Next
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;