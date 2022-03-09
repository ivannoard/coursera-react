import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from "./MenuComponent";
import { DISHES } from "../shared/dishes";

function Main() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={DISHES} />
    </div>
  );
}

export default Main;
