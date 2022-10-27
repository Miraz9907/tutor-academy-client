import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {useReactToPrint} from 'react-to-print';

const CourseDetails = () => {
    const componentRef = useRef();
    const courseDetails = useLoaderData();
    const {courseTitle, picture,title,introduction, id, author } = courseDetails
    
    const handleReactToPdf = useReactToPrint({
        content:() =>componentRef.current,
        documentTitle:"Tutor-Academy",
        onAfterPrint:() => alert("you documentation download successfully")

    })
    return (
      <div className=" " ref={componentRef}>
        <div className="mt-5">
          <Container>
            <div className="d-flex justify-content-between">
              <h2 className="my-2">{title}</h2>
              <Button
                variant="light"
                onClick={handleReactToPdf}
                className="me-2 "
              >
                Download
              </Button>
            </div>
            <Row className="d-flex flex-lg-row flex-column-reverse ">
              <Col lg="8">
                <Card>
                  <Card.Img variant="top" src={picture} />
                  <Card.Body>
                    <Card.Title className="fw-bolder">{courseTitle}</Card.Title>
                   
                    <Card.Text>{introduction}</Card.Text>
                  </Card.Body>
                  <Link to={`courses/${id}`} variant="light" className=" text-center ">
                    <Button variant="light" lassName="me-2 my-3 fw-semibold  " >Go to premium</Button>
                  </Link>
                </Card>
              </Col>

              <Col lg="4">
                <Card>
                  <Card.Img variant="top" src={author.img} />
                  <Card.Body>
                    <Card.Title className="fw-bolder">
                      {" "}
                      Author of this course: {author.name}
                    </Card.Title>
                    <Card.Text>Job: {author.company}</Card.Text>
                    <Card.Text>
                      published_date: {author.published_date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default CourseDetails;