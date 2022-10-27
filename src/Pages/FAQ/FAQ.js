import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
    return (
      <div>
        <h3 className="text-center">
          Basic question about few full-stack topic reactjs and expressjs
        </h3>
        <Accordion className="w-75 mx-auto mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is ReactJS used for?</Accordion.Header>
            <Accordion.Body>
              <p>
                The React. js framework is an open-source JavaScript framework
                and library developed by Facebook. It's used for building
                interactive user interfaces and web applications quickly and
                efficiently with significantly less code than you would with
                vanilla JavaScript.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is express JS is used for?</Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                Express is a node js web application framework that provides
                broad features for building web and mobile applications. It is
                used to build a single page, multipage, and hybrid web
                application. It's a layer built on the top of the Node js that
                helps manage servers and routes
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>why we used private route</Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                The private route component is used to protect selected pages in
                a React app from unauthenticated users.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What's the difference between Tailwind CSS and Bootstrap?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Bootstrap is the most popular HTML, CSS, and JavaScript
                framework for building responsive, mobile-first projects on the
                web. Tailwind CSS, on the other hand, is the most popular
                utility-first CSS framework for fast UI development.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default FAQ;