import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const eleA = ( <a href="https://google.com" target="_blank">Click me to visit google</a> );
const eleB = React.createElement (
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google'
)

root.render(

    
    <div>
      <App />
      <Test />
      {eleA}
      <br></br>
      {eleB}

      <br /> <br />
      <Counter />

    </div>
);
/*we can also use App() since this is a function 
  if we were to only send one of those above then app and test syntax remains same but remove curly braces on eleA/B

*/


reportWebVitals();
