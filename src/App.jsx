import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Products, Categories, Cart } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <Categories />
      <Products />
    </>
  );
}

export default App;
