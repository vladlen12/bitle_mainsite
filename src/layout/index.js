import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
