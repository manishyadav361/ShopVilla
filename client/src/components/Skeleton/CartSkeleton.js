import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CartSkeleton() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Box>
          <Skeleton count={1} width={100} height={110} />
        </Box>
      </SkeletonTheme>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Box className={classes.info}>
          <Skeleton count={1} width={100} />
          <Skeleton count={1} width={180} />

          <Skeleton count={1} />
        </Box>
      </SkeletonTheme>
    </Box>
  );
}

export default CartSkeleton;
