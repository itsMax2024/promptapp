import { useState } from "react";

import "./App.css";
import App from "./app/App";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <App />
    </>
  );
}

export default App;
