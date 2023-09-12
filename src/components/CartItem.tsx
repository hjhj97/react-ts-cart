import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal">
      <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className="me-auto">
        <div>
          {item.name} {quantity > 1 && <span>x{quantity}</span>}
        </div>
        <div>{formatCurrency(item.price)}</div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
}
