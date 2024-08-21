

### **1. `useState`**

- **Purpose**: Manages and tracks local state within a functional component.
- **Usage**: When you need to hold and update data that affects the component's rendering.
- **Example**:
  ```jsx
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
  ```

### **2. `useEffect`**

- **Purpose**: Handles side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
- **Usage**: When you need to perform actions in response to rendering, such as fetching data or setting up a subscription.
- **Example**:
  ```jsx
  useEffect(() => {
    // Side effect code (e.g., data fetching)
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

    // Cleanup function (optional)
    return () => {
      // Cleanup code (e.g., removing event listeners)
    };
  }, [dependencies]); // Dependencies array to control when the effect runs
  ```

### **3. `useContext`**

- **Purpose**: Provides a way to share data across the component tree without passing props manually at every level.
- **Usage**: When you need to pass data deeply into the component tree or share global state.
- **Example**:
  ```jsx
  const UserContext = createContext();

  function App() {
    const [user, setUser] = useState('Guest');

    return (
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentA />
      </UserContext.Provider>
    );
  }

  function ComponentA() {
    const { user, setUser } = useContext(UserContext);

    return (
      <>
        <h1>{`Hello, ${user}`}</h1>
        <button onClick={() => setUser('Admin')}>Change User</button>
        <ComponentB />
      </>
    );
  }

  function ComponentB() {
    const { user } = useContext(UserContext);

    return <h2>{`Welcome back, ${user}`}</h2>;
  }
  ```
