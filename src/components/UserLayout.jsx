import {NavBar} from "./NavBar";
import Footer from "./Footer";
import {Outlet} from 'react-router-dom';

export const UserLayout = () => {


  return (
    <div className="d-flex flex-column justify-content-between">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};