import React from "react";
import Dropzone from "react-dropzone";

const FileDropzone = ({ onDrop }) => {
    const handleAcceptedFiles = (acceptedFiles) => {
        // Handle accepted files here
        console.log("Accepted files:", acceptedFiles);
        onDrop(acceptedFiles); // Pass accepted files to parent component
    };

    return (
        <Dropzone onDrop={handleAcceptedFiles}>
            {({ getRootProps, getInputProps }) => (
                <div className="dropzone dz-clickable" {...getRootProps()}>
                    <div className="dz-message needsclick">
                        <div className="mb-3">
                            <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                        </div>
                        <h4>Drop files here or click to upload.</h4>
                    </div>
                </div>
            )}
        </Dropzone>
    );
};

export default FileDropzone;
