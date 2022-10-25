import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Course = ({course}) => {
    console.log(course);
    const {picture,courseTitle } = course
    return (
        <div className='col-lg-4 col-md-12 col-sm-12'>
         <Card >
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{courseTitle}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/courses/${course.id}`}><Button variant="primary">Go somewhere</Button></Link>
        
      </Card.Body>
    </Card>     
    </div>
    );
};

export default Course;