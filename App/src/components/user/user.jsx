import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "./user.css";
import bg from "../Assets/Frame.svg";

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
  };

    handleRegistrationClick = () =>{
      this.setState({
          doRegisterInstead:false,
        });
    }

  handleClick = () => {
    this.setState({
      redirect: true,
    });
  };

  handleRegistration = () => {
    this.setState({
      doRegisterInstead: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { redirect, doRegisterInstead } = this.state;

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
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
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
      <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
        <div className="form">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="input"
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
            <TextField
              className="input"
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <button onClick={this.handleClick}>
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
