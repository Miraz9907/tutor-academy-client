import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Container>
        <h2>Your desire courses is here.</h2>
        <Row className="mx-5">
          <Col lg="4" className="mt-3">
            {courses.map((course) => (
              <p key={course.id} course={course} className="course-title">
                {" "}
                <Link
                  to={`/course/${course.id}`}
                  className="text-decoration-none text-dark "
                >
                  {" "}
                  {course.courseTitle}
                </Link>{" "}
              </p>
            ))}
          </Col>

          <Col lg="8">
            <h2 className="mb-2 text-dark text-center">
              Wants to become a{" "}
              <span className="text-danger">Web developer.</span>{" "}
              Let's check out our cources
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
