import MenuComponent from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './HomeComponent';

function Main() {
  return (
    <div className="app">
      <HeaderComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<MenuComponent dishes={DISHES} />} />
        <Route
          path="*"
          element={<Navigate to='/' />}
        />
      </Routes>
      {/* <MenuComponent dishes={DISHES} /> */}
      <FooterComponent />
    </div>
  );
}

export default Main;
