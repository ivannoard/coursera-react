import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const HeaderComponent = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const handleLogin = (e) => {
    alert(`username: ${username.value}; password: ${password.value}; remember: ${remember.checked}`)
    e.preventDefault();

  }

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
                  <NavItem>
                    <Button className='bg-primary' onClick={() => setIsModal(!isModal)}>Login</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </div>
      </Navbar>
      {
        isModal && (
          <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
            <ModalHeader toggle={() => setIsModal(!isModal)}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <Label htmlFor='username'>Username</Label>
                  <Input type='text' id='username' name='username' innerRef={(input) => setUsername(input)} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='password'>Password</Label>
                  <Input type='password' id='password' name='password' innerRef={(input) => setPassword(input)} />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type='checkbox' id='remember' name='remember' innerRef={(input) => setRemember(input)} />
                    Remember Me
                  </Label>
                </FormGroup>
                <Button type='submit' >Login</Button>
              </Form>
            </ModalBody>
          </Modal>)
      }
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