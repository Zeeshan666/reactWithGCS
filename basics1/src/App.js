import logo from './logo.svg';
import './App.css';
import { useState, createContext, useContext } from "react";




const UserContext = createContext();


function App() {
  const [user, setUser] = useState("Jesse Hall");
  

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext);
 
  return (
    <>
      <h1>Component 4</h1>

      <h2>{`Hello ${user}!`}</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default App;

/*
  to change name of user we will also have to pass the event and update the state of user as props down the tree
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        <h1>{`Hello ${user}! Component 1`}</h1>
        <button onClick={() => setUser("Abc")}>Set User to Abc</button>
        <Component2 />
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
*/