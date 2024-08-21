
import React, { forwardRef } from 'react';

const Checkbox = forwardRef(({ id, label, checked, onChange }, ref ) => (

    <div className="control">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        ref={ref}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  ));


export default Checkbox;
