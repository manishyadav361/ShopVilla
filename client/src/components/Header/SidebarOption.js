import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./HeaderStyles";

function SidebarOption({ text, Icon, action }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.sidebarOption}
      onClick={action}
      color="primary"
      startIcon={Icon}
      size="large"
    >
      {text}
    </Button>
  );
}

export default SidebarOption;
