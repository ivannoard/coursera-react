import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

const HeaderComponent = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  return (
    <>
      <Navbar dark className='navbar-dark' expand='md'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <NavbarToggler onClick={() => setNavOpen(!isNavOpen)} />
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            <div className="col-12 col-md-6 ">
              <Collapse isOpen={isNavOpen} navbar >
                <Nav className='ms-auto'>
                  <NavItem>
                    <NavLink className='nav-link text-white' to='/'>
                      <span className='fa fa-home fa-md'>Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className='nav-link text-white' to='/aboutus'>
                      <span className='fa fa-info fa-md'>About Us</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className='nav-link text-white' to='/menu'>
                      <span className='fa fa-list fa-md'>Menu</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className='nav-link text-white' to='/contactus'>
                      <span className='fa fa-address-card fa-md'>Contact Us</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </div>
      </Navbar>
      <div className='jumbotron'>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent