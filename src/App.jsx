import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const handleToggleProducts = () => {
    setShowProducts((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="name-input"
          style={{ display: "block", marginBottom: "6px" }}
        >
          Your Name:
        </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter name"
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>

      <p>Hello, {name}</p>

      <div style={{ margin: "20px 0" }}>
        <button
          onClick={handleToggleProducts}
          style={{ padding: "10px 16px", cursor: "pointer" }}
        >
          {showProducts ? "Hide Products" : "Show Products"}
        </button>
      </div>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
