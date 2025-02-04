// CheckBox.jsx
import React from "react";
import { Input, Label } from "reactstrap";

const CheckBox = ({ name, label, onChange, required, disabled }) => {
    const handleCheckboxChange = (event) => {
        onChange(name, event.target.checked);
    };

    return (
        <>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    type="checkbox"
                    name={name}
                    id={`auth-${name}-check`}
                    onChange={handleCheckboxChange}
                    disabled={disabled}
                />
                <Label className="form-check-label" htmlFor={`auth-${name}-check`}>
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
            </div>
        </>
    );
};

export default CheckBox;
