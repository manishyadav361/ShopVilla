import { Box, IconButton } from "@material-ui/core";
import React from "react";
import usestyles from "../Header/HeaderStyles";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ classname }) {
  const classes = usestyles();
  return (
    <Box className={classname}>
      <input
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="Search"
      />
      <IconButton>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
