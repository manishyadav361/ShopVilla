import { Box, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import usestyles from "../Header/HeaderStyles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProductsBySearch } from "../../actions/Products";

function SearchBar({ classname }) {
  const classes = usestyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = () => {
    dispatch(getProductsBySearch(query));
    navigate(`/products/search?searchString=${query.split(" ").join("+")}`);
  };
  const updateQuery = (e) => {
    if (e.keyCode === 13) {
      search();
    }
  };

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
