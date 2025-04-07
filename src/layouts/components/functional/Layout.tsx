import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <section className="section-sm">
      <div className="container">
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
