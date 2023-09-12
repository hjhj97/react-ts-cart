import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

function StoreItem({ id, name, imgUrl, price }: StoreItemProps) {
  const quantity = 1;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add To Cart</Button>
          ) : (
            <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
              <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                <Button>-</Button>
                <span>{quantity}</span>
                <Button>+</Button>
              </div>
              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
