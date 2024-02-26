import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./scss/globals.scss";
import Home from "./pages/Home";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
