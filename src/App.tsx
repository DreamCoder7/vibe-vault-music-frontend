import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { LoginPage } from "./_auth";
import { FallbackRender, PageNotFound } from "./_root";
import RootLayout from "./components/layout/RootLayout";
import { lazy, Suspense } from "react";

const PrivateRoutes = () => {
  const LazyDashboardPage = lazy(() => import("./_root/dashboard/page"));
  const LazySongPage = lazy(() => import("./_root/song/page"));

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyDashboardPage />
            </Suspense>
          }
        />
        <Route
          path="songs"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySongPage />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const routes = createRoutesFromElements(
  <Route errorElement={<FallbackRender />}>
    <Route path="/*" element={<PrivateRoutes />} />
    <Route path="/auth/*" element={<LoginPage />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/" element={<Navigate to={"/auth"} />} />
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
