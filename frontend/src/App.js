import React, { Component } from 'react';
import './App.css';
import JumbotronHome from './components/Jumbotron';
import { Container } from 'reactstrap';
import {TopNavGuest,TopNavUser} from './components/Nav';
import Footer from './components/Footer';
import LoginPage from "./components/Login"
import SignUpPage from "./components/Signup" 
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

function Navigation(props) {
  const logged_out_nav = (
    <TopNavGuest/>
  );
  const logged_in_nav = (
    <TopNavUser logout={props.handle_logout}/>
    // <ul>
    //   <li onClick={props.handle_logout}>logout</li>
    // </ul>
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
          login_success: true
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
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };
  
  display_form = form => {
    this.setState({
      displayed_form: form,
    });
  };


  render() {
    return (
     <div className="content">
      <Router>
        <Navbar light expand="sm" className="top mb-3 navbar navbar-dark bg-dark">
          <NavbarBrand href="/">Auth</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Navigation
            isOpen={this.state.isOpen}
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            />
        </Navbar>
          <Container>
              <Route exact path="/"
              render={(props) =>
                <JumbotronHome {...props} login_success={this.state.login_success}/>
              }
              />
              <Route path="/login"
                render={(props) =>
                  <LoginPage {...props} login_success={this.state.logged_in} error_login={this.state.error_login} handle_login={this.handle_login}/>}
              />
              <Route path="/signup"
                render={(props) =>
                  <SignUpPage {...props} handle_signup={this.handle_signup}/>}
              />
          </Container>
          <Footer />
          </Router>
      </div>
     );
  }
}

export default App;