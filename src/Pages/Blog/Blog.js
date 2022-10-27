import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
   
    return (
      <div>
        <h3 className="text-center">
          Basic question about few full-stack topic reactjs and expressjs
        </h3>
        <Accordion className="w-75 mx-auto mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is cors?</Accordion.Header>
            <Accordion.Body>
              <p>Cross-origin resource sharing (CORS) is a mechanism that allows
              restricted resources on a web page to be requested from another
              domain outside the domain from which the first resource was
              served.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              <p> <strong>Because Firebase</strong> supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Its Authentications provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app</p>
              <p>Other option to authentication</p>
              <small>
                STYTCH, Ory, Supabase. Okta. PingIdentity. Keycloak. Frontegg.
                Authress.
              </small>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              <p> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is Node? How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              <p>Node. js (Node) is an open source development platform for executing JavaScript code server-side.
              Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default Blog;