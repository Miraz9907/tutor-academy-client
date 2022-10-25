import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);

  return (
    <div>
      <h2>all courses: {courses.length}</h2>
      <Container>
        <h2 className="text-center mb-5">This is Course Page</h2>
        <Row className="mx-5">
          <Col lg="4" className="mt-3">
            {courses.map((course) => (
              <p key={course.id} course={course} className="course-title">
                {" "}
                <Link
                  to={`/courses/${course.id}`}
                  className="text-decoration-none text-dark "
                >
                  {" "}
                  {course.courseTitle}
                </Link>{" "}
              </p>
            ))}
          </Col>

          <Col lg="8">
            <h2 className="text-primary text-center text-2xl mb-3">
              Want to become a <span className="dev">Web developer.</span>{" "}
              <span className="text-warning">Let's check out our cources</span>
            </h2>
            <div className="row g-3">
              {courses.map((course) => (
                <Course key={course.id} course={course}></Course>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
