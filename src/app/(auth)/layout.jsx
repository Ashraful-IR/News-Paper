import NavPage from "@/component/Shared/Navbar/page";


const AuthLayout = ({ children }) => {
  return (
    <>
      <NavPage />
      {children}
    </>
  );
};

export default AuthLayout;
