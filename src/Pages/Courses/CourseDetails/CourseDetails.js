import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    // const couresDetails = useLoaderData();
    // console.log(couresDetails);
   
    // const {id, name, phone, username} = couresDetails;
    // console.log(name);
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
           <h2>All courses:{courseDetails.courseTitle} </h2>
        </div>
    );
};

export default CourseDetails;