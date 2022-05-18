import React, { useState } from 'react';

import { Button, Table } from 'react-bootstrap';

const User = (props) => {
  return (
    <>
      <Button variant="primary" onClick={props.handleAdd}>
        add
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>State</th>
            <th>Title</th>
            <th> Action</th>
          </tr>
        </thead>
        {props.userData &&
          props.userData.map((data) => (
            <tbody>
              <tr>
                <td>{data.state}</td>
                <td>{data.title}</td>
                <td>
                  <Button onClick={() => props.handleEdit(data)}>edit</Button>
                  <Button onClick={() => props.handledelete(data.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </>
  );
};
export default User;
