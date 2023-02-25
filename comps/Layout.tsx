import { type } from "os";
import Footer from "./Footer";
import Navbar from "./Navbar";
type Props = {
  children: any;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
