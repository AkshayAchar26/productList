import "./App.css";
import { Header, Products, Categories } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
    </>
  );
}

export default App;
