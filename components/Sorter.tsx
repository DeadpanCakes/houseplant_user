const Sorter = ({ criteria, changeHandler }) => {
  return (
    <select onChange={(e) => changeHandler(e.target.value)}>
      {criteria.map((c) => {
        return (
          <option value={c} key={c}>
            {c}
          </option>
        );
      })}
    </select>
  );
};

export default Sorter;
