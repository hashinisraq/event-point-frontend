import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
