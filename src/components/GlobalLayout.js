import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
