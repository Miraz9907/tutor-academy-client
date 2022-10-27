import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
const [ error, setError] = useState('');
const {createAUser, updateUser} = useContext(AuthContext);
const navigate = useNavigate()

  const handleFromSubmit =(event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createAUser(email, password)
    .then(result => {
    const user = result?.user;
    console.log(user);
    setError('');
    form.reset();
    navigate('/');
    handleUpdateUserProfile(name, photoURL)
  })
  .catch(error => {
    console.error(error);
    setError(error.message);
  });

  
  }

  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    updateUser(profile)
    .then(()=> { })
    .catch(e => console.error(e));
  }

    return (
        <Form onSubmit={handleFromSubmit} className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="photo url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Register
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
      </Form>
    );
};

export default Register;