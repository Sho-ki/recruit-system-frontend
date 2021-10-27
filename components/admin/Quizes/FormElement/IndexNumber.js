import { useState } from "react";
import { useFormContext } from "react-hook-form";

function IndexNumber({ indexNumber }) {
  const [inputValue, setInputValue] = useState(indexNumber ? indexNumber : "");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const { register } = useFormContext();

  return (
    <div className="form-group">
      <h3>
        <label className="col-md-4 control-label" htmlFor="indexNumber">
          Index number
        </label>
      </h3>
      <div className="col-md-10">
        <input
          type="number"
          id="indexNumber"
          placeholder="Index Number"
          {...register("indexNumber", { required: true })}
          step="1"
          value={inputValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default IndexNumber;
