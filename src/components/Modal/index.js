import React from 'react';
import DiagramForm from '../formbuilder/DiagramNode';
const { Modal, ModalHeader, ModalBody, ModalFooter } = require("reactstrap")

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const InfoModal = ({ show, toggle, onSubmit, mode, size , pageTitle,formData,nodesKeys,nodeKey }) => {
    return (
        <Modal fade={true} id="showModal" isOpen={show} toggle={toggle} centered size={size}>
            <ModalHeader className="bg-light p-3" toggle={toggle}>
                {mode == 'view' ? `${pageTitle}` : mode == 'edit' ? `Edit ${pageTitle}` : `Add ${pageTitle}`}
            </ModalHeader>
            <ModalBody>
                <DiagramForm
                    show={show}
                    toggle={toggle}
                    onSubmit={onSubmit}
                    formConfig={formData}
                    mode={mode}
                    nodesKeys={nodesKeys}
                    nodeKey={nodeKey}
                />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
        </Modal>
    );
};

export default InfoModal;
