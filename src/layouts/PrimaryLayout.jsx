import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;