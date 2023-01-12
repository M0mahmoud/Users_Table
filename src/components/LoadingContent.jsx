import React from "react";

const LoadingContent = ({ children, loading, error }) => {
  return (
    <div className="px-3">
      {loading ? (
        <div>
          <div className="text-center bg-dark p-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-primary  p-2 w-auto" role="alert">
          {error}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingContent;
