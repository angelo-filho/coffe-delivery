import { createContext, ReactNode, useState } from "react";

interface CartItem {
  itemName: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  handleAddItemToCart: (quantity: number, itemName: string) => void;
  handleRemoveItemFromCart: (itemName: string) => void;
  handleMakeCartEmpty: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddItemToCart(quantity: number, itemName: string) {
    if (quantity <= 0) {
      return;
    }

    const cartItem = cartItems.find((item) => item.itemName === itemName);

    if (cartItem) {
      updateQuantityOfAnItem(quantity, itemName);

      return;
    }

    addItemToCart(quantity, itemName);
  }

  function handleRemoveItemFromCart(itemName: string) {
    setCartItems((prev) => prev.filter((items) => items.itemName !== itemName));
  }

  function handleMakeCartEmpty() {
    setCartItems([]);
  }

  function updateQuantityOfAnItem(quantity: number, itemName: string) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.itemName === itemName) {
          item.quantity = quantity;
        }

        return item;
      })
    );
  }

  function addItemToCart(quantity: number, itemName: string) {
    setCartItems((prev) => [...prev, { itemName: itemName, quantity }]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleMakeCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
