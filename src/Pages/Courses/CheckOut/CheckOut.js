import React from 'react';

const CheckOut = ({premium}) => {
    console.log(premium);
    const {courseTitle} = premium
    return (
        <div>
            <h2>{courseTitle}</h2>
        </div>
    );
};

export default CheckOut;