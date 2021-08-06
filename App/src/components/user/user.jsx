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
    redirect: false,
    doRegisterInstead: false,
    email: "",
    password: "",
    name: "",
    serLoading: "false",
    error: false,
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  setName = (event) => {
    this.setState({ name: event.target.value });
  };

  // handle regisration
  handleRegistrationClick = () => {
    this.setState({  doRegisterInstead: false });









    alert(this.state.email);
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
      this.setState({ setLoading: true });
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
      this.setState({ setLoading: false });

    } catch (error) {
      console.log("LOGIN ERROR :", error.response.data.message);
      this.setState({ error: error.response.data.message });
      this.setState({ setLoading: false });
    }

    // this.setState({
    //   redirect: true,
    // });
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
      redirect,
      doRegisterInstead,
      email,
      password,
      name,
      error,
      setLoading,
    } = this.state;

    if (redirect) {
      return <Redirect to="/main" />;
    } else if (doRegisterInstead) {
      return (
        <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
          <div className="form">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                defaultValue=""
                value={email}
                onChange={this.setEmail}
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={this.setPassword}
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="condirm-password"
                variant="outlined"
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={this.setName}
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
          {setLoading && <CircularIndeterminate />}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="input"
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={email}
              onChange={this.setEmail}
            />
            <TextField
              className="input"
              id="outlined-basic"
              label="password"
              variant="outlined"
              value={password}
              onChange={this.setPassword}
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
