import { useState } from "react";
import Card from "./assets/compornent/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card></Card>
    </>
  );
}

export default App;
