import MenuComponent from "./MenuComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishdetailComponent from "./DishdetailComponent";
import About from "./AboutComponent";
import { useEffect } from "react";
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => {

  const DISHES = useSelector((state) => state.dishes)
  const LEADERS = useSelector((state) => state.leaders)
  const PROMOTIONS = useSelector((state) => state.promotions)
  const COMMENTS = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  const resetFeedbackForm = () => {
    dispatch(actions.reset('feedback'))
  }

  useEffect(() => {
    dispatch(fetchDishes())
    dispatch(fetchComments())
    dispatch(fetchPromos())
    dispatch(fetchLeaders())
  }, []);

  console.log(LEADERS);

  return (
    <div className="app">
      <HeaderComponent />
      <TransitionGroup>
        <CSSTransition classNames='pages' timeout={300}>
          <Routes>
            {/* filter through array of object when it find the correct data it will become an array with one object and then use index 0 to get the object */}
            <Route exact path="/" element={<Home dishes={DISHES.isLoading ? '' : DISHES.dishes.filter(item => item.featured)[0]} leaders={LEADERS.isLoading ? '' : LEADERS.leaders.filter(item => item.featured)[0]} leadersLoading={LEADERS.isLoading} promotion={PROMOTIONS.isLoading ? '' : PROMOTIONS.promotions.filter(item => item.featured)[0]} promoLoading={PROMOTIONS.isLoading} promoErr={PROMOTIONS.errMess} dishesLoading={DISHES.isLoading} err={DISHES.err} />} />

            <Route exact path="/menu" element={<MenuComponent dishes={DISHES.isLoading ? [] : DISHES.dishes} dishesLoading={DISHES.isLoading} err={DISHES.err} />} />

            <Route path='/menu/:id' element={<DishdetailComponent dish={DISHES.isLoading ? [] : DISHES.dishes} comments={COMMENTS.isLoading ? [] : COMMENTS.comment} dishesLoading={DISHES.isLoading} err={DISHES.err} />} />

            <Route path='/aboutus' element={<About leaders={LEADERS.leaders} />} />
            <Route path="/contactus" element={<Contact resetFeedbackForm={resetFeedbackForm} />} />
            <Route
              path="*"
              element={<Navigate to='/' />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <FooterComponent />
    </div>
  );
}

export default Main;
