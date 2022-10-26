import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {googleLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogle = () =>{
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error))

  }
    return (
      <div className="form-design">
        <Form className="w-50 mx-auto mt-5 border p-3">
          <h2>Please Login Here!</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <Form.Text className="text-danger"></Form.Text>
        </Form>

        <div className='text-center'>
        <p className="text-center">OR Sign in with</p>
        <Button
          onClick={handleGoogle}
          variant="primary"
          type="submit"
          className="me-4"
        >
          google
        </Button>
        <Button variant="primary" type="submit" className="">
          github
        </Button>
        </div>
      </div>
    );
};

export default Login;