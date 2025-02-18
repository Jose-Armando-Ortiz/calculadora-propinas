import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrentcy } from "../helpers";

type orderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrdersTotal({
  order,
  tip,
  placeOrder,
}: orderTotalsProps) {
  const subTotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmout = useMemo(() => subTotal * tip, [tip, order]);
  const total = useMemo(() => subTotal + tipAmout, [subTotal, tipAmout]);

  return (
    <>
      <div className=" space-y-3 mx-4">
        <h2 className="font-black text-xl "> Totales y Propinas</h2>

        <p>
          subtotal :{""}
          <span className="font-bold">{formatCurrentcy(subTotal)}</span>
        </p>
        <p>
          Propina :{""}
          <span className="font-bold">{formatCurrentcy(tipAmout)}</span>
        </p>
        <p>
          Total :{""}
          <span className="font-bold">{formatCurrentcy(total)}</span>
        </p>
        <button
          className="bg-cyan-950 rounded-lg p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 w-full"
          disabled={total === 0}
          onClick={placeOrder}
        >
          Guardar Orden
        </button>
      </div>
    </>
  );
}
