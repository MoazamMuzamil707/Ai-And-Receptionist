import React, { useEffect, useState } from 'react';
import Input from '@/components/common/Input';
import { Button, Col, Row } from 'reactstrap';
import CheckBox from '@/components/common/Checkbox';
import Link from 'next/link';
import Switch from '@/components/common/Switch';
import Dropzone from '@/components/common/Dropzone';
import Select2 from '@/components/common/Select2';
import Flatpicker from '@/components/common/Flatpickr';
import RangeFlatpicker from '@/components/common/RangeFlatpicker';
import Textarea from '@/components/common/Textarea';
import { post, put } from '@/api';
import Loader from '../common/Loader';
import TextEditor from '../common/TextEidtor';

const DiagramForm = ({ show, toggle, onSubmit, formConfig, buttonText, formType, endpoint, selectedData, mode, setModal, setSuccessModal, nodesKeys, nodeKey }) => {
    const [formData, setFormData] = useState({});
    const [selectedId, setSelectedId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [valuesFields, setValuesFields] = useState([]);

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const apiCall = async () => {
        if (mode == 'add') {
            let res = await post(endpoint, formData);
            if (res.responseCode == 201) {
                setModal(false)
                setSuccessModal(true)
            }
        } else {

            let data = { ...formData }
            delete data.id;
            let res = await put(endpoint, { id: selectedId, data });
            if (res.responseCode == 200) {
                setModal(false)
                setSuccessModal(true)
            }
        }
    }
    useEffect(() => {
        if (!formConfig) {
            setFormData([]);
        }
    }, [formConfig]);

    useEffect(() => {
        setSelectedId(selectedData?.id)
        setFormData(selectedData);
    }, [selectedData]);

    const handleInputChange = (name, value) => {
        if (name === "values") {
            const newValues = value
                .split(',')
                .filter(v => v.trim() !== '') // Remove empty values
                .map(v => v.trim());
            setValuesFields(newValues)
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleSelectChange = (name, selectedOption) => {
        setFormData({
            ...formData,
            [name]: selectedOption?.value,
        });
        if (name === "nodeType") {
            setType(selectedOption?.value)
        }
    };

    const handleSwitchChange = (name, isChecked) => {
        setFormData({
            ...formData,
            [name]: isChecked,
        });
    };

    function extractNextSteps(obj) {
        let nextStep = {};

        for (let key in obj) {
            if (key.startsWith("nextStep")) {
                let newKey = key.replace("nextStep", "").toLowerCase();
                nextStep[newKey] = obj[key];
                delete obj[key];
            }
        }

        return { ...obj, nextStep };
    }
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const updatedFormData = {
            ...formData,
            from: nodeKey,
            to: formData.nameNode,
        };
        // formData.append('to', formData.v);
        const formatData = extractNextSteps(updatedFormData)
        onSubmit(formatData);
        toggle()
        // apiCall();
        setLoading(false);
    };

    return (
        <div style={{ display: show ? 'block' : 'none', opacity: 1 }}>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={12}>
                        <Row>
                            {formConfig?.length > 0 && formConfig.map((data, index) => (
                                (data?.field == "text" || data?.field == "password" || data?.field == "number") ? (
                                    <Input
                                        key={index}
                                        name={data.name}
                                        placeHolder={data.placeHolder}
                                        col={formConfig.length > 6 ? 6 : data.col}
                                        type={data?.type || data.field}
                                        label={`${data.label}:`}
                                        required={formType == "filters" ? false : data.required}
                                        value={formData && formData[data?.name] || ''}
                                        disabled={mode == 'view' ? true : false}
                                        onChange={handleInputChange}
                                    />
                                ) : (data?.field == "nextStep") ? (
                                    <Row>
                                        {Object.entries(data.value).map(([key, value], idx) => (
                                            <Col key={idx} xs={12} md={6} lg={data?.col} className="mb-3">
                                                <div style={{ display: 'ruby-text', alignItems: 'center' }}>
                                                    <span style={{ fontWeight: 'bold', marginRight: '2px' }}>{key} :</span>
                                                    <Input
                                                        name={`${data.name}_${key}`}
                                                        placeholder={`${data.placeHolder}_${key}`}
                                                        type={data?.type || data.field}
                                                        label={data.label}
                                                        required={formType === "filters" ? false : data.required}
                                                        value={formData && value || ''}
                                                        disabled={mode === 'view'}
                                                        onChange={handleInputChange}
                                                        style={{ flex: 1, padding: '5px', maxWidth: '100%' }}
                                                    />
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                ) : (data?.field == "checkbox") ? (
                                    <CheckBox
                                        required={formType == "filters" ? false : data.required}
                                        key={index}
                                        name={data.name}
                                        disabled={mode == 'view' ? true : false}
                                        label={`${data.label}:`}
                                        onChange={handleInputChange}
                                    />
                                ) : (data?.field == 'link') ? (
                                    <>
                                        <Link className={`text-muted ${data?.className} `} href={data?.url}>
                                            {data?.label}
                                            {data?.required && <span className="text-danger">*</span>}
                                        </Link>
                                    </>
                                ) : (data?.field == 'select2') ? (
                                    <>
                                        <Select2
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}:`}
                                            selectedOption={formData && formData[data.name]}
                                            handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                            col={formConfig.length > 6 ? 6 : data.col}
                                        />
                                    </>
                                ) : (data?.field == 'flatpicker') ? (
                                    <>
                                        <Flatpicker
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            placeHolder={data.placeHolder}
                                            label={`${data.label}:`}
                                            selectedOption={formData[data.name]}
                                            handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                        />
                                    </>
                                ) : (data?.field == 'RangeFlatpicker') ? (
                                    <>
                                        <RangeFlatpicker
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}:`}
                                            placeHolder={data.placeHolder}
                                            selectedOption={formData[data.name]}
                                            handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                        />
                                    </>
                                ) : (data?.field == 'textarea') ? (
                                    <>
                                        <Textarea
                                            required={formType === "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}:`}
                                            placeHolder={data.placeHolder}
                                            value={formData[data.name]}
                                            onChange={handleInputChange}
                                            disabled={mode === 'view'}
                                            data={data}
                                        />
                                    </>
                                )() : (data?.field == 'texteditor') ? (
                                    <>
                                        <TextEditor
                                            editorvalue={formData[data.name]}
                                            required={formType === "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}:`}
                                            placeHolder={data.placeHolder}
                                            onChange={handleInputChange}
                                            disabled={mode === 'view'}
                                            data={data}
                                        />
                                    </>
                                )() : (data?.field == 'dropzone') ? (
                                    <>
                                        <Dropzone
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}:`}
                                            placeHolder={data.placeHolder}
                                            selectedOption={formData[data.name]}
                                            onChange={handleInputChange}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                        />
                                    </>
                                ) : data.field === 'switch' ? (
                                    <Switch
                                        required={formType == "filters" ? false : data.required}
                                        id={data.id}
                                        label={`${data.label}:`}
                                        disabled={mode == 'view' ? true : false}
                                        defaultChecked={formData[data.name] || false}
                                        onChange={(isChecked) => handleSwitchChange(data.name, isChecked)}
                                    />
                                ) : (<></>)
                            ))}
                        </Row>
                    </Col>
                </Row>
                {(type === 'message' || type === 'image' || type === 'document') && (
                    <Row className="mb-3">
                        {/* <p>message</p> */}
                        {(type === 'image' || type === 'document') && (
                            <Select2
                                required={formType !== "filters"}
                                name={"type"}
                                label={`Type:`}
                                handleSelectChange={(selectedOption) => handleSelectChange("type", selectedOption)}
                                disabled={mode === 'view'}
                                data={{
                                    static: true,
                                    data: [
                                        { label: "Message", value: "message" },
                                        { label: "Image", value: "image" },
                                        { label: "Document", value: "document" }
                                    ]
                                }}
                                col={12}
                            />
                        )}
                        <TextEditor
                            editorvalue={""}
                            required={formType === "filters" ? false : true}
                            name={"message"}
                            label={`Message:`}
                            placeHolder={"message"}
                            onChange={handleInputChange}
                            disabled={mode === 'view'}
                        // data={data}
                        />
                        <Select2
                            required={formType !== "filters"}
                            name={"type"}
                            label={`Type:`}
                            handleSelectChange={(selectedOption) => handleSelectChange("type", selectedOption)}
                            disabled={mode === 'view'}
                            data={{
                                static: true,
                                data: [
                                    { label: "Message", value: "message" },
                                    { label: "Image", value: "image" },
                                    { label: "Document", value: "document" }
                                ]
                            }}
                            col={6}
                        />

                        <Switch
                            // required={formType !== "filters"}
                            id={"condition-switch"}
                            name={"condition"}
                            label={`Condition:`}
                            disabled={mode === 'view'}
                            defaultChecked={false}
                            onChange={(isChecked) => handleSwitchChange("condition", isChecked)}
                            col={6}
                        />

                        <Input
                            name={"values"}
                            placeHolder={"values"}
                            col={12}
                            label={`Value`}
                            required={formType === "filters" ? false : true}
                            value={formData.values || ''}
                            disabled={mode === 'view'}
                            onChange={handleInputChange}
                        />

                        {valuesFields.length > 0 && valuesFields.map((label) => (
                            <Select2
                                required={formType !== "filters"}
                                name={`nextStep${label}`}
                                label={`${label}:`}
                                handleSelectChange={(selectedOption) => handleSelectChange(`nextStep${label}`, selectedOption)}
                                disabled={mode === 'view'}
                                data={{
                                    static: true,
                                    data: nodesKeys
                                }}
                                col={3}
                            />
                        ))}

                    </Row>
                )}
                <div className="mt-4">
                    {mode != "view" &&
                        <div className='w-100 d-flex justify-content-end'>
                            <Button color="primary" disabled={loading ? true : false} className={6} type="submit">
                                {loading ? <Loader /> : (buttonText || "Create Node")}
                            </Button>
                        </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default DiagramForm;
