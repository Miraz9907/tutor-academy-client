import React, { useEffect, useState } from "react";

const CourseName = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://tutor-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>All category{courses.length}</h2>
    </div>
  );
};

export default CourseName;
