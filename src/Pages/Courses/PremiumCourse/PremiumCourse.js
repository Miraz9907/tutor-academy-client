import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';

const PremiumCourse = () => {
    const premiumCourse = useLoaderData();
    console.log(premiumCourse);
    const {picture,courseTitle,price} = premiumCourse;
    return (
        <div>
            <h2>premium {premiumCourse.title}</h2>
            <h2>premium {premiumCourse.courseTitle}</h2>
            
            
        </div>
    );
};

export default PremiumCourse;