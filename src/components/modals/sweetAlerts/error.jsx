import Link from "next/link";

const { Modal, ModalBody, Row, Col, Card, CardBody } = require("reactstrap");

const ErrorModal = ({ isOpen, tog_errorMessage,errorResponseMsg }) => {
  return (
    <>
      <Modal id="success-Payment" tabIndex="-1" isOpen={isOpen} toggle={() => { tog_errorMessage(); }} centered>
        <ModalBody className='text-center'>
          <div className="text-end">
            <button type="button" onClick={() => { tog_errorMessage(); }} className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <Row className="justify-content-center">
            <Col md={12} lg={12} xl={12}>
              <Card className="mt-4">
                <CardBody className="p-4 text-center">
                  <div className="avatar-lg mx-auto ">
                    <div className="avatar-title bg-light text-danger display-3 rounded-circle">
                    <i class="ri-close-circle-line"></i>
                    </div>
                  </div>
                  <div className=" pt-2">
                    <h4>Error</h4>
                    <p className="text-muted mx-4">{errorResponseMsg}</p>
                    <div className="mt-4">
                      <button onClick={() => { tog_errorMessage(); }} type="button" className="btn btn-secondary w-100">Ok</button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ModalBody>

      </Modal>
    </>
  )
}

export default ErrorModal;