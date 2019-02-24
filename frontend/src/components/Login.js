import React, { Component } from "react";
import { Button,Col, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <div className="row ">
        <Col sm={6}>
        <h2>Login</h2>
        <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={12}>Email</Label>
          <Col sm={9} md={12} lg={8}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Input your email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={12}>Password</Label>
          <Col sm={9} md={12} lg={8}>
            <Input type="password" name="password" id="examplePassword" placeholder="Input your password" />
          </Col>
        </FormGroup>
        <div className="text-right">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Remember me
            </Label>
          </FormGroup>
          <Button>Login</Button>
        </div>
      </Form>
      </Col>
      </div>
    );
  }
}
 
export {LoginPage};