import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Pump from "../../Pages/Pump";
import OpenInterest from "../../Pages/OpenInterest";
import OrderBook from "../../Pages/OrderBook";
import Volumes from "../../Pages/Volumes";
import Payment from "../../Pages/Payment";

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
    </Routes>
  );
};
