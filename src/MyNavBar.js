import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './MyNavBar.css';

class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedRealm: {name:'TIGOTZ',id:401}
    };
  }
  selectOption(val) {
    this.setState({ selectedRealm: val});
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    var realms = [{name:'TIGOTZ',key:401},{name:'OORTN',key:461},{name:'ATTMEX',key:481}];
    var dropdownOptions = realms.map((realm) => {
      return <DropdownItem key={`${realm.name}_{realm.id}`} 
      onClick={()=>this.selectOption(realm)}>{realm.name}</DropdownItem>;
    });
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MEP Admin V2</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Selected realm: {this.state.selectedRealm.name}
                </DropdownToggle>
                <DropdownMenu right>
                  {dropdownOptions}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Manager users
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavBar;
