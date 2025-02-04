import React, { useState, useEffect } from 'react';
import { Input, Label } from 'reactstrap';

const Switch = ({ id, label, defaultChecked, name, onChange, required = false, disabled = false, col = 12 }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const handleSwitchChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
        onChange && onChange(checked); 
    };

    return (
        <>
            <div className={`form-check form-switch form-switch-lg mb-3 col-md-${col} justify-content-center` }dir="ltr">
                <Label className="form-check-label" htmlFor={id}>
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
                <Input
                    type="checkbox"
                    name={name}
                    className="form-check-input"
                    id={id}
                    checked={isChecked} 
                    onChange={handleSwitchChange}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </>
    );
};

export default Switch;
