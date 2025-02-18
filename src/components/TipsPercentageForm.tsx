const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipsPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};
export default function TipsPercentageForm({
  setTip,
  tip,
}: TipsPercentageFormProps) {
  return (
    <div className="mx-4">
      <h3 className=" font-black text-xl">Propina</h3>
      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id}>
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              id={tipOptions.id}
              type="radio"
              name="tipOptions"
              value={tipOptions.value}
              onChange={(e) => setTip(Number(e.target.value))}
              checked={tip === tipOptions.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
