const FilterControl = ({ tags, changeHandler }) => {
  const removeTag = (target, tags) => {
    return tags.filter((tag) => tag._id !== target._id);
  };
  const addTag = (newTag, tags) => {
    return tags.concat(newTag);
  };

  return (
    <ul>
      {tags.map((tag) => {
        return (
          <li key={tag._id}>
            <span>
              <input
                id={tag._id}
                type="checkbox"
                onChange={() => {
                  changeHandler((prevState) => {
                    if (prevState.find((t) => t._id === tag._id)) {
                      return removeTag(tag, prevState);
                    }
                    return addTag(tag, prevState);
                  });
                }}
              />
              <label htmlFor={tag._id}>{tag.name}</label>
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default FilterControl;
