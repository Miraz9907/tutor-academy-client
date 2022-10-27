import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Course = ({course}) => {
    const {picture,courseTitle,introduction } = course
    return (
      <div className="col-lg-4 col-md-12 col-sm-12">
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{courseTitle}</Card.Title>
            <Card.Text>{introduction.slice(0, 120) + "..."}</Card.Text>
            <Link to={`/course/${course.id}`}>
              <Button variant="info">
                See Course Details <FaArrowRight></FaArrowRight>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Course;