import MenuItem from "./components/MenuItem.tsx";
import OrderComponents from "./components/OrderComponents.tsx";
import OrdersTotal from "./components/OrdersTotal.tsx";
import { menuItems } from "./data/db.ts";
import useOrder from "./hooks/useOrder.ts";
import TipsPercentageForm from "./components/TipsPercentageForm.tsx";
function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="text-center bg-cyan-400 py-4 font-black text-3xl">
        Calculadora de Propina
      </header>
      <main className=" max-w-4xl  py-18 grid md:grid-cols-2 gap-3">
        <div className="ml-6  text-xs ">
          <h2 className="text-2xl font-black pl-1">Menu</h2>
          <div className="space-y-3 mt-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300  rounded-lg space-y-10 mx-3">
          {order.length > 0 ? (
            <>
              <OrderComponents order={order} removeItem={removeItem} />
              <TipsPercentageForm setTip={setTip} tip={tip} />

              <OrdersTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center mt-5">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
