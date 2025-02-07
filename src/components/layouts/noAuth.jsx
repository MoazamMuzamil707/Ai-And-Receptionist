import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';

const NoAuthPagesLayout = ({ children }) => {
  return (
    <>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="overflow-hidden">
                  <Row className="g-0">
                    {children}
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <footer className="footer">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <p className="mb-0">&copy; {new Date().getFullYear()} M3 Technologies Pakistan.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default NoAuthPagesLayout;