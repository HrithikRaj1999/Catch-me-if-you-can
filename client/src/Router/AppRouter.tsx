import { Suspense, lazy } from "react";
import Layout from "../Components/Layout";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import Results from "../Pages/Results";

const HomePage = lazy(() => import("../Pages/Home"));
const CitySelectionPage = lazy(() => import("../Pages/CitySelection"));
const VehicleSelectionPage = lazy(() => import("../Pages/VehicleSelection"));
const CreateVehicleSelectionPage = lazy(() => import("../Pages/CreateVehicle"));
const CreateCitySelectionPage = lazy(() => import("../Pages/CreateCity"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <HomePage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/city-selection",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <CitySelectionPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/Vehicle-selection",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <VehicleSelectionPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/create-city",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <CreateCitySelectionPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/create-Vehicle",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <CreateVehicleSelectionPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/results",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Results />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>No Page Found</h1>,
  },
]);
export default appRouter;
