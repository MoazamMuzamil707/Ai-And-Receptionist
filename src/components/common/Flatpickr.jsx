import React from "react";
import { Label } from "reactstrap";
import Flatpickr from "react-flatpickr";

const Flatpicker = ({ name, label, selectedOption, handleSelectChange, data, required, placeholder }) => {
    return (
        <>
            <div className="my-2">
                <Label className="form-check-label mb-2" htmlFor={`Flatpickr-2-${name}`}>
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
                <Flatpickr
                    className="form-control"
                    value={selectedOption}
                    options={{
                        enableTime: true,
                        dateFormat: "Y-m-d H:i",
                    }}
                    placeholder={placeholder}
                    onChange={handleSelectChange}
                    id={`Flatpickr-2-${name}`}
                    // disabled={disabled}
                ></Flatpickr>
            </div>
        </>
    );
};

export default Flatpicker;