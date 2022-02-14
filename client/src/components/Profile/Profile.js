import { Avatar, Box, Button, Container, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./ProfileStyles";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/Auth";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  // user input data state
  const [updatedData, setUpdatedData] = useState({
    username: user?.result.name || user?.result?.username,
    profileImg: user?.reult?.imageUrl,
  });

  // checks if the the use is authenticated witha custom auth
  const isCustomAuth = user?.token?.length < 500;

  // update the user profile , only if the user is not logged with google auth
  const update = (e) => {
    e.preventDefault();
    dispatch({ type: "START_LOADING" });
    dispatch(updateUser(updatedData, user?.result?._id, navigate));
  };

  useEffect(() => {
    setUpdatedData({ ...updatedData, profileImg: user?.result?.imageUrl });
  }, []);

  return (
    <Container className={classes.container}>
      <Avatar className={classes.avatar} src={updatedData?.profileImg} />
      <TextField
        name="username"
        label="Username"
        autoFocus
        className={classes.textField}
        onChangeCapture={(e) =>
          setUpdatedData({ ...updatedData, username: e.target.value })
        }
        variant="outlined"
        value={updatedData.username}
        disabled={!isCustomAuth && true}
      />
      <TextField
        name="email"
        label="Email"
        value={user?.result?.email}
        autoFocus
        className={classes.textField}
        disabled={true}
        variant="outlined"
      />
      {/* <Box className={classes.imageFile}>
        <input
          type="file"
          name="image"
          disabled={!isCustomAuth ? true : false}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, imageUrl: e.target.files[0] })
          }
        />
      </Box> */}
      <Box className={classes.imageFile}>
        <FileBase
          type="file"
          name="image"
          disabled={!isCustomAuth ? true : false}
          onDone={({ base64 }) =>
            setUpdatedData({ ...updatedData, profileImg: base64 })
          }
        />
      </Box>

      <Button
        onClick={update}
        disabled={!isCustomAuth ? true : false}
        className={classes.button}
        variant="contained"
        type="button"
      >
        Update
      </Button>
    </Container>
  );
}

export default Profile;
