import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import Login from "../pages/Login";
import AppLayout from "../pages/AppLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<>List</>} />
          <Route path="cities" element={<p>List of cities </p>} />
          <Route path="countries" element={<p>Countries </p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
