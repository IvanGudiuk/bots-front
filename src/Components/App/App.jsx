import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SharedLayout = lazy(() => import("../SharedLayout/SharedLayout"));
const Pump = lazy(() => import("../../Pages/Pump"));
const OpenInterest = lazy(() => import("../../Pages/OpenInterest"));
const OrderBook = lazy(() => import("../../Pages/OrderBook"));
const Volumes = lazy(() => import("../../Pages/Volumes"));
const Payment = lazy(() => import("../../Pages/Payment"));
const Success = lazy(() => import("../../Pages/Success"));
const Error = lazy(() => import("../../Pages/Error"));
const NotFound = lazy(() => import("../../Pages/NotFound"));

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SharedLayout />}>
        <Route path="pump" element={<Pump />} />
        <Route path="openinterest" element={<OpenInterest />} />
        <Route path="orderbook" element={<OrderBook />} />
        <Route path="volumes" element={<Volumes />} />
      </Route> */}
      <Route path="/payment/:userId/:screener" element={<Payment />} />
      <Route path="/payment/success" element={<Success />} />
      <Route path="/payment/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
