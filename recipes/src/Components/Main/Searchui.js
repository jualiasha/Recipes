import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  center: {
    justifyContent: "center",
  },
}));

export default function InputWithIcon({ search }) {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid
        container
        spacing={1}
        className={classes.center}
        alignItems="flex-end"
      >
        <Grid item>
          <SearchIcon style={{ fontSize: 35 }} />
        </Grid>
        <Grid item>
          <TextField id="search" label="Find recipe" onChange={search} />
        </Grid>
      </Grid>
    </div>
  );
}
