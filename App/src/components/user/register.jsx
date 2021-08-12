import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './user.css';
import bg from '../Assets/Frame.svg';
import validator from "validator";
import axios from 'axios';
import SignInError from '../sub-components/Error/SignInError';
import CircularIndeterminate from '../sub-components/Loader/loader';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function UserRegistration() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pic,setPic] = useState("null");


  const handleClick = async (e) => {
    e.preventDefault();
    //  Confirming user
    if (password !== confirmPassword)
    setError("Passwords does not match")
    else if (!validator.isEmail(email))
    setError("Invalid email")
    else if (name.length == 0) 
    setError("Invalid name")
    else{
        try {
            const config = {
              headers: {
                "Content-type": "application/json",
              },
            };
    
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
            console.log(data);
          } catch (error) {
            console.log("REGISTRATION ERROR :", error.response.data.message);
            setError(error.response.data.message)
          }
        }


    }

  return (
    <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="form">
      {error && <SignInError text={error} />}
        {loading && <CircularIndeterminate />}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className="input"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            defaultValue=""
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="condirm-password"
            variant="outlined"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick}>
            Register <i class="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
