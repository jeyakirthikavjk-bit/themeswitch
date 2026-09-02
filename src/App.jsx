import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: isDark ? "#121212" : "#ffffff",
        color: isDark ? "#ffffff" : "#111111",
      }}
    >
      <h1>Dark & Light Theme</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: isDark ? "#ffffff" : "#111111",
          color: isDark ? "#111111" : "#ffffff",
        }}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
          border: `1px solid ${isDark ? "#333" : "#ddd"}`,
        }}
      >
        <h2>Hello React 👋</h2>

        <p>
          Click the button to switch between dark mode and light mode.
        </p>
      </div>
    </div>
  );
}

export default App;
