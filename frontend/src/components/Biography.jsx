import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            CURA is a comprehensive digital ecosystem designed to streamline hospital management. We provide integrated solutions for patient registration, appointment scheduling, and resource allocation. Our mission is to provide healthcare institutions with the tools they need to maintain organized, secure, and efficient environments for both medical staff and the communities they serve.
          </p>
          <p>We are all in 2026!</p>
          
          <div className="core-services">
            <h4 style={{ marginBottom: '10px' }}>Our Core Services:</h4>
            <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Patient Management:</strong> Digital registration and health records.</li>
            <li><strong>Smart Scheduling:</strong> Easy appointment booking and tracking.</li>
            <li><strong>Departmental Connectivity:</strong> Seamless communication between lab, pharmacy, and doctors.</li>
            <li><strong>Data Security:</strong> Enterprise-grade protection for sensitive medical data.</li>
            <li><strong>24/7 Access:</strong> Secure cloud-based portal for doctors and patients.</li>
            </ul>
          </div>

          <p>CURA is committed to excellence in healthcare technology.</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;