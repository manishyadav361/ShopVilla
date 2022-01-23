import { Box, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import usestyles from "../Header/HeaderStyles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getProductsBySearch } from "../../actions/Products";

function SearchBar({ classname }) {
  const classes = usestyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = () => {
    dispatch(getProductsBySearch(query));
    navigate(`/products/search?searchString=${query.split(" ").join("+")}`);
  };

  useEffect(() => {
    if (searchParams.get("searchString")) {
      setQuery(searchParams.get("searchString"));
    } else {
      setQuery("");
    }
  }, []);

  return (
    <Box className={classname}>
      <input
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <IconButton onClick={search}>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
