import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function IsActive({ isActive }) {
  const { register } = useFormContext();

  const [checked, setChecked] = useState(
    isActive !== undefined ? Number(isActive) : 1
  );

  const onChangeHandler = (e) => {
    setChecked(Number(e.target.value));
  };

  return (
    <div className='form-group'>
      <h3 className='col-md-4 control-label'>
        <div>Active</div>
      </h3>

      <div className='col-md-4'>
        <div className='radio'>
          <input
            {...register('isActive', { required: true })}
            type='radio'
            value='1'
            id='is-active'
            checked={checked === 1}
            onChange={onChangeHandler}
          />

          <label htmlFor='is-active'>
            <p>Yes</p>
          </label>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='radio'>
          <input
            {...register('isActive', { required: true })}
            type='radio'
            value='0'
            id='is-not-active'
            checked={checked === 0}
            onClick={onChangeHandler}
          />
          <label htmlFor='is-not-active'>
            <p>No</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default IsActive;
