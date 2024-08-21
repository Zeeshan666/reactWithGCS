
import { useState } from 'react';
import './App.css';


function Counter() {
            // let count = 5;
        let [counter, setCounter] = useState(5);

        const addValue = () =>{
            //setCounter(counter + 1); this will show values that are 1 step back in console due to async nature of JS
            //console.log(counter);
            setCounter( (prevCounter) => {console.log(prevCounter + 1); return prevCounter + 1} );
        }

        const decreaseValue = () =>{
            if (counter > 0){
                setCounter( (prevCounter) => {console.log(prevCounter - 1); return prevCounter - 1} );
            }
            else{
                setCounter(0);
            }
        }

  return (
    <>
        <h1>{counter}</h1>
        <button onClick = {addValue}> Add Value </button>
        <br /> <br />
        <button onClick= {decreaseValue}> Decrease Value </button>
    </>
  );
}
/*
    Doing this is same as normal JavaScript function 
    Obs: UI is not changed although value changes and confirmed using console
            |=> React handles this UI updation using hooks
                                                        |=> Use State hook is used to propagate changes across UI

                                                            const [variable, functionOpertaingOnVariable] = useState(intialValue)


    QUESTION:
    JAB HAM VALUE CONSOLE LOG KER RAHAY HAIN TO VALUE AIK STEP BEHIND KI VALUE DIKHA RAHI HA. WHY? (I AM DOING SOMETHING WRONG)

    REASON: Hooks execute in async manner so when you console.log the value it will be 1 step behind in the console as updated value is not available yet.


                                                            
*/

export default Counter;
