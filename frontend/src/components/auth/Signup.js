import React, { Component } from "react";
import {Button,Col, FormGroup, Label, Input , Alert} from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './../Validator';

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
    let err_signup,err_username;
    if (this.props.error_signup === true && this.props.error_bcs == null) {
      err_signup = <Alert color="danger text-center">
                    Please make sure you fill the form correctly.
                  </Alert>
    } else {
      err_signup = <div></div>
    }
    if (this.props.error_bcs) {
      err_username = <Alert color="danger text-center">
                      {this.props.error_bcs}
                    </Alert>
    } else {
      err_username = <div></div>
    }
    
    

    if (this.props.signup_success === true) {
      return <Redirect to="/dashboard" />
     }

    return (
      <div className="row signup">
        <Col sm={12}>
          <h2 className="mb-4 mt-3 text-center">Sign Up</h2>
          {err_signup}
          {err_username}
        </Col>
        <Col sm={12} md={10} lg={8}>
        <ValidatorForm
            ref="form"
            onSubmit={e => this.props.handle_signup(e, this.state)}
        >
        <FormGroup row className="text-right">
          <Label for="username" sm={4} md={6}>Username :</Label>
          <Col sm={6}>
            <TextValidator
              type="text"
              name="username"
              placeholder="Enter your username"
              validators={['required', 'matchRegexp:^[a-z0-9]+$']}
              errorMessages={['this field is required', 'username is not valid']}
              value={this.state.username}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="email" sm={4} md={6}>Email :</Label>
          <Col sm={6} >
           <TextValidator
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="password" sm={4} md={6}>Password :</Label>
          <Col sm={6}>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
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
        
      </ValidatorForm>
      </Col>
      </div>
    );
  }
}
 
export default SignUpPage;

SignUpPage.propTypes = {
  handle_signup: PropTypes.func.isRequired
};