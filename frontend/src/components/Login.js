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
          <Col sm={9} md={10} lg={8}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={12}>Password</Label>
          <Col sm={9} md={10} lg={8}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>
        </FormGroup>
        <Button>Login</Button>
      </Form>
      </Col>
      </div>
    );
  }
}
 
export {LoginPage};