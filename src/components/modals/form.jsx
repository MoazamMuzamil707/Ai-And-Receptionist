const { Modal, ModalHeader, ModalBody, ModalFooter } = require("reactstrap")
import { useState } from "react";
import CollectionFormBuilder from "../formbuilder/DynamicCollection";
import FormBuilder from "../formbuilder";

const FormModal = ({
    formData,
    onFormSubmit,
    toggle,
    show,
    pageTitle,
    mode,
    size,
    endpoint,
    selectedData,
    multistep = false,
    setModal,
    setSuccessModal,
    successModal,
    setLoader,
    formType
}) => {

    return (
        <>
            <Modal fade={true} id="showModal" isOpen={show} toggle={toggle} centered size={size}>
                <ModalHeader className="bg-light p-3" toggle={toggle}>
                    {mode == 'view' ? `${pageTitle}` : mode == 'edit' ? `Edit ${pageTitle}` : `Add ${pageTitle}`}
                </ModalHeader>
                <ModalBody>
                    {formType === "CollectionFormBuilder" ? 
                    <CollectionFormBuilder
                        endpoint={endpoint}
                        setSuccessModal={setSuccessModal}
                        successModal={successModal}
                        selectedData={selectedData}
                        formConfig={formData}
                        onSubmit={onFormSubmit}
                        multistep={multistep}
                        mode={mode}
                        setModal={setModal}
                        setLoader={setLoader}
                    /> :
                    <FormBuilder
                        endpoint={endpoint}
                        setSuccessModal={setSuccessModal}
                        successModal={successModal}
                        selectedData={selectedData}
                        formConfig={formData}
                        onSubmit={onFormSubmit}
                        multistep={multistep}
                        mode={mode}
                        setModal={setModal}
                        setLoader={setLoader}
                    /> }
                    {/* <CollectionFormBuilder
                        endpoint={endpoint}
                        setSuccessModal={setSuccessModal}
                        successModal={successModal}
                        selectedData={selectedData}
                        formConfig={formData}
                        onSubmit={onFormSubmit}
                        multistep={multistep}
                        mode={mode}
                        setModal={setModal}
                        setLoader={setLoader}
                    /> */}

                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default FormModal;