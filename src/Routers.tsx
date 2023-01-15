import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Sample1Page } from "./pages";
import Template from "./pages/template/Template";

export const PATH = {
  home: "/",
  sample1: "/sample1",
};

const Routers = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.home} element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.sample1} element={<Sample1Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
