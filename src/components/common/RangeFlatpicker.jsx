import React from "react";
import { Label } from "reactstrap";
import Flatpickr from "react-flatpickr";

const RangeFlatpicker = ({ name, label, selectedOption, handleSelectChange, data, required, placeholder }) => {
    return (
        <>
            <div className="my-2">
                <Label className="form-check-label mb-2" htmlFor={`RangeFlatpickr-2-${name}`}>
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
                <Flatpickr
                    className="form-control"
                    value={selectedOption}   
                    placeholder={placeholder}
                    options={{
                        mode: "range",
                        dateFormat: "Y-m-d"
                      }}
                    onChange={handleSelectChange}
                    id={`RangeFlatpickr-2-${name}`}
                ></Flatpickr>
            </div>
        </>
    );
};

export default RangeFlatpicker;