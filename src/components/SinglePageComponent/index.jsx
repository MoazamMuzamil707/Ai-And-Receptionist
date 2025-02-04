import TableContainer from "@/containers/table";
import { Col, Container, Row, Card, CardHeader, CardBody, Input, ModalHeader, ModalBody, Label, ModalFooter, Modal, Form, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormFeedback } from "reactstrap";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useCallback, useEffect, useState } from "react";
import SearchFilter from "@/components/common/SearchFilter";
import DeleteModal from "@/components/modals/delete";
import FormModal from "../modals/form";
import { get } from "@/api";
import SuccessModal from "../modals/sweetAlerts/success";
import Cookies from "js-cookie";
import WithPermission from "../HOC/withPermission";
import formdata from "@/data/formdata";
import { set } from "react-hook-form";
import SimpleTableContainer from "@/containers/table/simpleTable";

const SinglePage = ({ module, pageTitle, formData, onFormSubmit, endpoint, BreadCrumbData, filters = true, multistepForm, Data, tableColumn, tableType,size,addForm = true }) => {

  const [tableData, setTableData] = useState([])
  const [tableColumns, setTableColumns] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);
  const [isInfoDetails, setIsInfoDetails] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedData, setSelectedData] = useState(null);

  //delete lead
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (tableColumn) {
          console.log("Object.keys(tabelData?.data[0])", tableColumn);
          console.log("Object.keys(tabelData?.data[0])", Data);
          setTableColumns(tableColumn);
          setTableData(Data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts or dependencies change

    console.log("selectedData", selectedData);
  }, [modal, deleteModal, pageNo, Data, selectedData]);

  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleDelete = (data) => {
    setSelectedData(data.File_Name[0])
  }

  const Abc = () => (
    <button
      type="button"
      className="btn btn-secondary add-btn"
      id="create-btn"
      onClick={() => {
        setIsEdit(false);
        toggle();
        setMode('add');
        setSelectedData({})
      }}
    >
      <i className="ri-add-line align-bottom me-1"></i> Add
    </button>
  )


  return (
    <>
      <Container fluid>
        <BreadCrumb title={pageTitle} pageTitle={module} />
        <Row>
          <Col lg={12}>
            <Card id="leadsList">
              <CardHeader className="border-0">
                <Row className="g-4 align-items-center">
                  <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2">
                      {isMultiDeleteButton &&
                        <button className="btn btn-soft-danger" onClick={() => setDeleteModalMulti(true)}>
                          <i className="ri-delete-bin-2-line"></i>
                        </button>
                      }
                      {filters == "true"&&
                        <button type="button" className="btn btn-primary" onClick={toggleInfo}>
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Fliters
                        </button>
                      }
                      
                      {addForm == true &&
                        <Abc />
                      }
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody className="pt-0">
                {tableType == "simple" ?
                  <SimpleTableContainer
                    columns={tableColumns}
                    data={tableData}
                    className="custom-header-css"
                    divClass="table-responsive table-card mb-0"
                    tableClass="align-middle table-nowrap"
                    theadClass="table-light"
                    setDeleteModal={setDeleteModal}
                    setMode={setMode}
                    setModal={setModal}
                    pageNo={pageNo}
                    pageSize={pageSize}
                    setPageNo={setPageNo}
                    setTableData={setTableData}
                    setSelectedData={handleDelete}
                  />
                  :
                  <TableContainer
                    columns={tableColumns}
                    data={tableData}
                    className="custom-header-css"
                    divClass="table-responsive table-card mb-0"
                    tableClass="align-middle table-nowrap"
                    theadClass="table-light"
                    setDeleteModal={setDeleteModal}
                    setMode={setMode}
                    setModal={setModal}
                    pageNo={pageNo}
                    pageSize={pageSize}
                    setPageNo={setPageNo}
                    setTableData={setTableData}
                    setSelectedData={handleDelete}
                  />}
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container>
      <DeleteModal
        show={deleteModal}
        setSuccessModal={setSuccessModal}
        onCloseClick={() => setDeleteModal(false)}
        endpoint={endpoint}
        selectedData={selectedData}
        setDeleteModal={setDeleteModal}
      />
      <FormModal
        setSuccessModal={setSuccessModal}
        successModal={successModal}
        endpoint={endpoint}
        selectedData={selectedData}
        show={modal}
        formData={formData}
        onFormSubmit={onFormSubmit}
        pageTitle={pageTitle}
        mode={mode}
        toggle={toggle}
        size={size}
        multistep={multistepForm}
        setModal={setModal}
      />
      <SuccessModal
        isOpen={successModal}
        tog_successMessage={setSuccessModal}
      />
      <SearchFilter
        formData={[...formData].filter(d => d.filtered)}
        show={isInfoDetails}
        setShow={setIsInfoDetails}
        onCloseClick={() => setIsInfoDetails(false)}
        setTableData={setTableData}
        endpoint={endpoint}
        pageSize={pageSize}
        pageNo={pageNo}
        setPageNo={setPageNo}
      />
    </>
  )
}

export default SinglePage;