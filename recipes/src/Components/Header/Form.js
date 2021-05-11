import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import "./Forms.css";

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
  width98: {
    width: "98%",
  },
  width34: {
    width: "34%",
    marginLeft: "0.8rem",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    img: "",
    category: "",
    ingrnumber: "1",
    description: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
  });
  /* const [ingredients, setIngredients] = useState([{ id: 1, ingr: "" }]); */
  const [ingredients, setIngredients] = useState([""]);
  const [description, setDescription] = useState([""]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const changeIngrData = (e, i) => {
    const { value } = e.target;
    const list = [...ingredients];
    list[i] = value;
    setIngredients(list);
    setValues({ ...values, ingredients: ingredients });
  };
  const changeDescData = (e, u) => {
    const { value } = e.target;
    const desclist = [...description];
    desclist[u] = value;
    setDescription(desclist);
    setValues({ ...values, description: description });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newIngr = "";

    setIngredients([...ingredients, newIngr]);
    setValues({ ...values, ingrnumber: ingredients.length });
  };
  const stepsadd = (e, u) => {
    console.log("wow, you clicked", description.length);
    e.preventDefault();
    const newStep = "";
    setDescription([...description, newStep]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipes", values);
    alert("Recipe is posted", window.location.reload());
  };

  return (
    <>
      <h1>Add your recipe</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={submitData}
      >
        <div className="horizont">
          <TextField
            id="name"
            name="name"
            className={classes.width32}
            label="Name"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <TextField
            id="img"
            name="img"
            className={classes.width32}
            label="Image Link"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <TextField
            id="category"
            name="category"
            className={classes.width32}
            label="Category"
            variant="outlined"
            required
            onChange={handleChange}
          />
        </div>
        <div className="horizont">
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prepTime">Prep Time</InputLabel>
            <OutlinedInput
              id="prepTime"
              className={classes.width98}
              name="prepTime"
              required
              value={values.prepTime}
              endAdornment={
                <InputAdornment position="end">minutes</InputAdornment>
              }
              labelWidth={90}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="cookTime">Cook Time</InputLabel>
            <OutlinedInput
              id="cookTime"
              name="cookTime"
              className={classes.width98}
              required
              value={values.cookTime}
              endAdornment={
                <InputAdornment position="end">minutes</InputAdornment>
              }
              labelWidth={90}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="serves">Serve</InputLabel>
            <OutlinedInput
              id="serves"
              name="serves"
              className={classes.width98}
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
        {description.map((_, u) => {
          let stepnumber = description.length;

          return (
            <TextField
              key={u}
              id="desc"
              name="desc"
              label={`Step ${stepnumber}`}
              multiline
              rows={4}
              defaultValue="Step description here"
              variant="outlined"
              required
              onChange={(e) => changeDescData(e, u)}
            />
          );
        })}

        <Button
          id="adddesc"
          variant="outlined"
          color="primary"
          onClick={stepsadd}
        >
          Add Next Step
        </Button>

        <div className="horizont-ingr">
          {ingredients.map((_, i) => {
            return (
              <TextField
                key={i}
                id="ingrfield"
                name="ingrfield"
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

        <Button type="submit" variant="contained" color="secondary">
          Add Recipe
        </Button>
      </form>
    </>
  );
}
