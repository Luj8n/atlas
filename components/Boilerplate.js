import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  //
}));

export default function Boilerplate() {
  const classes = useStyles();

  return (
    <>
      <Typography>Boilerplate</Typography>
    </>
  );
}
