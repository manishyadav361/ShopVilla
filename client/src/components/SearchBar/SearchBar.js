import { Box, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import usestyles from "../Header/HeaderStyles";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function SearchBar({ classname }) {
  const classes = usestyles();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // route to a product page
  const search = () => {
    navigate(`/products/search?searchString=${query?.split(" ").join("+")}`);
  };

  // whenever the user hits the enter button the search would execute
  const updateQuery = (e) => {
    if (e.keyCode === 13) {
      search();
    }
  };

  // sets the input search field every time the page refreshes
  useEffect(() => {
    if (searchParams.get("searchString")) {
      setQuery(searchParams.get("searchString"));
    } else {
      setQuery("");
    }
  }, [location]);

  return (
    <Box className={classname}>
      <input
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={updateQuery}
        value={query}
      />
      <IconButton onClick={search}>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
