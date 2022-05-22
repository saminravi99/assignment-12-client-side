import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
    }

    return (
      <div>
        <h3 className="text-center text-success mb-4">
          Add A Product In Our Database
        </h3>
        <Form className="w-50 mx-auto mb-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tool Name</Form.Label>
            <Form.Control type="text" placeholder="Wrench" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tool Price</Form.Label>
            <Form.Control type="number" placeholder="Tk.234" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Minimun Order</Form.Label>
            <Form.Control type="number" placeholder="100" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Available Quantity</Form.Label>
            <Form.Control type="number" placeholder="1000" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tool Image</Form.Label>
            <Form.Control type="file" placeholder="1000" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tool Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button
            onClick={handleAddProduct}
            className="px-4 d-block mx-auto"
            variant="primary"
          >
            Add This Product
          </Button>
        </Form>
      </div>
    );
};

export default AddProduct;