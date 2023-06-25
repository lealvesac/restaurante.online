import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "components/NavMenu";
import Home from "pages/Home";
import Menu from "pages/Menu";
import DefaultPage from "components/DefaultPage";
import About from "pages/About";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
