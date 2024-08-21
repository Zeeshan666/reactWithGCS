
import React, { forwardRef } from 'react';

const RangeInput = forwardRef(({ id, min, max, value, onChange },ref) => 
  (
    <div className="control">
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        style={{ cursor: 'pointer' }}
        ref={ref}
        onChange={onChange}
      />
      &nbsp; &nbsp;
      <label htmlFor={id}>
        Length: <span id={`${id}Label`}>{value}</span>
      </label>
    </div>
  ));

export default RangeInput;
