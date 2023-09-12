import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

function StoreItem({ id, name, imgUrl, price }: StoreItemProps) {
  const { getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

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
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
              <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span>{quantity}</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
