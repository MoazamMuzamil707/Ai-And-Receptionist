import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
// import Select2 from '@/components/common/Select2';
import Input from '@/components/common/Input';
import Loader from '@/components/common/Loader';
// import { fetch_collections } from "@/api/communications"; // Endpoint to fetch collections
import '@public/assets/css/collectionForm.css';
// import { AuthServices } from '@/api/services';
import IncerementInput from '../common/IncerementInput';
import * as Yup from 'yup';

const CollectionForm = ({ buttonText, onSubmit, setModal, setLoader, mode, selectedData }) => {
    const [formData, setFormData] = useState({ CollectionType: '', CollectionName: '', files: [] });
    const [fileFields, setFileFields] = useState([{}]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [fileInputLimit,setFileInputLimit] = useState(5)

    useEffect(() => {
        if (mode.type === 'existing') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                CollectionName: mode.data.Collection_Name
            }));
            setFileInputLimit(5-mode.data.File_Name.length)
        }
    }, [mode]);
    
    const validationSchema = Yup.object().shape({ 
        CollectionName: Yup.string()
            .min(3, 'Collection Name must be at least 3 characters')
            .max(100, 'Collection Name must be at most 100 characters')
            .required('Collection Name is required'),
        files: Yup.array()
            .of(
                Yup.mixed()
                    .test('fileSize', 'File size exceeds 5MB', value => !value || (value && value.size <= 5 * 1024 * 1024))
                    .test('fileType', 'Only PDF files are allowed', value => !value || (value && value.type === 'application/pdf'))
                    .required('File is required')
            )
            .min(1, 'At least one file must be uploaded') 
    });


    const validationSchemafile = Yup.object().shape({ 
        files: Yup.array()
            .of(
                Yup.mixed()
                    .test('fileSize', 'File size exceeds 5MB', value => !value || (value && value.size <= 5 * 1024 * 1024))
                    .test('fileType', 'Only PDF files are allowed', value => !value || (value && value.type === 'application/pdf'))
                    .required('File is required')
            )
            .min(1, 'At least one file must be uploaded')
    });
    

    const handleFileChange = (file, index) => {
        console.log("file===>", file, index)

        if (!file) {
            alert('No file selected.');
            return;
        }

        // Check the file type is PDF
        const isPdf = file.type === 'application/pdf';
        if (!isPdf) {
            alert('Only PDF files are allowed.');
            return;
        }

        // Check the file size limit (50MB)
        const isSizeValid = file.size <= 5 * 1024 * 1024; // 50MB
        if (!isSizeValid) {
            alert('File size exceeds 50MB.');
            return;
        }

        // If valid, update the state with the selected file
        const updatedFiles = [...formData.files];
        updatedFiles[index] = file;
        setFormData({ ...formData, files: updatedFiles });
    };

    const handleSelectChange = (name, selectedOption) => {
        console.log("name, selectedOption", name, selectedOption);
        setFormData({
            ...formData,
            [name]: selectedOption?.value,
        });
    };

    const handleAddFileField = () => {
        if (fileFields.length < fileInputLimit) {
            setFileFields([...fileFields, {}]); // Add a new file input
        } else {
            alert('Only 5 files can be uploaded.');
        }
    };

    const handleInputChange = (name, value) => {
        if (name === 'CollectionName') {
            value = value.replace(/\s+/g, '_');
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRemoveFileField = (index) => {
        const updatedFileFields = fileFields.filter((_, i) => i !== index);
        const updatedFiles = formData.files.filter((_, i) => i !== index);
        setFileFields(updatedFileFields);
        setFormData({ ...formData, files: updatedFiles });
    };
    
    const validateForm = async (updatedFormData) => {
        try {
            console.log("Validation working with formData", updatedFormData);
            if(mode.type == "add" || mode.type == "existing"){
                await validationSchema.validate(updatedFormData, { abortEarly: false });
                setErrors({});
            }else if(mode.type == "edit"){
                await validationSchemafile.validate(updatedFormData, { abortEarly: false });
                setErrors({});
            }
            return true;
        } catch (err) {
            const validationErrors = {};
            if (err.inner && err.inner.length > 0) {
                console.error("Validation error details:", err.inner);
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
            } else {
                console.error("Unexpected validation error:", err);
            }
            setErrors(validationErrors);
            return false;
        }
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        let updatedFormData = {
            ...formData,
            CollectionType: mode.type ? mode.type : mode
        };

        const isValid = await validateForm(updatedFormData);
        if (!isValid) {
            console.log("isValid===isValid",updatedFormData)
            setLoading(false);
            return;
        }

        if (mode === "edit") {
            updatedFormData = {
                ...updatedFormData,
                CollectionName: selectedData
            };
        }
        console.log("updatedFormData",updatedFormData)
        onSubmit(updatedFormData);
        setModal(false)
        setLoader(true);
    };

    console.log("mode", mode)

    return (
        <form method="POST" onSubmit={handleSubmit} enctype="multipart/form-data" >

            {/* <>
                <Row>
                    <Col md={12}>
                        <Select2
                            name="CollectionType"
                            label="Collection Type"
                            selectedOption={formData.CollectionType}
                            handleSelectChange={(selectedOption) => handleSelectChange('CollectionType', selectedOption)}
                            data={{
                                static: true,
                                data: [
                                    { label: 'New', value: 'new' },
                                    { label: 'Existing', value: 'existing' },
                                ]
                            }}
                            required
                        />
                    </Col>
                </Row>
            </> */}
            {mode === 'add' && (
                <>
                    <Row>
                        <Col md={12}>
                            <Input
                                type="text"
                                name="CollectionName"
                                value={formData.CollectionName}
                                label="Collection Name"
                                onChange={handleInputChange}
                                required={true}
                            />
                            {errors.CollectionName && <p className="text-danger">{errors.CollectionName}</p>}
                        </Col>
                        <Col md={12}>
                            <Row>
                                {fileFields.map((_, index) => (
                                    <IncerementInput
                                        key={index}
                                        name={`file${index}`}
                                        label="Upload File"
                                        type="file"
                                        accept=".pdf"
                                        index={index}
                                        required={true}
                                        fileFields={fileFields}
                                        handleAddFileField={handleAddFileField}
                                        handleRemoveFileField={handleRemoveFileField}
                                        onChange={(name, file) => {
                                            console.log("File selected:", name, file);
                                            return handleFileChange(file, index);
                                        }}
                                    />
                                ))}
                                {errors.files && <p className="text-danger">{errors.files}</p>}
                            </Row>
                        </Col>
                    </Row>
                </>
            )}
            {mode.type === 'existing' && (
                <Row>
                    <Col md={12}>
                        <Input
                            type="text"
                            name="CollectionName"
                            value={formData.CollectionName}
                            label="Collection Name"
                            onChange={handleInputChange}
                            required={true}
                            disabled={true}
                        />
                         {errors.CollectionName && <p className="text-danger">{errors.CollectionName}</p>}
                    </Col>

                    <Col md={12}>
                        <Row>
                            {mode.data.File_Name.length < 5 && fileFields.map((_, index) => (
                                <IncerementInput
                                    key={index}
                                    name={`file${index}`}
                                    label="Upload File"
                                    type="file"
                                    accept=".pdf"
                                    index={index}
                                    required={true}
                                    fileFields={fileFields}
                                    fileInputLimit={fileInputLimit}
                                    handleAddFileField={handleAddFileField}
                                    handleRemoveFileField={handleRemoveFileField}
                                    onChange={(name, file) => {
                                        console.log("File selected:", name, file);
                                        return handleFileChange(file, index);
                                    }}
                                />
                            ))}
                            {errors.files && <p className="text-danger">{errors.files}</p>}
                            {mode.data.File_Name.length === 5 && <p className="text-danger">Five files have already been uploaded</p>}
                        </Row>
                    </Col>
                </Row>
            )}
            {mode === 'edit' && (
                <Row>
                    <Col md={12}>
                        <Row>
                            <Input
                                name={`file`}
                                label="Upload File"
                                type="file"
                                accept=".pdf"
                                required={true}
                                fileFields={fileFields}
                                handleAddFileField={handleAddFileField}
                                handleRemoveFileField={handleRemoveFileField}
                                onChange={(name, file) => {
                                    return handleFileChange(file, 0);
                                }}
                            />
                             {errors.files && <p className="text-danger">{errors.files}</p>}
                        </Row>
                    </Col>
                </Row>
            )}


            <div className='w-100 d-flex justify-content-end mt-3'>
                <Button color="primary" type="submit" disabled={loading}>
                    {loading ? <Loader /> : (buttonText || "Submit")}
                </Button>
            </div>
        </form>
    );
};

export default CollectionForm;
