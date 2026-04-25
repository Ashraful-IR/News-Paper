import NavPage from "@/component/Shared/Navbar/page";
import HeaderPage from "../../component/Shared/Header/page";


const MainLayout = ({ children }) => {
  return (
    <>
    <HeaderPage />
      <NavPage />
      {children}
    </>
  );
};

export default MainLayout;
