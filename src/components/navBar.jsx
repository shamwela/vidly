import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import './navBar.css'

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav id='links' className='mr-auto' navbar>
            <NavItem>
              <NavLink to='/movies'>Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/customers'>Customers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/rentals'>Rentals</NavLink>
            </NavItem>
            {!user && (
              <>
                <NavItem>
                  <NavLink to='/login'>Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/register'>Register</NavLink>
                </NavItem>
              </>
            )}
            {user && (
              <>
                <NavItem>
                  <NavLink to='/profile'>{user.name}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/logout'>Logout</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
