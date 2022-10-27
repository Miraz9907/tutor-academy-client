import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
    const premiumCourse = useLoaderData()
    console.log(premiumCourse)
    return (
        <div>
            <h2>premium</h2>
            
        </div>
    );
};

export default PremiumCourse;