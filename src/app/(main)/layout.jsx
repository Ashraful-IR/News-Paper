import NavPage from "@/component/Shared/Navbar/page";
import HeaderPage from "../../component/Shared/Header/page";
import BreakingNews from "../../component/Shared/BreakingNews";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderPage />
      <BreakingNews />
      <NavPage />
      {children}
    </>
  );
};

export default MainLayout;
