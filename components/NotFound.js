// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">404 - Page Not Found</h1>
        <p className="text-center">
          The page you are looking for doesn't exist or has been moved.
        </p>
        {/* You can add additional content or links here */}
      </div>
    </div>
  );
};

export default NotFound;
