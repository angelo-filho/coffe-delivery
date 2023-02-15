import { createContext, ReactNode, useState } from "react";

interface CartItem {
  itemName: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  handleAddItemToCart: (quantity: number, itemName: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddItemToCart(quantity: number, itemName: string) {
    if (quantity < 0) {
      return;
    }

    const cartItem = cartItems.find((item) => item.itemName === itemName);

    if (cartItem) {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.itemName === itemName) {
            item.quantity = quantity;
          }

          return item;
        })
      );

      return;
    }

    setCartItems((prev) => [...prev, { itemName: itemName, quantity }]);
  }

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
