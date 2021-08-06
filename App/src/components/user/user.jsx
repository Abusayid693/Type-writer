import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "./user.css";
import bg from "../Assets/Frame.svg";
import SignInError from "../sub-components/Error/SignInError";
import CircularIndeterminate from "../sub-components/Loader/loader";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

class User extends React.Component {
  state = {
    redirectToMainPage: false,
    doRegisterInstead: false,
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    LoadingEffect: false,
    error: false,
    registrationError: false,
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  setConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  setName = (event) => {
    this.setState({ name: event.target.value });
  };

  // handle regisration
  handleRegistrationClick = async (e) => {
    e.preventDefault();
    const email = this.state.email,
      password = this.state.password,
      confirmPassword = this.state.confirmPassword,
      name = this.state.name,
      pic = "null";
    //  Confirming user
    if (password !== confirmPassword)
      this.setState({ registrationError: "Passwords does not match" });
    else if (!validator.isEmail(email))
      this.setState({ registrationError: "Please enter valid email" });
    else if (name.length == 0)
      this.setState({ registrationError: "User Name is required" });
    else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        this.setState({ LoadingEffect: true });

        const { data } = await axios.post(
          "http://localhost:8000/api/users",
          {
            name,
            email,
            password,
            pic,
          },
          config
        );
      } catch (error) {
        console.log("REGISTRATION ERROR :", error.response.data.message);
        this.setState({ error: error.response.data.message });
      }
      this.setState({ LoadingEffect: false });
      this.setState({ doRegisterInstead: false });
    }
  };

  // Handle login
  handleLogin = async (e) => {
    this.setState({ error: false });
    e.preventDefault();
    const email = this.state.email,
      password = this.state.password;
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      this.setState({ LoadingEffect: true });
      const { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("UserInfo", JSON.stringify(data));
      console.log(data);
      this.setState({ LoadingEffect: false });
      this.setState({ redirectToMainPage: true });
    } catch (error) {
      console.log("LOGIN ERROR :", error.response.data.message);
      this.setState({ error: error.response.data.message });
      this.setState({ LoadingEffect: false });
    }
  };

  // show registration screen
  handleRegistration = () => {
    this.setState({
      doRegisterInstead: true,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      redirectToMainPage,
      doRegisterInstead,
      email,
      password,
      name,
      error,
      LoadingEffect,
      registrationError,
    } = this.state;

    if (redirectToMainPage) {
      return <Redirect to="/main" />;
    } else if (doRegisterInstead) {
      // User registration
      return (
        <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
          <div className="form">
            {registrationError && <SignInError text={registrationError} />}
            {LoadingEffect && <CircularIndeterminate />}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                defaultValue=""
                value={email}
                onChange={this.setEmail}
                required={true}
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={this.setPassword}
                required={true}
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="condirm-password"
                variant="outlined"
                onChange={this.setConfirmPassword}
                required={true}
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={this.setName}
                required={true}
              />
              <button onClick={this.handleRegistrationClick}>
                Register <i class="fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
        </div>
      );
    }

    return (
      // LOGIN
      <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
        <div className="form">
          {error && <SignInError text={error} />}
          {LoadingEffect && <CircularIndeterminate />}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="input"
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={email}
              onChange={this.setEmail}
              required={true}
            />
            <TextField
              className="input"
              id="outlined-basic"
              label="password"
              variant="outlined"
              value={password}
              onChange={this.setPassword}
              required={true}
            />
            <button onClick={this.handleLogin}>
              Login <i class="fas fa-chevron-right"></i>
            </button>
            <button onClick={this.handleRegistration}>
              Register here <i class="fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(User);
