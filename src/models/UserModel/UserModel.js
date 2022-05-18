import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

const UserModel = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        {/* <Modal.Header closeButton> Add User</Modal.Header> */}
        <Modal.Header closeButton>
          <Modal.Title>{props.edit ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.edit ? props.handleUpdate : props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state "
                name="state"
                value={props.user.state}
                onChange={props.handleChange}
                autoFocus
              />
              <p style={{ color: 'red' }}> {props.error.state}</p>
            </Form.Group>
            <Form.Group
              className="mb-3"
              ss
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={props.user.title}
                onChange={props.handleChange}
              />
              <p style={{ color: 'red' }}> {props.error.title}</p>
            </Form.Group>
            <Button type="submit"> submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UserModel;
