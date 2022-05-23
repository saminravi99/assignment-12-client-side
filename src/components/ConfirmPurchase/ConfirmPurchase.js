import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import "./ConfirmPurchase.css";

const ConfirmPurchase = () => {

    const navigate = useNavigate();
     const [authUser] = useAuthState(auth);
     const params = useParams();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
      <div className="back-btn" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>

      <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center   container mx-auto">
        <div className="update-stock-info mx-5">
          <div className="card card-container mt-lg-5">
            <div className="mx-auto">
              <img
                className="book-img"
                src=""
                alt="bookName"
              />
            </div>
            <div className="card-body-update">
              <h3 className="card-title text-center">Hello</h3>
              <div className="d-flex justify-content-around align-items-center my-3">
                <h6 className="card-text mb-0 mx-3">
                  Author:
                </h6>
                <p className="card-text book-price ">
                 
                </p>
              </div>
              <p className="card-text card-description">
                <span className="description"> Description:</span>
                
              </p>
              <h6 className="card-text">
                Available Pieces:
                
              </h6>
            </div>
          </div>
          
        </div>
        <div className="update-stock-form mt-lg-0 mt-5">
          <Form >
            <h1 className="mb-lg-0 mb-5 text-center">
              Please Update The Stock of{" "}
              <span className="text-primary">"{}"</span>
            </h1>
            <Form.Group
              className="mb-3 mt-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="checkout-labels">Your Name</Form.Label>
              <Form.Control
                disabled={authUser?.displayName ? true : false}
                value={authUser?.displayName}
                type="text"
                placeholder="First Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={authUser?.email}
                required
                disabled={authUser?.email ? true : false}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Selected Book</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Your Selected Book"
                
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Remaining Stock
              </Form.Label>
              <Form.Control
                
                type="number"
                name="quantity"
                placeholder="Number of Stock"
                required
              />
            </Form.Group>

           
          </Form>
        </div>
      </div>

      <div className="my-5">
        <button
        
          className="btn btn-secondary d-block mx-auto px-5"
        >
          Confirm Your Order
         
        </button>
      </div>
    </div>
  );

};

export default ConfirmPurchase;