import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Forms.css";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  width: {
    width: "50%",
  },
  width32: {
    width: "32%",
    margin: theme.spacing(0.5),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    img: "",
    desc: "",
    preptime: "",
    cooktime: "",
    serves: "",
    ingr: [],
  });
  const [ingredients, setIngredients] = useState([{ id: 1, ingr: "" }]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const changeIngrData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setValues({ ...values, ingr: ingredients });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newIngr = { id: ingredients.length + 1, ingr: "" };
    setIngredients([...ingredients, newIngr]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipies", values);
    alert("Recipe is posted", window.location.reload());
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitData}
    >
      <div className="horizont">
        <TextField
          id="namefield"
          label="Name"
          variant="outlined"
          required
          onChange={handleChange}
        />
        <TextField
          id="imgfield"
          label="Image Link"
          variant="outlined"
          required
          onChange={handleChange}
        />
      </div>
      <div className="horizont">
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="preptime">Prep Time</InputLabel>
          <OutlinedInput
            id="preptime"
            name="preptime"
            required
            value={values.preptime}
            endAdornment={
              <InputAdornment position="end">minutes</InputAdornment>
            }
            labelWidth={90}
          />
        </FormControl>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="cooktime">Cook Time</InputLabel>
          <OutlinedInput
            id="cooktime"
            required
            value={values.cooktime}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">minutes</InputAdornment>
            }
            labelWidth={90}
          />
        </FormControl>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="serves">Serve</InputLabel>
          <OutlinedInput
            id="serves"
            required
            value={values.serves}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">persones</InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>
      </div>
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        defaultValue="Write your recipe here"
        variant="outlined"
        required
        onChange={handleChange}
      />
      <div className="horizont-ingr">
        {ingredients.map((_, i) => {
          return (
            <TextField
              key={i}
              id="ingrfield1"
              className={classes.width32}
              label="Ingredients"
              variant="outlined"
              required
              size="small"
              onChange={(e) => changeIngrData(e, i)}
            />
          );
        })}

        <Button id="add" variant="outlined" onClick={addMore}>
          Add more
        </Button>
      </div>

      <Button type="submit" variant="outlined" color="primary">
        Add Recipe
      </Button>
    </form>
  );
}
