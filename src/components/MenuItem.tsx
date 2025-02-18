import { formatCurrentcy } from "../helpers/index.ts";
import type { MenuItem } from "../types/index.ts";
type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 rounded-2xl border-cyan-400 w-full hover:bg-cyan-300 text-lg flex justify-between p-3"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrentcy(item.price)}</p>
    </button>
  );
}
