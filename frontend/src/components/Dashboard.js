import React, { Component } from 'react';
import { Jumbotron, Button ,Alert,Col} from 'reactstrap';


class Dashboard extends Component {
    render () {
        let login_success,signup_success;
        if (this.props.login_success) {
            login_success = <Alert color="success">
                             Login success!
                            </Alert>
        } else {
            login_success= <div></div>
        }

        if (this.props.signup_success) {
            signup_success = <Alert color="success">
                             Wellcome Abord!
                            </Alert>
        } else {
            signup_success= <div></div>
        }
        return(
            <div className="mt-md-5">
            <Col sm={12}>
                {login_success}
                {signup_success} 
            </Col>
                <Jumbotron>
                    <h1 className="display-3">Hello, {this.props.username}</h1>
                    <p className="lead">This is will be a dashboard, can't wait!</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button color="primary">Exploring</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Dashboard;