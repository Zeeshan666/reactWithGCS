
import React, { forwardRef } from 'react';


const TextInput = forwardRef(({ id, value, placeholder, readOnly},ref) => 
    (
    <div className="input-group">
      <input
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
      />
    </div>
  ));


export default TextInput;
