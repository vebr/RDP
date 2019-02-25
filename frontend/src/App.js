import React, { Component } from 'react';
import './App.css';
import JumbotronHome from './components/Jumbotron';
import { Container } from 'reactstrap';
import {TopNavGuest,TopNavUser} from './components/header-footer/Nav';
import Footer from './components/header-footer/Footer';
import LoginPage from "./components/auth/Login"
import SignUpPage from "./components/auth/Signup"
import Dashboard from "./components/Dashboard" 
import {BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
import { PrivateRoute } from './components/auth/PrivateRoute';

function Navigation(props) {
  const logged_out_nav = (
    <TopNavGuest/>
  );
  const logged_in_nav = (
    <TopNavUser logout={props.handle_logout} username={props.username}/>
  );
  return <Collapse isOpen={props.isOpen} navbar>{props.logged_in ? logged_in_nav : logged_out_nav}</Collapse>;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      error_login: false ,
      login_success: false,
      username:'',
      loading: false,
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://192.168.88.30:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://192.168.88.30:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          localStorage.setItem('token', json.token);
          this.setState({
          error_login: false,
          logged_in: true,
          displayed_form: '',
          username: json.user.username,
          login_success: true,
          loading: false,
          });
          setTimeout(
            function() {
                this.setState({login_success: false});
            }
            .bind(this),
            3000
        );
          // this.props.history.push('/users');
        } else {
          this.setState({
            error_login: true,
            });
        }
      })
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://192.168.88.30:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          localStorage.setItem('token', json.token);
          this.setState({
            error_signup: false,
            logged_in: true,
            username: json.username,
            signup_success: true,
            loading: false,
            });
          setTimeout(
            function() {
                this.setState({signup_success: false});
            }
            .bind(this),
            3000
          );
          // this.props.history.push('/users');
        } else {
          console.log(json.username[0]);
          this.setState({
            error_signup: true,
            error_bcs: json.username[0]
            });
        }
      })
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', logged_out: true, error_login:false });
    setTimeout(
      function() {
          this.setState({logged_out: false});
      }
      .bind(this),
      2000
    );
  };

  render() {
    let home,log_out;
    if (this.state.loading) {
      home = <div></div>
    } else {
      home =  <Route exact path="/"
                     render={(props) =>
                       <JumbotronHome {...props} signup_success={this.state.signup_success} login_success={this.state.login_success}/>}/>
    }

    if (this.state.logged_out) {
      log_out= <Redirect to="/login" />
     } else {
       log_out = <div></div>
     }
    return (
     <div className="content pb-5">
      <Router>
        <Navbar light expand="sm" className="top mb-3 navbar navbar-dark bg-dark">
          <NavbarBrand href="/">Project S</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Navigation
            isOpen={this.state.isOpen}
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            username={this.state.username}
            />
        </Navbar>
          <Container>
              { home }
              {log_out}
              <div>
              <Route path="/login"
                render={(props) =>
                  <LoginPage {...props} log_out={this.state.logged_out} login_success={this.state.logged_in} error_login={this.state.error_login} handle_login={this.handle_login}/>}
              />
              <Route path="/signup"
                render={(props) =>
                  <SignUpPage {...props} error_bcs={this.state.error_bcs}
                                         error_signup={this.state.error_signup}
                                         signup_success={this.state.signup_success}
                                         handle_signup={this.handle_signup}/>}
              />
              <PrivateRoute exact path="/dashboard" component={(props) =>
                       <Dashboard {...props}  username={this.state.username} signup_success={this.state.signup_success} login_success={this.state.login_success}/>}
              />
              </div>
          </Container>
          <Footer />
          </Router>
      </div>
     );
  }
}

export default App;