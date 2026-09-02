import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor =
      theme === "dark" ? "#121212" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#111111";

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#121212" : "#ffffff",
        color: isDark ? "#ffffff" : "#111111",
        transition: "all 0.3s ease",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: "70px",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${isDark ? "#333" : "#ddd"}`,
        }}
      >
        <h2>My React App</h2>

        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: isDark ? "#ffffff" : "#111111",
            color: isDark ? "#111111" : "#ffffff",
            fontSize: "15px",
          }}
        >
          {isDark ? " Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1>Dark & Light Theme</h1>

        <p>
          Current Theme: <strong>{theme}</strong>
        </p>

        {/* Card */}
        <div
          style={{
            maxWidth: "500px",
            margin: "40px auto",
            padding: "30px",
            borderRadius: "12px",
            backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
            border: `1px solid ${isDark ? "#333" : "#ddd"}`,
            transition: "all 0.3s ease",
          }}
        >
          <h2>Hello React </h2>

          <p style={{ lineHeight: "1.6" }}>
            Click the button below to switch between dark mode and light mode.
          </p>

          <button
            onClick={toggleTheme}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: isDark ? "#ffffff" : "#111111",
              color: isDark ? "#111111" : "#ffffff",
              fontSize: "15px",
            }}
          >
            Switch to {isDark ? "Light" : "Dark"} Mode
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
