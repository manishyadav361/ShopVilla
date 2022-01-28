import React, { useState } from "react";
import useStyles from "./ProductsStyles";
import FilterListIcon from "@material-ui/icons/FilterList";
import SortIcon from "@material-ui/icons/Sort";
import { Box, Button } from "@material-ui/core";
function FilterOption() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const modal = () => {
    setToggle(!toggle);
  };

  return (
    <Box className={classes.filter}>
      <Box className={classes.filterOption}>
        <Button
          variant="contained"
          className={classes.fBtn}
          color="primary"
          startIcon={<FilterListIcon />}
          onClick={modal}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          className={classes.fBtn}
          color="primary"
          endIcon={<SortIcon />}
          onClick={modal}
        >
          Sort
        </Button>
      </Box>

      <Box
        className={
          toggle
            ? `${classes.openModal} ${classes.closeModal}`
            : `${classes.closeModal}`
        }
      >
        <Box className={classes.filterOption}>
          <Button
            color="primary"
            onClick={modal}
            variant="outlined"
            className={classes.fBtn}
          >
            close
          </Button>
          <Button
            color="primary"
            onClick={modal}
            variant="outlined"
            className={classes.fBtn}
          >
            apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FilterOption;
