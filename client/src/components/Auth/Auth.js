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
import { RESET_ERROR } from "../../actionTypes/actionTypes";
function Auth() {
  const [toggle, setToggle] = useState(false);
  const [errors, setErrors] = useState({
    email: { required: false, message: "", valid: true },
    password: { required: false, message: "" },
    confirmPassword: { required: false },
    username: { required: false },
  });

  const [error, setError] = useState(false);

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

  // validating whether the input is empty is not
  const required = (e) => {
    if (e.target.value.length < 1) {
      setErrors({
        ...errors,
        [e.target.name]: { required: true },
      });
      setError(true);
    } else {
      setErrors({
        ...errors,
        [e.target.name]: { required: false },
      });
      setError(false);
    }
  };
  // validating password
  const password = (e) => {
    if (e.target.value.length < 6) {
      setErrors({
        ...errors,
        [e.target.name]: {
          message: "password must be atleast 6 character long.",
        },
      });
      setError(true);
    } else {
      setError(false);
    }
  };

  // validating email
  const emailCheck = (e) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(e.target.value)) {
      setErrors({
        ...errors,
        email: { ...errors.email, message: "", valid: true },
      });
      setError(false);
    } else {
      setErrors({ ...errors, error: true });
      setError(true);

      setErrors({
        ...errors,
        email: { ...errors.email, message: "Invalid email", valid: false },
      });
    }
  };

  const registerUser = () => {
    if (!error) {
      dispatch(signUp(formData, history));
    }
  };
  const login = () => {
    if (!error) {
      dispatch(signIn(formData, history));
    }
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

  useEffect(() => {
    dispatch({ type: RESET_ERROR });
    console.log("toggle");
  }, [toggle]);

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
            label="Username"
            name="username"
            size="small"
            error={errors.username.required ? true : false}
            helperText={errors.username.required}
            onChange={(e) => {
              required(e);
              setFormData({ ...formData, username: e.target.value });
            }}
          />
        )}
        {!toggle && state?.error && (
          <Typography variant="body2" color="secondary">
            {" "}
            {state?.error}
          </Typography>
        )}
        <TextField
          className={classes.textField}
          variant="outlined"
          name="email"
          required
          label="Email"
          size="small"
          error={!errors.email.valid || errors.email.required ? true : false}
          helperText={errors.email.message}
          onChange={(e) => {
            required(e);
            emailCheck(e);
            setFormData({ ...formData, email: e.target.value });
          }}
          autoFocus={false}
        />
        {errors.email.required && "The field is required."}

        <TextField
          className={classes.textField}
          variant="outlined"
          required
          error={
            errors.password.required || errors.password.message ? true : false
          }
          helperText={errors.password.required || errors.password.message}
          label="Password"
          name="password"
          type="password"
          size="small"
          onChange={(e) => {
            required(e);
            password(e);
            setFormData({ ...formData, password: e.target.value });
          }}
        />

        {toggle && (
          <TextField
            className={classes.textField}
            variant="outlined"
            required
            error={
              errors.confirmPassword.required || errors.confirmPassword.message
                ? true
                : false
            }
            helperText={
              errors.confirmPassword.required || errors.confirmPassword.message
            }
            name="confirmPassword"
            type="password"
            label="Re-enter Password"
            size="small"
            onChange={(e) => {
              required(e);
              password(e);
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
          />
        )}

        {toggle ? (
          <Button
            onClick={registerUser}
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
          clientId="52755614951-o5flrki3utm5tr4743fs002frrosv7op.apps.googleusercontent.com"
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
