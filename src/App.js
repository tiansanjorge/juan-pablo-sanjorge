import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserLayout } from "./components/UserLayout";

import { Home } from "./pages/Home";
import { Info } from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
