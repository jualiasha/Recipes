import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Forms.css";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    preptime: "",
    cooktime: "",
    serves: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="namefield"
        label="Name"
        variant="outlined"
        required
        helperText="Required field"
      />
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        defaultValue="Description"
        variant="outlined"
        required
        helperText="Required field"
      />
      <TextField
        id="imgfield"
        label="Image Link"
        variant="outlined"
        required
        helperText="Required field"
      />
      <TextField
        id="ingrfield"
        label="Ingredients"
        variant="outlined"
        required
        helperText="Required field"
      />
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="preptime">Prep Time</InputLabel>
        <OutlinedInput
          id="preptime"
          required
          value={values.preptime}
          onChange={handleChange("preptime")}
          endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="cooktime">Cook Time</InputLabel>
        <OutlinedInput
          id="cooktime"
          required
          value={values.cooktime}
          onChange={handleChange("cooktime")}
          endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="serve">Serve</InputLabel>
        <OutlinedInput
          id="serve"
          required
          value={values.serves}
          onChange={handleChange("serves")}
          endAdornment={
            <InputAdornment position="end">persones</InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>

      <Button variant="outlined" color="primary">
        Add Recipe
      </Button>
    </form>
  );
}
