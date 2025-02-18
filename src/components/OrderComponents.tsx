import { formatCurrentcy } from "../helpers";
import { OrderItem } from "../types";

type orderContetsprops = {
  order: OrderItem[];
  removeItem: (itemId: OrderItem["id"]) => void;
};
export default function OrderComponents({
  order,
  removeItem,
}: orderContetsprops) {
  return (
    <>
      <div className="font-black text-2xl pl-5">Consumo</div>
      <div className=" space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="pl-4 flex justify-between border-t items-center border-gray-300 last-of-type:border-b"
          >
            <div>
              <p>
                {item.name} - {formatCurrentcy(item.price)}
              </p>
              <p className="font-black">
                La cantidad es:{item.quantity} -{" "}
                {formatCurrentcy(item.quantity * item.price)}
              </p>
            </div>

            <button
              className="font-black h-8 w-8 mx-2 text-center text-white bg-red-600 rounded-full "
              onClick={() => removeItem(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
