import React, { Component } from "react";
import {Button,Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class SignUpPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="row signup">
        <Col sm={12} md={10} lg={8}>
        <h2>Sign Up</h2>
        <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <FormGroup row className="text-right">
          <Label for="username" sm={4} md={6}>Username :</Label>
          <Col sm={6}>
            <Input
              type="text"
              name="username"
              placeholder="Enter your password username"
              value={this.state.username}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="email" sm={4} md={6}>Email :</Label>
          <Col sm={6} >
           <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="password" sm={4} md={6}>Password :</Label>
          <Col sm={6}>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={this.state.password}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <FormGroup check className="text-right col-md-12 col-sm-10 form-check p-0">
          <Label check className="p-0 col-12 text-right-approval">
            <Input type="checkbox" />{' '}
            Approval bla bla bla
          </Label>
        </FormGroup>
        <div className="text-right-approval col-md-12 col-sm-10 p-0">
        <Button className="mt-3" type="submit">Sign Up</Button>
        </div>
        
      </Form>
      </Col>
      </div>
    );
  }
}
 
export default SignUpPage;

SignUpPage.propTypes = {
  handle_signup: PropTypes.func.isRequired
};