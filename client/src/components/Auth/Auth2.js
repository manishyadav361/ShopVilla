import {
  Box,
  Button,
  Container,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./AuthStyles";
import GoogleLogin from "react-google-login";
import GoogleLogo from "../../images/google-logo-9824.png";
import { signUp, signIn } from "../../actions/Auth";
import Loader from "../Loader";
function Auth() {
  const [toggle, setToggle] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Auth);
  const history = useNavigate();

  const required = (value) => {
    if (!value.toString().trim().length) {
      return "require";
    }
  };

  useEffect(() => {
    if (state.error) {
      console.log(state.error);
    }
  }, [state.error]);

  const register = () => {
    dispatch(signUp(formData, history));
  };
  const login = () => {
    dispatch(signIn(formData, history));
  };

  const googleFailure = (response) => {
    console.log(response);
  };

  const googleSuccess = (response) => {
    const result = response.profileObj;
    const token = response.tokenId;
    dispatch({ type: "SIGNIN", payload: { result, token } });
    history("/");
  };

  return (
    <>
      <Container className={classes.container}>
        {state?.loading && <Loader />}

        <Box className={classes.logo}></Box>
        {toggle && state?.error && (
          <Typography color="secondary"> {state?.error}</Typography>
        )}
        {toggle && (
          <TextField
            className={classes.textField}
            variant="outlined"
            required
            label="Username"
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        )}
        {!toggle && state?.error && (
          <Typography color="secondary"> {state?.error}</Typography>
        )}
        <TextField
          className={classes.textField}
          variant="outlined"
          required
          label="Email"
          size="small"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />

        <TextField
          className={classes.textField}
          variant="outlined"
          required
          label="Password"
          type="password"
          size="small"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />

        {toggle && (
          <TextField
            className={classes.textField}
            variant="outlined"
            required
            type="password"
            label="Re-enter Password"
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        )}
        {toggle ? (
          <Button
            onClick={register}
            className={classes.authBtn}
            variant="contained"
          >
            Sign Up
          </Button>
        ) : (
          <Button
            onClick={login}
            className={classes.authBtn}
            variant="contained"
          >
            Sign In
          </Button>
        )}
        <p>OR</p>
        <GoogleLogin
          buttonText="Google"
          clientId="527556148951-o5flri3utm5tr4743fs002frrosv7op.apps.googleusercontent.com"
          render={(renderProps) => (
            <>
              <Button
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="outlined"
                className={classes.google}
              >
                <img
                  className={classes.googleLogo}
                  src={GoogleLogo}
                  alt={GoogleLogo}
                />
                Google
              </Button>
            </>
          )}
          cookiePolicy={"single_host_origin"}
          onSuccess={googleSuccess}
          onfailure={googleFailure}
          autoLoad={false}
        />
        {!toggle ? (
          <Typography
            onClick={() => setToggle(!toggle)}
            className={classes.typography}
          >
            Dont have an account? Sign Up
          </Typography>
        ) : (
          <Typography
            onClick={() => setToggle(!toggle)}
            className={classes.typography}
          >
            Already have an account? Sign In
          </Typography>
        )}
      </Container>
    </>
  );
}

export default Auth;
