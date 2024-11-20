import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import Pump from "../../Pages/Pump";
import OpenInterest from "../../Pages/OpenInterest";
import OrderBook from "../../Pages/OrderBook";
import Volumes from "../../Pages/Volumes";
import Payment from "../../Pages/Payment";
import Success from "../../Pages/Success";
import Error from "../../Pages/Error";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {<Route path="/pump" element={<Pump />} />}
        {<Route path="/openinterest" element={<OpenInterest />} />}
        {<Route path="/orderbook" element={<OrderBook />} />}
        {<Route path="/volumes" element={<Volumes />} />}
      </Route>
      {<Route path="/payment/:userId/:screener" element={<Payment />} />}
      {<Route path="/payment/success" element={<Success />} />}
      {<Route path="/payment/error" element={<Error />} />}
    </Routes>
  );
};
