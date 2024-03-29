import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, PortfolioPage, Sample1Page } from "./pages";
import Template from "./pages/template/Template";
import { AnimatePresence } from "framer-motion";
import { PATH } from "./constants/path";

const Routers = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path={PATH.home} element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.portfolio} element={<PortfolioPage />} />
          <Route path={PATH.blogs} element={<Sample1Page />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
