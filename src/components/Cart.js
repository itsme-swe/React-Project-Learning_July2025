import { useDispatch, useSelector } from "react-redux";
import AccordionItemList from "./AccordionItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // Here cart is the name of the slice and items is the current state of slice

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-amber-500 text-black font-bold rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1>Cart is empty Add items to it!!</h1>}
        <AccordionItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
