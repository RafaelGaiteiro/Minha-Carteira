import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/list/:type" element={<List />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
