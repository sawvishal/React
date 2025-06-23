import { useState } from "react";
import Youtube from "./Youtube";

function App() {
  const username = "vishal";
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite react app {}</h1>
      <h1>Vite react app{username}</h1>
      <Youtube />
    </>
  );
}

export default App;
