import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import { UserLayout } from "./components/UserLayout";

import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Articles } from "./pages/Articles";
import { Detail } from "./pages/Detail";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/:articleId" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;
