import { Avatar, Box, Button, Container, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import React, { useState } from "react";
import useStyles from "./ProfileStyles";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/Auth";
import { useNavigate } from "react-router-dom";
function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [updatedData, setUpdatedData] = useState({
    username: user?.result.name || user?.result?.username,
    imageUrl: user?.result?.imageUrl,
    apartment: "",
  });

  const isCustomAuth = user?.token?.length < 500;
  const image = user?.result?.imageUrl?.slice(37);
  const formData = new FormData();
  formData.append("image", updatedData?.imageUrl);

  formData.append("username", updatedData?.username);
  formData.append("imageToDelete", image);
  console.log(image);
  const update = (e) => {
    e.preventDefault();
    dispatch({ type: "START_LOADING" });
    dispatch(updateUser(formData, user?.result?._id, navigate));
  };
  return (
    <Container className={classes.container}>
      <Avatar className={classes.avatar} src={user?.result?.imageUrl || ""} />
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
        {/* <FileBase
          type="file"
          multiple={false}
          // disable={true}
          value={updatedData.imageUrl}
          onDone={({ base64 }) =>
            setUpdatedData({ ...updatedData, imageUrl: base64 })
          }
        /> */}
        <input
          type="file"
          name="image"
          onChange={(e) =>
            setUpdatedData({ ...updatedData, imageUrl: e.target.files[0] })
          }
        />
      </Box>

      <Button
        onClick={update}
        disabled={!isCustomAuth && true}
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
