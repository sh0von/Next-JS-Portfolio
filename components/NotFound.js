import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <h1 className="text-center">404 - Page Not Found</h1>
        <p className="text-center">
          The page you are looking for doesn't exist or has been moved.
        </p>
        {}
      </div>
    </div>
  );
};

export default NotFound;
