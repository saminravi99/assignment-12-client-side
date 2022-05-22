import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useOrders from "../hooks/useOrders";
import Loading from "../Loading/Loading";

const MyOrders = () => {
  const [authUser] = useAuthState(auth);

  const [orders, setOrders, isLoading] = useOrders(authUser?.email);

  console.log(orders);

  const order = orders.map(
    ({
      userName,
      userEmail,
      toolName,
      toolPrice,
      quantity,
      totalPrice,
      isDelivered,
      isPaid,
    }, index) => {
      return (
        <Card className="my-3">
          <Card.Header>
            <small>
              <strong>User Name: {userName}</strong>
            </small>
            <p>
              <small>
                <strong>User Email: {userEmail}</strong>
              </small>
            </p>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="d-flex align-items-center">
                <div>
                  <h2>
                    {" "}
                    {index + 1}. {toolName}
                  </h2>
                </div>
                {isDelivered ? (
                  <p className="mb-0 ms-3">
                    <small>
                      <i className="px-3 py-1 me-3  bg-success text-white rounded-pill">
                        Delivered
                      </i>
                    </small>
                  </p>
                ) : (
                  <p className="mb-0 ms-3">
                    <small>
                      <i className="px-3 py-1 me-3  bg-danger text-white rounded-pill">
                        Pending
                      </i>
                    </small>
                  </p>
                )}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <strong>Price: Tk. {toolPrice}</strong> (per piece)
              </p>
              <p>
                <strong>Quantity: {quantity}</strong>
              </p>
              <p>
                <strong>Total Price: Tk. {totalPrice}</strong>
              </p>
            </Card.Text>
            <div className="d-flex justify-content-around">
              <div>
                {isPaid ? (
                  <p className="px-3 py-1 bg-success text-white rounded-pill">
                    <strong>Paid</strong>
                  </p>
                ) : (
                  <Button variant="success">Pay Now</Button>
                )}
              </div>
              <div>
                {!isDelivered && (
                  <div className="d-flex align-items-center ">
                    <div>
                      <Button className="rounded-pill" variant="primary">
                        Cancel Order
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <div>
      <h1 className="text-center text-muted mb-4">My Orders</h1>
      <div className="container ">{isLoading ? <Loading /> : order}</div>
    </div>
  );
};

export default MyOrders;
