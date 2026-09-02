import { useEffect, useState } from "react";
import "./App.css";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <main className="theme-app">
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        aria-pressed={isDark}
      >
        <span aria-hidden="true">{isDark ? "dark" : "light"}</span>{" "}
        {isDark ? "Light mode" : "Dark mode"}
      </button>

      <section>
        <p className="eyebrow">React theme switcher</p>
        <h1>{isDark ? "Dark" : "Light"} theme is active</h1>
        <p>
          Your preference is saved and will be used the next time you visit.
        </p>
      </section>
    </main>
  );
}

export default App;
