import React from "react";
import { Table } from "react-bootstrap";
import useAllUsers from "../hooks/useAllUsers";
import Loading from "../Loading/Loading";

const MakeAdmin = () => {
  const [allUsers, setAllUsers, isLoading] = useAllUsers();

  const singleUser = allUsers.map(({ email, role }, index) => {
    return (
      <tr>
        <td className="text-center">
          <small>{index + 1}</small>
        </td>
        <td className="text-center">
          <small>{email}</small>
        </td>
        <td className="text-center">
          <small>{role}</small>
        </td>
        <td className="text-center">
          <small>
            {role === "admin" ? (
              <button className="btn btn-danger d-block mx-auto">Remove</button>
            ) : (
              <button className="btn btn-success d-block mx-auto">
                Make Admin
              </button>
            )}
          </small>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h3 className="text-center text-success mb-4">Make Admin</h3>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="container">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th className="text-center">Email</th>
                <th className="text-center">Role</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>{singleUser}</tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
