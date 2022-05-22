import React from "react";
import { Table } from "react-bootstrap";
import useTools from "../hooks/useTools";
import Loading from "../Loading/Loading";

const ManageProduct = () => {
  const [tools, setTools, isLoading] = useTools();

  const singleTools = tools.map(
    ({ toolName, toolPrice, availableQuantity }, index) => {
      return (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">{toolName}</td>
          <td className="text-center"> {toolPrice}</td>

          <td className="text-center">{availableQuantity}</td>
          <td>
            <button className="btn btn-success d-block mx-auto">Restock</button>
          </td>
          <td>
            <button className="btn btn-danger d-block mx-auto">Delete</button>
          </td>
        </tr>
      );
    }
  );

  return (
    <div>
      <h3 className="text-center text-success mb-4">Manage Products</h3>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="container">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th className="text-center">Product Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center"></th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>{singleTools}</tbody>
          </Table>
        </div>
      )}
      ;
    </div>
  );
};

export default ManageProduct;
