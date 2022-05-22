import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        navigate('/dashboard/my-profile');
    }

    return (
      <div>
          <h2 className="text-center text-success my-4">Update Your Profile</h2>
        <Form className="w-50 mx-auto mb-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Educational Institution</Form.Label>
            <Form.Control type="text" placeholder="University Of Dhaka" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="+880" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="date" placeholder="04/11/2001" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button onClick={handleUpdate} className="px-4 d-block mx-auto" variant="primary">Save</Button>
        </Form>
      </div>
    );
};

export default UpdateProfile;