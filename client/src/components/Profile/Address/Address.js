import { Box, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "../ProfileStyles";

function Address({ updatedData, setUpdatedData }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <TextField
        className={classes.textField}
        label="Apartment"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="Street"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="District"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="State"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="Pincode"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="Country"
        variant="outlined"
      />
    </Box>
  );
}

export default Address;
