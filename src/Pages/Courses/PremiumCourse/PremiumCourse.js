import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const PremiumCourse = () => {
    const premiumCourse = useLoaderData();
    console.log(premiumCourse);
    const {picture,courseTitle,price,rating,title,view, enroll} = premiumCourse;
    return (
        <div>

            <Container>
            <Row className="d-flex flex-lg-row flex-column-reverse ">
            
              <Col lg="8">
                <Card>
                  <Card.Img variant="top" src={picture} />
                  <Card.Body>
                    <Card.Title className="fw-bolder">{courseTitle}</Card.Title>
                    <Card.Title className="">{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <small>Price: {price}</small>
                        <p><FaStar className='text-warning'></FaStar> {rating}</p>
                        <p>View:{view}</p>
                        <p>Enrollment:{enroll}</p>
                    </div>
                  </Card.Body>
                  <Button>Purchase the Course</Button>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                    <Card.Title>Selecte Your Payment method</Card.Title>
                    <div>
                        <Button>Bkash</Button>
                        <Button>Card</Button>
                        <Button>Bank</Button>
                    </div>
                </Card>
              </Col>
              </Row>
            </Container>
        </div>
    );
};

export default PremiumCourse;