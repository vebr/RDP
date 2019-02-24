import React, { Component } from 'react';
import { Jumbotron, Button ,Alert,Col} from 'reactstrap';
import PropTypes from 'prop-types';

function LoginSuccess(props) {
    if (props.success === false) {
      return (
        <div></div>
      )
    } else {
      return (
        <Alert color="success">
          Login success!
        </Alert>
      )
    }
  }
  
class JumbotronHome extends Component {
    render () {
        return(
            <div className="mt-5">
            <Col sm={12}>
                <LoginSuccess success={this.props.login_success} />        
            </Col>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default JumbotronHome;

JumbotronHome.propTypes = {
    login_success: PropTypes.bool.isRequired,
  };