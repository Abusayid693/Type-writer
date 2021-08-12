import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './user.css';
import bg from '../Assets/Frame.svg';
import SignInError from '../sub-components/Error/SignInError';
import CircularIndeterminate from '../sub-components/Loader/loader';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';

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
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/main');
    }
  }, [history, userInfo]);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
