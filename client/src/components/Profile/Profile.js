import { Avatar, Box, Button, Container, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import React, { useState } from "react";
import useStyles from "./ProfileStyles";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/Auth";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.Auth);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [updatedData, setUpdatedData] = useState({
    username: user?.result.name || user?.result?.username,
    imageUrl: user?.result?.imageUrl,
    apartment: "",
  });
  const isCustomAuth = user?.token?.length < 500;
  const update = () => {
    dispatch({ type: "START_LOADING" });
    dispatch(updateUser(updatedData, user?.result?._id, navigate));
  };

  return (
    <Container className={classes.container}>
      {state?.loading && <Loader />}
      <Avatar className={classes.avatar} src={updatedData?.imageUrl} />
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
      <Box className={classes.imageFile}>
        <FileBase
          type="file"
          multiple={false}
          // disable={true}
          value={updatedData.imageUrl}
          onDone={({ base64 }) =>
            setUpdatedData({ ...updatedData, imageUrl: base64 })
          }
        />
      </Box>

      <Button
        onClick={update}
        disabled={!isCustomAuth && true}
        className={classes.button}
        variant="contained"
      >
        Update
      </Button>
    </Container>
  );
}

export default Profile;
