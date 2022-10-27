import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div>
          <h1 className="">OOPS!</h1>
        </div>
        <div>
          <h1 className="">404!</h1>
        </div>
        <div>
          <h3 className="">Page Not Found</h3>
        </div>
        <div>
          <Link to="/">
            <button className="">Back To Home Page</button>
          </Link>
        </div>
      </div>
    );
};

export default NotFound;