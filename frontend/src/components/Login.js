import React, { Component } from "react";
import { Button,Col, Form, FormGroup, Label, Input , Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import axios from "axios";
// import style from '../css/style.less';


function WarningBanner(props) {
  if (props.warn === false) {
    return (
      <div></div>
    );
  } else {
    return (
      <Alert color="danger">
        The username and password you entered did not match our records. Please check and try again.
      </Alert>
    );
  }
}


class LoginPage extends Component {
  state = {
    username: '',
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

    if (this.props.login_success === true) {
      return <Redirect to="/" />
     }

    return (
      <div className="row ">
        <Col sm={8} xl={4} className="container">
        <h2>Login</h2>
        <Form onSubmit={e => this.props.handle_login(e, this.state)}>
        <FormGroup row>
          <Col sm={12}>
            <WarningBanner warn={this.props.error_login} />        
          </Col>
        <Label for="username" sm={12}>Username</Label>
          <Col sm={12}>
          <Input
          type="text"
          name="username"
          placeholder="Input your username"
          value={this.state.username}
          onChange={this.handle_change}
          />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={12}>Password</Label>
          <Col sm={12}>
            <Input 
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Input your password"
              value={this.state.password}
              onChange={this.handle_change}/>
          </Col>
        </FormGroup>
        <div className="text-right col-sm-12">
          <FormGroup check className="form-check-label col-12 pr-0">
            <Label check>
              <Input type="checkbox" />{' '}
              Remember me
            </Label>
          </FormGroup>
          <Button className="mt-3" type="submit">Login</Button>
        </div>
      </Form>
      </Col>
      </div>
    );
  }
}
 
export default LoginPage;

LoginPage.propTypes = {
  handle_login: PropTypes.func.isRequired,
  error_login: PropTypes.bool.isRequired,
  login_success: PropTypes.bool.isRequired,
};