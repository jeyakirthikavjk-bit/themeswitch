import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "dark" : "light"}>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>{dark ? "Dark Theme" : "Light Theme"}</h1>
      <p>Click the button to change the theme.</p>
    </main>
  );
}

export default App;
