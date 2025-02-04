import React, { useEffect, useState } from 'react';
import Input from '@/components/common/Input';
import CheckBox from '@/components/common/Checkbox';
import Link from 'next/link';
import Switch from '@/components/common/Switch';
import Dropzone from '@/components/common/Dropzone';
import Select2 from '@/components/common/Select2';
import Flatpicker from '@/components/common/Flatpickr';
import RangeFlatpicker from '@/components/common/RangeFlatpicker';
import Textarea from '@/components/common/Textarea';
import { post, put } from '@/api';
import { Col, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const MultiStepForm = ({ name, formConfig, onSubmit, buttonText, formType }) => {
    const [passedSteps, setPassedSteps] = useState([1]);
    const [activeTab, setActiveTab] = useState(1);
    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 4) {
                setActiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
    }
    const formSupport = (formConfig) => (
        <Row>
            <Col lg={12}>
                {formConfig.map((data, index) => (
                    (data?.field == "text" || data?.field == "password") ? (
                        <Input
                            key={index}
                            name={data.name}
                            placeHolder={data.placeHolder}
                            col={data.col}
                            type={data.type}
                            label={data.label}
                            required={formType == "filters" ? false : data.required}
                            value={formData[data.name] || ''}
                            onChange={handleInputChange}
                        />
                    ) : (data?.field == "checkbox") ? (
                        <CheckBox
                            required={formType == "filters" ? false : data.required}
                            key={index}
                            name={data.name}
                            label={data.label}
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
                                label={data.label}
                                selectedOption={formData[data.name]}
                                handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                data={data}
                            />
                        </>
                    ) : (data?.field == 'flatpicker') ? (
                        <>
                            <Flatpicker
                                required={formType == "filters" ? false : data?.required}
                                key={index}
                                name={data.name}
                                placeHolder={data.placeHolder}
                                label={data.label}
                                selectedOption={formData[data.name]}
                                handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                data={data}
                            />
                        </>
                    ) : (data?.field == 'RangeFlatpicker') ? (
                        <>
                            <RangeFlatpicker
                                required={formType == "filters" ? false : data?.required}
                                key={index}
                                name={data.name}
                                label={data.label}
                                placeHolder={data.placeHolder}
                                selectedOption={formData[data.name]}
                                handleSelectChange={(selectedOption) => handleSelectChange(data.name, selectedOption)}
                                data={data}
                            />
                        </>
                    ) : (data?.field == 'textarea') ? (
                        <>
                            <Textarea
                                required={formType == "filters" ? false : data?.required}
                                key={index}
                                name={data.name}
                                label={data.label}
                                placeHolder={data.placeHolder}
                                selectedOption={formData[data.name]}
                                onChange={handleInputChange}
                                data={data}
                            />
                        </>
                    ) : data.field === 'switch' ? (
                        <Switch
                            required={formType == "filters" ? false : data.required}
                            id={data.id}
                            label={data.label}
                            defaultChecked={formData[data.name] || false}
                            onChange={(isChecked) => handleSwitchChange(data.name, isChecked)}
                        />
                    ) : (<></>)
                ))}
            </Col>
        </Row>
    )
    return (
        <>
            <div className="step-arrow-nav">
                <Nav
                    className="nav-pills nav-justified custom-nav"
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({ active: activeTab === 1, done: (activeTab <= 4 && activeTab >= 0) }, "p-3")}
                            onClick={() => {
                                toggleTab(1);
                            }}
                        >
                            Personal Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({ active: activeTab === 2, done: activeTab <= 4 && activeTab > 1 }, "p-3")}
                            onClick={() => {
                                toggleTab(2);
                            }}
                        >
                            Bank Details
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({ active: activeTab === 3, done: activeTab <= 4 && activeTab > 2 }, "p-3")}
                            onClick={() => {
                                toggleTab(3);
                            }}
                        >
                            Document Verification
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({ active: activeTab === 4, done: activeTab <= 4 && activeTab > 3 }, "p-3")}
                            onClick={() => {
                                toggleTab(4);
                            }}
                        >
                            Verified
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId={1}>
                    <Row className="g-3">
                        <Col lg={6}>
                            <div>
                                <Label for="firstName" className="form-label">
                                    First Name
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter your firstname"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Label for="lastName" className="form-label">
                                    Last Name
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter your lastname"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Label for="phoneNumber" className="form-label">
                                    Phone
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </Col>
                       
                        <Col lg={12}>
                            <div className="d-flex align-items-start gap-3 mt-3">
                                <button
                                    onClick={() => {
                                        toggleTab(activeTab + 1);
                                    }}
                                    type="button"
                                    className="btn btn-secondary btn-label right ms-auto nexttab"
                                >
                                    <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>{" "}
                                    Next Step
                                </button>
                            </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId={2}>
                    <Row>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label for="banknameInput" className="form-label">
                                    Bank Name
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="banknameInput"
                                    placeholder="Enter your bank name"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label for="branchInput" className="form-label">
                                    Branch
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="branchInput"
                                    placeholder="Branch"
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label for="accountnameInput" className="form-label">
                                    Account Holder Name
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="accountnameInput"
                                    placeholder="Enter account holder name"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label for="accountnumberInput" className="form-label">
                                    Account Number
                                </Label>
                                <Input
                                    type="number"
                                    className="form-control"
                                    id="accountnumberInput"
                                    placeholder="Enter account number"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label for="ifscInput" className="form-label">
                                    IFSC
                                </Label>
                                <Input
                                    type="number"
                                    className="form-control"
                                    id="ifscInput"
                                    placeholder="IFSC"
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="hstack align-items-start gap-3 mt-4">
                                <button
                                    onClick={() => {
                                        toggleTab(activeTab - 1);
                                    }}
                                    type="button"
                                    className="btn btn-light btn-label previestab"
                                    data-previous="pills-bill-info-tab"
                                >
                                    <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                    Back to Personal Info
                                </button>
                                <button
                                    onClick={() => {
                                        toggleTab(activeTab + 1);
                                    }}
                                    type="button"
                                    className="btn btn-secondary btn-label right ms-auto nexttab"
                                    data-nexttab="pills-payment-tab"
                                >
                                    <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                    Next Step
                                </button>
                            </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId={3}>
                    <h5 className="mb-3">Choose Document Type</h5>

                    <div className="d-flex gap-2">
                        <div>
                            <Input
                                type="radio"
                                className="btn-check"
                                id="passport"
                                defaultChecked
                                name="choose-document"
                            />
                            <Label className="btn btn-outline-primary" for="passport">
                                Passport
                            </Label>
                        </div>
                        <div>
                            <Input
                                type="radio"
                                className="btn-check"
                                id="aadhar-card"
                                name="choose-document"
                            />
                            <Label className="btn btn-outline-primary" for="aadhar-card">
                                Aadhar Card
                            </Label>
                        </div>
                        <div>
                            <Input
                                type="radio"
                                className="btn-check"
                                id="pan-card"
                                name="choose-document"
                            />
                            <Label className="btn btn-outline-primary" for="pan-card">
                                Pan Card
                            </Label>
                        </div>
                        <div>
                            <Input
                                type="radio"
                                className="btn-check"
                                id="other"
                                name="choose-document"
                            />
                            <Label className="btn btn-outline-primary" for="other">
                                Other
                            </Label>
                        </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 mt-4">
                        <button
                            onClick={() => {
                                toggleTab(activeTab - 1);
                            }}
                            type="button"
                            className="btn btn-light btn-label previestab"
                            data-previous="pills-bill-address-tab"
                        >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Bank Details
                        </button>
                        <button
                            onClick={() => {
                                toggleTab(activeTab + 1);
                            }}
                            type="button"
                            className="btn btn-secondary btn-label right ms-auto nexttab"
                            data-nexttab="pills-finish-tab"
                        >
                            <i className="ri-save-line label-icon align-middle fs-16 ms-2"></i>
                            Submit
                        </button>
                    </div>
                </TabPane>

                <TabPane tabId={4}>
                    <Row className="text-center justify-content-center">
                        <Col lg={12}>
                            <div className="mb-4">
                                <lord-icon
                                    src="https://cdn.lordicon.com/lupuorrc.json"
                                    trigger="loop"
                                    colors="primary:#687cfe,secondary:#ff7f5d"
                                    style={{ width: "120px", height: "120px" }}
                                ></lord-icon>
                            </div>
                            <h5>Verification Completed</h5>
                            <p className="text-muted mb-4">
                                To stay verified, dont remove the meta tag form your
                                sites home page. To avoid losing verification, you may
                                want to add multiple methods form the{" "}
                                <span className="fw-medium">Crypto KYC Application.</span>
                            </p>

                            <div className="hstack justify-content-center gap-2">
                                <button
                                    // onClick={toggleKycVerification}
                                    onClick={() => console.log("toggleKycVerification")}
                                    type="button"
                                    className="btn btn-ghost-success"
                                    data-bs-dismiss="modal"
                                >
                                    Done{" "}
                                    <i className="ri-thumb-up-fill align-bottom me-1"></i>
                                </button>
                                <button
                                    onClick={() => {
                                        toggleTab(activeTab + 1);
                                    }}
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    <i className="ri-home-4-line align-bottom ms-1"></i>{" "}
                                    Back to Home
                                </button>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </>
    )
}
export default MultiStepForm