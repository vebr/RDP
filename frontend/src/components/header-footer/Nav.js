import React , { Component } from 'react';
import {NavLink} from "react-router-dom";
import { Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

class Navs extends Component {
    render() {
        return(
            <NavItem onClick={this.props.clicked}>
               <NavLink exact to={this.props.link} className="nav-link">
                {this.props.name}
               </NavLink>
            </NavItem>
        )
    }
}

class TopNavGuest extends Component {
    render() {
        return (
            <Nav className="ml-auto" navbar>
              <Navs link="/" name="Home"/>
              <Navs link="/login" name="Login"/>
              <Navs link="/signup" name="Sign Up"/>
            </Nav>
        )
    }
}


class TopNavUser extends Component {
    render() {
        return (
            <Nav className="ml-auto" navbar>
              <Navs link="/dashboard" name="Dashboard"/>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink exact to="/settings" activeClassName="dropdown-item p-0" className="dropdown-item p-0">
                        Settings
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.logout}>
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        )
    }
}



export {TopNavGuest, TopNavUser};