import { MenuList } from "../MenuList/MenuList";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import Pump from "../../Pages/Pump";
import css from "./App.module.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {<Route path="/pump" element={<Pump />} />}
      </Route>
    </Routes>
  );
};
