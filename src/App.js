import './App.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar
        color="primary"
        expand="md"
        container="lg"
        dark
      >
        <NavbarBrand href="/">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/components/">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
