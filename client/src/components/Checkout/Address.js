import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { addAddress, getAddress, updateAddress } from "../../actions/Address";
import EditIcon from "@material-ui/icons/Edit";
import Loader from "../Loader";
const Address = ({ setTransform }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialState = {
    aptName: "",
    aptNumber: "",
    landmark: "",
    state: "",
    country: "",
    district: "",
    pincode: "",
    city: "",
  };
  const [updateAdd, setUpdateAdd] = useState(false);
  const { address, loading, error } = useSelector((state) => state.Address);
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [form, setForm] = useState(initialState);

  const add = () => {
    dispatch(addAddress(form));
  };

  const update = () => {
    dispatch(updateAddress(form));
    setUpdateAdd(!updateAdd);
  };

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  useEffect(() => {
    if (address) {
      setForm({ ...address });
    } else {
      setForm(initialState);
    }
  }, [address, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.head}>
        <Typography variant="h6">Address Details</Typography>
        <IconButton
          className={classes.edit}
          onClick={() => setUpdateAdd(!updateAdd)}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box className={classes.addressField}>
        <TextField
          onChange={formHandler}
          size="small"
          name="aptNumber"
          label="Flat/Apt No."
          variant="filled"
          value={form?.aptNumber || ""}
        />
        <TextField
          onChange={formHandler}
          size="small"
          name="aptName"
          label="Apt/Bldg Name"
          variant="filled"
          value={form?.aptName || ""}
        />

        <TextField
          onChange={formHandler}
          size="small"
          name="landmark"
          label="Landmark"
          variant="filled"
          value={form?.landmark || ""}
        />

        <TextField
          onChange={formHandler}
          size="small"
          name="district"
          label="District"
          variant="filled"
          value={form?.district || ""}
        />
        <TextField
          onChange={formHandler}
          size="small"
          name="city"
          label="City"
          variant="filled"
          value={form?.city || ""}
        />
        <TextField
          onChange={formHandler}
          size="small"
          name="state"
          label="State"
          variant="filled"
          value={form?.state || ""}
        />
        <TextField
          onChange={formHandler}
          size="small"
          name="country"
          label="Country"
          variant="filled"
          value={form?.country || ""}
        />
        <TextField
          onChange={formHandler}
          size="small"
          name="pincode"
          label="pincode"
          variant="filled"
          value={form?.pincode || ""}
        />
      </Box>
      {updateAdd && (
        <Button variant="contained" onClick={update}>
          update
        </Button>
      )}
      {!updateAdd && address && (
        <Button variant="contained" onClick={() => setTransform(true)}>
          Continue
        </Button>
      )}

      {!updateAdd && !address && (
        <Button variant="contained" onClick={add}>
          Add
        </Button>
      )}
    </Container>
  );
};

export default Address;
