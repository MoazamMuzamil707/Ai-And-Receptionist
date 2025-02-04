import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import Loader from '../common/Loader';

const NoAuthPagesLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time or wait for any required setup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Adjust timeout as needed
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        
        {/* Show loader if loading, else show content */}
        {loading ? (
          <Loader />
        ) : (
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
        )}

        <footer className="footer">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <p className="mb-0">&copy; {new Date().getFullYear()} Ai And Receptionist.</p>
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
