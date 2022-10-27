import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="d-flex flex-column h-100 justify-content-center align-items-center ">
        <div>
          <h1 className="text-danger fs-3 fw-semibold">OOPS!</h1>
        </div>
        <div>
          <h1 className="text-danger">404!</h1>
        </div>
        <div>
          <h3 className="text-danger">Page Not Found</h3>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-warning">Back To Home Page</button>
          </Link>
        </div>
      </div>
    );
};

export default NotFound;