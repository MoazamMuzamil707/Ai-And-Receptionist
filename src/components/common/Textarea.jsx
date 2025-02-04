const textarea = ({ 
    name = "", 
    col = 12,
    cols=6,
    label = "", 
    required = false, 
    className="", 
    value, 
    onChange, 
    disabled
}) => {
    return (
        <div className={`col-md-${col} mb-3`}>
            <label htmlFor={name} className="form-label">
                {label}
                {required && <span className="text-danger">*</span>}
            </label>
            <textarea
                className={`form-control ${className}`}
                name={name}
                id={name}
                autoComplete="no"
                cols={cols}
                placeholder={`Enter ${label}`}
                onChange={(e) => onChange(name, e.target.value)}
                required={required}
                disabled={disabled}
            >{value}</textarea>
        </div>
    );
}
export default textarea;