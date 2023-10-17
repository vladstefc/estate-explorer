export const Select = ({ options, onSelect, value }) => (
  <div className="flex flex-wrap flex-col justify-center items-center">
    <p>{value}</p>
    <select
      className="w-32 p-2 m-1 border-solid border-2 rounded-lg border-amber-500"
      onClick={onSelect}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);
