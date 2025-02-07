'use client'
import React from 'react';
import { Spinner } from 'react-bootstrap';

function SpinnerContent() {
  return (
    <div className='loading-wrapper'>
        <div className="loading noEvents noSelect">
          <div className="loading-content">
                <Spinner animation="border" role="status" variant="light" className='me-3'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                Please wait...
            </div>
        </div>
      </div>
  
  );
}

export default SpinnerContent;