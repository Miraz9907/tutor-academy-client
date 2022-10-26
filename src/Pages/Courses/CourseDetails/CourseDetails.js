import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
           <h2>All courses:{courseDetails.courseTitle} </h2>
        </div>
    );
};

export default CourseDetails;