import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry! that page does not exist.</p>
    </div>
  );
}
