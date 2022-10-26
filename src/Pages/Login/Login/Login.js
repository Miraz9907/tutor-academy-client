import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {googleLogin, signEmailPassword, githubLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate()



  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signEmailPassword(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate('/');

    })
    .catch(error => console.error(error))


  }
  const handleGoogle = () =>{
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error))

  }

  const handleGithub = () =>{
    githubLogin(githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error))

  }

    return (
      <div className="form-design">
        <Form onSubmit={handleLogin} className="w-50 mx-auto mt-5 border p-3">
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
        <Button onClick={handleGithub} variant="primary" type="submit" className="">
          github
        </Button>
        </div>
      </div>
    );
};

export default Login;