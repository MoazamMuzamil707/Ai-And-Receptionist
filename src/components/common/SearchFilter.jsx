import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import FormBuilder from "../formbuilder";
import { get } from "@/api";

const CrmFilter = ({ formData, show, onCloseClick, setTableData, endpoint, pageNo, pageSize, setShow }) => {
  // console.log("formData in filter", formData);
  const onSubmit = async (formData) => {
    let url = `${endpoint}?pageNumber=${pageNo}&pageSize=${pageSize}`;
    const queryString = Object.keys(formData)
      .filter(key => formData[key] !== '' && formData[key] !== null)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');

    // Append the query string to the URL
    if (queryString) {
      url += `&${queryString}`;
    }
    const response = await get(url, {});
    setTableData(response?.data);
    setShow(false)
  }
  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Fliters
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <FormBuilder
            formConfig={[...formData].filter(f => f.filtered)}
            formType={"filters"}
            onSubmit={onSubmit}
          />
        </OffcanvasBody>

      </form>
    </Offcanvas>
  );
};

export default CrmFilter;