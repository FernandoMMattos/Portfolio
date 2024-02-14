import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function Preset() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
