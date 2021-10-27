import { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import styles from '../../../../styles/admin/Form.module.css';

function Options({ isCorrect, isValidEdit }) {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  const [checkednum, setCheckednum] = useState(
    isCorrect && isCorrect.split('  /  ').indexOf('true') >= 0
      ? isCorrect.split('  /  ').indexOf('true')
      : 0
  );

  const onChangeHandler = (e) => {
    const newCheckednum = e.target.value;
    setCheckednum(Number(newCheckednum));
  };

  const deleteOption = (i) => {
    if (checkednum === i) {
      setCheckednum(0);
    } else if (checkednum > i) {
      setCheckednum(checkednum - 1);
    }
  };

  return (
    <div className='form-group'>
      <h3 className='col-md-4 control-label'>Options</h3>

      {fields.map((field, index) => (
        <div className='col-md-10' key={field.id}>
          <div className='row'>
            <label htmlFor={`isCorrect${index + 1}`} className='col-8'>
              <span className='mr-4'>Option{index + 1}</span>
              <span>Correct</span>
              {isValidEdit && (
                <input
                  type='radio'
                  className='ml-1'
                  id={`isCorrect${index + 1}`}
                  {...register(`isCorrect`, {
                    required: true,
                  })}
                  value={index}
                  checked={checkednum === index}
                  onChange={onChangeHandler}
                />
              )}
              {!isValidEdit && (
                <input
                  type='radio'
                  className='ml-1'
                  id={`isCorrect${index + 1}`}
                  {...register(`isCorrect`, {
                    required: true,
                  })}
                  value={index}
                  checked={checkednum === index}
                  onChange={onChangeHandler}
                  disabled={checkednum !== index}
                />
              )}
            </label>
          </div>
          <div className={`row ${styles.options}`}>
            <div className='col-md-9'>
              <input
                id='options'
                type='text'
                className='form-control input-md mb-4'
                placeholder='options'
                {...register(`options[${index}].options`, {
                  required: true,
                  min: 1,
                })}
                readOnly={!isValidEdit}
              />
            </div>
            <div className='col-md'>
              <button
                type='button'
                className={styles.deleteBtn}
                onClick={() => {
                  remove(index);
                  deleteOption(index);
                }}
                disabled={!isValidEdit || fields.length === 1}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='col-md-9' style={{ textAlign: 'center' }}>
        <button
          type='button'
          className={styles.appendBtn}
          onClick={() => {
            append({});
          }}
          disabled={!isValidEdit}
        >
          Append Option
        </button>
      </div>
    </div>
  );
}

export default Options;
