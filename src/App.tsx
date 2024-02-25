import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./scss/globals.scss";
import Home from "./pages/Home";
import Men from "./pages/Men";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
      </Route>
    </Routes>
  );
}

export default App;
