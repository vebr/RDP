import React, { Component } from "react";
import {Button,Col, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpPage extends Component {
  render() {
    return (
      <div className="row signup">
        <Col sm={12} md={10} lg={8}>
        <h2>Sign Up</h2>
        <Form>
        <FormGroup row className="text-right">
          <Label for="exampleEmail" sm={4} md={6}>Name :</Label>
          <Col sm={6}>
            <Input type="text" name="name" id="name" placeholder="Enter your name here" />
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="exampleEmail" sm={4} md={6}>Email :</Label>
          <Col sm={6} >
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email here" />
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="examplePassword" sm={4} md={6}>Password :</Label>
          <Col sm={6}>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter your password here" />
          </Col>
        </FormGroup>
        <FormGroup row className="text-right">
          <Label for="examplePassword" sm={4} md={6}>Re-type Password :</Label>
          <Col sm={6}>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter your password again" />
          </Col>
        </FormGroup>
        <FormGroup check className="text-right col-md-12 col-sm-10 form-check p-0">
          <Label check className="p-0 col-12 text-right-approval">
            <Input type="checkbox" />{' '}
            Approval bla bla bla
          </Label>
        </FormGroup>
        <div className="text-right-approval col-md-12 col-sm-10 p-0">
        <Button className="mt-3">Sign Up</Button>
        </div>
        
      </Form>
      </Col>
      </div>
    );
  }
}
 
export {SignUpPage};