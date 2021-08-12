import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './user.css';
import bg from '../Assets/Frame.svg';
import validator from 'validator';
import SignInError from '../sub-components/Error/SignInError';
import CircularIndeterminate from '../sub-components/Loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/user';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [pic, setPic] = useState('null');

  const dispatch = useDispatch();

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, error, userInfo } = userRegistration;

  useEffect(() => {
    if (userInfo) {
      history.push('/main');
    }
  }, [history,userInfo]);


  const handleClick = async (e) => {
    e.preventDefault();
    //  Confirming user
    if (password !== confirmPassword) setMessage('Passwords does not match');
    else if (!validator.isEmail(email)) setMessage('Invalid email');
    else if (name.length == 0) setMessage('Invalid name');
    else {
      dispatch(register(email, password, name, pic));
      setMessage(false);
    }
  };

  return (
    <div className="User-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="form">
        {error && <SignInError text={error} />}
        {message && <SignInError text={message} />}
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
