import React from 'react';
import { Table } from 'react-bootstrap';
import useAllOrders from '../hooks/useAllOrders';
import Loading from '../Loading/Loading';

const ManageOrders = () => {
    const [allOrders, setAllOrders, isLoading] = useAllOrders();

    const reversedOrders = [...allOrders].reverse();

    const singleOrder = reversedOrders.map(
        ({
            userName,
            userEmail,
            toolName,
            toolPrice,
            quantity,
            availableQuantity,
            totalPrice,
            isDelivered,
            
            isPaid,
        }, index) => {
          return (
            <tr>
              <td className="text-center">
                <small>{index + 1}</small>
              </td>
              <td className="text-center">
                <small>{toolName}</small>
              </td>
              <td className="text-center">
                <small>{quantity}</small>
              </td>
              <td className="text-center">
                <small>{totalPrice}</small>
              </td>
              <td className="text-center">
                <small>{userName}</small>
              </td>
              <td className="text-center">
                <small>{userEmail}</small>
              </td>
              <td className="text-center">
                <small>Dhaka, Bangladesh</small>
              </td>
              <td className="text-center">
                <small>0195405915</small>
              </td>

              <td>
                {isDelivered ? (
                  <p className="px-3 py-1 bg-success text-white rounded-pill">
                    <small>
                      <strong>Shipped</strong>
                    </small>
                  </p>
                ) : (
                  <button className="btn btn-primary d-block mx-auto rounded-pill">
                    <small>Deliver</small>
                  </button>
                )}
              </td>
            </tr>
          );
        }
    )
    return (
      <div>
        <h3 className="text-center text-success mb-4">Manage The Orders</h3>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="container">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Product Name</th>
                  <th className="text-center">Ordered Quantity</th>
                  <th className="text-center">Total Price</th>
                  <th className="text-center">User Name</th>
                  <th className="text-center ">User Email</th>
                  <th className="text-center">Address</th>
                  <th className="text-center">Contact Number</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>{singleOrder}</tbody>
            </Table>
          </div>
        )}
      </div>
    );
};

export default ManageOrders;