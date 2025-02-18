import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState<number>(0);
  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updaateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updaateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  const removeItem = (itemId: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== itemId));
  };
  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return { order, addItem, removeItem, tip, setTip, placeOrder };
}
