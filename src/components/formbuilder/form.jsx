import React, { useEffect, useState } from 'react'
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
import Loader from '../common/Loader';
import TextEditor from '../common/TextEidtor';
import MediaHeader from '../common/SelectMultiOption';
import ViewText from '../common/ViewText';
import EmptyView from '../common/EmptyView';
import SelectMultiOption from '../common/SelectMultiOption';
import SignUp from '@/app/SignUp/page';

function Form({ data, onSubmit, loading, buttonText, apiCall, mode, formType, formConfiguration,SignUpButton,SignUpButtonShow }) {

    const [formData, setFormData] = useState({});


    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (name, selectedOption) => {
        setFormData({
            ...formData,
            [name]: selectedOption?.value,
        });
    };

    const handleSwitchChange = (name, isChecked) => {
        setFormData({
            ...formData,
            [name]: isChecked,
        });
    };
    
    const handleSubmit = (e)=>{
        onSubmit(e,formData)
    }

    const handleSignUp = (e)=>{
        SignUpButton()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={12}>
                        <Row>
                            {formConfiguration.map((data, index) => (
                                (data?.field == "text" || data?.field == "password" || data?.field == "number" || data?.field == "email") ? (
                                    <>
                                        <Input
                                            key={index}
                                            name={data.name}
                                            placeHolder={data.placeHolder}
                                            col={formConfiguration.length > 6 ? 6 : data.col}
                                            type={data?.type || data.field}
                                            label={`${data.label}`}
                                            // required={formType == "filters" ? false : data.required}
                                            value={formData && formData[data?.name] || ''}
                                            disabled={mode == 'view' ? true : false}
                                            onChange={handleInputChange}
                                            pattern={data.pattern}
                                            err={data.err}
                                            errMsg={data.errMsg}
                                        />
                                    </>
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
                                        label={`${data.label}`}
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
                                            label={`${data.label}`}
                                            selectedOption={formData && formData[data.name]}
                                            handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                            col={formConfiguration.length > 6 ? 6 : data.col}
                                        />
                                    </>
                                ) : (data?.field == 'SelectMultiOption') ? (
                                    <>
                                        <SelectMultiOption
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}`}
                                            selectedOption={formData && formData[data.name]}
                                            handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                            disabled={mode == 'view' ? true : false}
                                            data={data}
                                            formData={formData && formData[data.name]}
                                            col={formConfiguration.length > 6 ? 6 : data.col}
                                        />
                                    </>
                                ) : (data?.field == 'viewtext') ? (
                                    <>
                                        <ViewText
                                            key={index}
                                            text={data?.text}
                                            col={formConfiguration.length > 6 ? 6 : data.col}
                                            data={formData && formData[data.name]}
                                        />
                                    </>
                                ) : (data?.field == 'emptyview') ? (
                                    <>
                                        <EmptyView
                                            key={index}
                                            col={formConfiguration.length > 6 ? 6 : data.col}
                                        />
                                    </>
                                ) : (data?.field == 'flatpicker') ? (
                                    <>
                                        <Flatpicker
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            placeHolder={data.placeHolder}
                                            label={`${data.label}`}
                                            selectedOption={formData && formData[data.name]}
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
                                            label={`${data.label}`}
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
                                            label={`${data.label}`}
                                            placeHolder={data.placeHolder}
                                            value={formData[data.name]}
                                            onChange={handleInputChange}
                                            disabled={mode === 'view'}
                                            data={data}
                                            col={data.col}
                                        />
                                    </>
                                ) : (data?.field == 'texteditor') ? (
                                    () => {

                                        return (
                                            <>
                                                <TextEditor
                                                    editorvalue={formData[data.name]}
                                                    required={formType === "filters" ? false : data?.required}
                                                    key={index}
                                                    name={data.name}
                                                    label={`${data.label}`}
                                                    placeHolder={data.placeHolder}
                                                    onChange={handleInputChange}
                                                    disabled={mode === 'view'}
                                                    data={data}
                                                />
                                            </>
                                        );
                                    }
                                )() : (data?.field == 'dropzone') ? (
                                    <>
                                        <Dropzone
                                            required={formType == "filters" ? false : data?.required}
                                            key={index}
                                            name={data.name}
                                            label={`${data.label}`}
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
                                        label={`${data.label}`}
                                        disabled={mode == 'view' ? true : false}
                                        defaultChecked={formData[data.name] || false}
                                        onChange={(isChecked) => handleSwitchChange(data.name, isChecked)}
                                    />
                                ) : (<></>)
                            ))}
                        </Row>
                    </Col>
                </Row>
                {formType == "filters" ?
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2" style={{ position: 'absolute', bottom: 2, left: 0, width: '100%' }}>
                        <button
                            type='button'
                            className="btn btn-light w-100"
                            onClick={() => setFormData({})}
                        >
                            Clear Filter
                        </button>
                        <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Filters
                        </button>
                    </div> :
                    <div className="mt-4">
                        {mode != "view" &&
                            <div className='w-100 d-flex justify-content-end'>
                                <Button color="primary" disabled={loading ? true : false} className={formConfiguration.length > 6 ? "w-20" : "w-100"} type="submit">
                                    {loading ? <Loader /> : (buttonText || "Submit")}
                                </Button>

                            </div>
                        }
                        {SignUpButtonShow &&
                            <div className='w-100 mt-2 d-flex justify-content-end'>
                                <Button color="secondary" disabled={loading ? true : false} className={formConfiguration.length > 6 ? "w-20" : "w-100"} type="button" onClick={handleSignUp}>
                                    {loading ? <Loader /> : ("Sign Up")}
                                </Button>

                            </div>
                        }
                    </div>
                }
            </form>
        </>
    )
}

export default Form