import { useState } from "react";
import { useFormContext } from "react-hook-form";

function Category({ category }) {
  const [inputValue, setInputValue] = useState(category ? category : "");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-group">
      <h3>
        <label className="col-md-4 control-label" htmlFor="category">
          Category
        </label>
      </h3>
      <div className="col-md-10">
        {errors.category?.message}
        <input
          id="category"
          type="text"
          className="form-control input-md mb-4"
          placeholder="Category"
          {...register("category", {
            required: "Required",
            min: 1,
            maxLength: {
              value: 45,
              message: "no more than 45 characters",
            },
          })}
          value={inputValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default Category;
