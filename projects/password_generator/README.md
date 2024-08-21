APP1.jsx => contains everything in one file

App.jsx => used the components division to improve readability of file
            
            
changes made:
1. Made a separate component for checkboxes.         (./Components/Checkbox)
2. Made a separate component for length slider.      (./Components/RangeInput)
3. Also shifted text area in its own component.      (./Components/TextInput)

// RAN INTO ISSUE OF REF ERRORS => SOLUTION : FORWARD REF



### What Is a `ref`?

In React, a `ref` is a special attribute that allows you to directly access and interact with a DOM element or a React component instance. This is useful when you need to perform actions like:

- **Focus an input**: Automatically focus on an input field when the component mounts.
- **Select text**: Highlight and select text in an input field programmatically.
- **Measure dimensions**: Get the size or position of an element for layout purposes.

### Why Pass a `ref`?

When you moved the functionality into individual components, you often need to interact with the DOM elements inside those components. For example, you might want to focus on an input or copy text from a text field. To do this, you need to pass a `ref` to these elements so you can directly access them.

### What Is `React.forwardRef`?

`React.forwardRef` is a React utility that allows function components to accept `ref` attributes. Normally, function components don't accept `ref` attributes because they don't have instances like class components do. `React.forwardRef` creates a wrapper around a function component, allowing it to forward the `ref` to an inner DOM element.

### IMPORTANT
When you use React.forwardRef, the function you pass to it can return JSX directly without an explicit return statement. This is possible because the function's body uses implicit return, a feature of arrow functions in JavaScript.

### Why Use `React.forwardRef`?

When you use `React.forwardRef`, you enable a function component to:
1. **Receive a `ref`**: It can receive a `ref` from its parent component.
2. **Forward the `ref`**: It can forward that `ref` to a specific DOM element within the component.

This is essential when you need to perform operations on that inner DOM element from outside the component.

### How to Use `React.forwardRef`

Here’s a simple breakdown:

1. **Define the Component**: Define a function component that accepts `props` and a `ref`.
2. **Use `forwardRef`**: Wrap your function component with `React.forwardRef`.
3. **Pass `ref` to DOM Element**: Forward the `ref` to a DOM element inside the component.

### Example: Using `React.forwardRef`

Let's say you want to create a reusable `TextInput` component that allows a parent component to directly access its `input` element.

#### Step 1: Define the Component

Here’s how you would normally define a `TextInput` component:

```jsx
const TextInput = ({ value, placeholder, readOnly }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    readOnly={readOnly}
    className="text-input"
  />
);
```

#### Step 2: Wrap with `forwardRef`

To allow the parent to use a `ref` with `TextInput`, wrap it with `React.forwardRef`:

```jsx
import React, { forwardRef } from 'react';

const TextInput = forwardRef(({ value, placeholder, readOnly }, ref) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    readOnly={readOnly}
    ref={ref} // Forward the ref to the input element
    className="text-input"
  />
));

export default TextInput;
```

#### Step 3: Use the Component with a `ref`

Here’s how you use `TextInput` in a parent component and access its `ref`:

```jsx
import React, { useRef } from 'react';
import TextInput from './TextInput';

const App = () => {
  const textInputRef = useRef(null);

  const focusInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <div>
      <TextInput
        value="Hello World"
        placeholder="Type here..."
        readOnly
        ref={textInputRef} // Pass the ref here
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default App;
```

### Summary

- **Why Use `ref`?** To directly interact with DOM elements or component instances for tasks like focusing inputs or selecting text.
- **Why `forwardRef`?** Function components don’t handle `ref` by default. `React.forwardRef` allows them to receive and forward `ref` to inner DOM elements.
- **How to Use `forwardRef`?** Wrap your function component with `React.forwardRef`, and pass the `ref` to the desired DOM element inside the component.
