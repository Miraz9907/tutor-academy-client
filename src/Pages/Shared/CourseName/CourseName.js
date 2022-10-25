import React, { useEffect, useState } from 'react';

const CourseName = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h2>All category{courses.length}</h2>
        </div>
    );
};

export default CourseName;