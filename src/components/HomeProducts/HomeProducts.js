import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useTools from '../hooks/useTools';
import Loading from '../Loading/Loading';
import "./HomeProducts.css"

const HomeProducts = () => {
    const [tools, setTools, isLoading] = useTools();

    //Reverse an tools array
    
    const slicedTools = [...tools].reverse().slice(0, 6);
    console.log(slicedTools);

    const singleTool = slicedTools.map(
      ({
        toolName,
        toolImage,
        toolPrice,
        minOrder,
        availableQuantity,
        toolDescription,
      }) => {
        return (
          <div className="col-md-4 col-sm-6 mb-4 tool-card">
            <Card
              className="shadow "
              style={{ width: "18rem", height: "500px" }}
            >
              <Card.Img className="tool-img" variant="top" src={toolImage} />
              <Card.Body>
                <Card.Title className="text-center  tool-header">
                  {toolName}
                </Card.Title>
                <Card.Text className="tool-body">
                  <p className="text-muted">
                    {toolDescription.slice(0, 60)}...
                  </p>
                  <p className="mb-2">
                    <strong>Price: Tk. {toolPrice}</strong> (per piece)
                  </p>
                  <small>
                    <strong className="text-danger">
                      Minimum Order Quantity: {minOrder}
                    </strong>
                  </small>
                  <div>
                    <small className="text-muted">
                      <strong>Available Quantity: {availableQuantity}</strong>
                    </small>
                  </div>
                </Card.Text>

                <Button
                  className="d-block   confirm-order-button"
                  variant="success"
                >
                  Confirm Order
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
    );
    return (
        <div >
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <div className="row container mx-auto">
                    {singleTool}
                </div>
            )}
        </div>
    );
};

export default HomeProducts;