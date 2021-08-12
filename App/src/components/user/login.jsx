import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './user.css';
import bg from '../Assets/Frame.svg';
import axios from 'axios';
import SignInError from '../sub-components/Error/SignInError';
import CircularIndeterminate from '../sub-components/Loader/loader';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function UserLogin() {
  const classes = useStyles();
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  useEffect(()=>{

    const userInfo=localStorage.getItem("UserInfo");

    if(userInfo){
        history.push("/main")
    }
  },[history])



  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        'http://localhost:8000/api/users/login',
        {
          email,
          password,
        },
        config,
      );
      localStorage.setItem('UserInfo', JSON.stringify(data));
      console.log(data);
    } catch (error) {
      setError('Invalid login request');
      console.log('LOGIN ERROR :', error.response.data.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    // LOGIN SCREEN VIEW
    <div className="User-page" className={classes.root} style={{ backgroundImage: `url(${bg})` }}>
      <div className="form">
        {error && <SignInError text={error} />}
        {loading && <CircularIndeterminate />}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className="input"
            id="outlined-basic"
            label="email"
            variant="outlined"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="password"
            variant="outlined"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>
            Login <i class="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

