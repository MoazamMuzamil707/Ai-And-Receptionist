const Input = ({ 
    name = "", 
    col = 12,
    type = "text", 
    label = "", 
    required = false, 
    className = "", 
    value, 
    onChange,
    disabled,
    maxLength,
    accept,
    pattern,
    err,
    errMsg,
    placeHolder
}) => {
    
    const handleChange = (e) => {
        if (type === 'file') {
            onChange(name, e.target.files[0]);
            console.log("e.target.files",e.target.files[0])
        } else {
            onChange(name, e.target.value);
        }
    };

    return (
        <div className={`col-md-${col} mb-3`}>
            <label htmlFor={name} className="form-label">
                {label}
                {required && <span className="text-danger">*</span>}
            </label>
            <input
                type={type}
                className={`form-control ${className}`}
                name={name}
                id={name}
                value={value}
                autoComplete="no"
                placeholder={type === "file" ? "" : placeHolder}
                onChange={handleChange}
                maxLength={maxLength}
                required={required}
                disabled={disabled}
                accept={type === 'file' ? accept : undefined}
                // pattern={pattern}
            />
            
            {err && (<div className="error-message">{errMsg}</div>)}
        </div>
    );
};

export default Input;
