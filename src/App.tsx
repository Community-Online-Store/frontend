import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./scss/globals.scss";
import Home from "./pages/Home";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="man" element={<Man />} />
        <Route path="woman" element={<Woman />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
