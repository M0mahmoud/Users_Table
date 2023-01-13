import React from "react";

const LoadingContent = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center bg-dark p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-primary p-2 w-auto" role="alert">
        {error}
      </div>
    );
  }

  return <div className="px-3">{children}</div>;
};

export default LoadingContent;
