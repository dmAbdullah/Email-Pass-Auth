import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRBS = () => {

const handleRegister= event=> {
    event.preventDefault()
    const email =event.target.email.value;
    const pass =event.target.password.value;
    console.log(email, pass);
}

    return (
        <div>
            <h3 className='text-primary'>Please Register!!</h3>
           <Form onSubmit={handleRegister} className='border p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms & Conditions." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
        </div>
    );
};

export default RegisterRBS;