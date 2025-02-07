const IncerementInput = ({ 
    name = "", 
    col = 12,
    key="",
    type = "text", 
    label = "", 
    required = false, 
    className = "", 
    value, 
    onChange,
    disabled,
    accept, 
    index, 
    fileFields, 
    handleAddFileField, 
    handleRemoveFileField ,
    fileInputLimit=5
}) => {
    
    const handleChange = (e) => {
        if (type === 'file') {
            onChange(name, e.target.files[0]);
        } else {
            onChange(name, e.target.value);
        }
    };

    return (
        <div className={`col-md-${col} mb-3`}>
            <label htmlFor={name} className="form-label">
                {label+ key}
                {required && <span className="text-danger">*</span>}
            </label>
            <div className="d-flex align-items-center">
                <input
                    type={type}
                    className={`form-control ${className}`}
                    name={name}
                    id={name}
                    autoComplete="no"
                    placeholder={type === "file" ? "" : `Enter ${label + key}`}
                    onChange={handleChange}
                    required={required}
                    disabled={disabled}
                    accept={type === 'file' ? accept : undefined}
                />

                {index === 0 ? (
                    fileFields.length < fileInputLimit && (
                        <button className="file-input-btn ml-2" type="button" onClick={handleAddFileField}>
                            +
                        </button>
                    )
                ) : (
                    <button className="file-input-btn ml-2 del-btn" type="button" onClick={() => handleRemoveFileField(index)}>
                        -
                    </button>
                )}
            </div>
        </div>
    );
};

export default IncerementInput;
