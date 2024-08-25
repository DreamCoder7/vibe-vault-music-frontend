import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { LoginPage } from "./_auth";
import { FallbackRender, PageNotFound } from "./_root";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
  );
};

const routes = createRoutesFromElements(
  <Route errorElement={<FallbackRender />}>
    <Route path="/*" element={<PrivateRoutes />} />
    <Route path="/auth/*" element={<LoginPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
