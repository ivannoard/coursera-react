import MenuComponent from "./MenuComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishdetailComponent from "./DishdetailComponent";

const Main = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Routes>
        {/* filter through array of object when it find the correct data it will become an array with one object and then use index 0 to get the object */}
        <Route exact path="/" element={<Home dishes={DISHES.filter(item => item.featured)[0]} leaders={LEADERS.filter(item => item.featured)[0]} promotion={PROMOTIONS.filter(item => item.featured)[0]} />} />
        <Route exact path="/menu" element={<MenuComponent dishes={DISHES} />} />
        <Route path='/menu/:id' element={<DishdetailComponent dish={DISHES} comments={COMMENTS} />} />
        <Route path="/contactus" element={<Contact />} />
        <Route
          path="*"
          element={<Navigate to='/' />}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default Main;
