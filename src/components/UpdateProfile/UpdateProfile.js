import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import "./UpdateProfile.css"

const UpdateProfile = () => {
  const [authUser] = useAuthState(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
      console.log(data);
      const userInfo = {
        displayName: data.displayName || authUser.displayName,
        institution: data.institution || "N/A",
        phoneNumber: data.phoneNumber || "N/A",
        address: data.address || "N/A",
        dateOfBirth: data.dateOfBirth || "N/A",
      }
      console.log(userInfo);
      fetch(`http://localhost:5000/update/user/${authUser.email}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          email: `${authUser?.email}`,
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          toast.success("Profile Updated Successfully");
          reset();
          navigate('/dashboard/my-profile');
        });
    }

    return (
      <div>
        <h2 className="text-center text-success my-4">Update Your Profile</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mb-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              {...register("displayName")}
              type="text"
              placeholder="John Doe"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Educational Institution</Form.Label>
            <Form.Control
              {...register("institution")}
              type="text"
              placeholder="University Of Dhaka"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              {...register("phoneNumber")}
              type="number"
              placeholder="+880"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              {...register("dateOfBirth")}
              type="date"
              placeholder="04/11/2001"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control {...register("address")} as="textarea" rows={3} />
          </Form.Group>
          <Button
            type="submit"
            className="px-4 d-block mx-auto"
            variant="primary"
          >
            Save
          </Button>
        </Form>
      </div>
    );
};

export default UpdateProfile;