import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import Pump from "../../Pages/Pump";
import OpenInterest from "../../Pages/OpenInterest";
import OrderBook from "../../Pages/OrderBook";
import Volumes from "../../Pages/Volumes";
import Payment from "../../Pages/Payment";
import Success from "../../Pages/Success";
import Error from "../../Pages/Error";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/payment/:userId/:screener" element={<Payment />} />
      <Route path="/payment/success" element={<Success />} />
      <Route path="/payment/error" element={<Error />} />

      <Route path="/" element={<SharedLayout />}>
        <Route path="pump" element={<Pump />} />
        <Route path="openinterest" element={<OpenInterest />} />
        <Route path="orderbook" element={<OrderBook />} />
        <Route path="volumes" element={<Volumes />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
