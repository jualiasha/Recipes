import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 270,
    bottom: "0.25rem",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  /*form inputs*/
  const [values, setValues] = useState({
    name: "",
    img: "",
    category: "",
    ingrnumber: "",
    description: [],
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
  });
  /*Seaprate class for Ingredients*/
  const [inc, setInc] = useState([" "]);
  /*Separate class for description*/
  const [desc, setDesc] = useState([" "]);

  /*setting values of the input fields*/
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  /*setting ingredients values*/
  const changeIngrData = (e, i) => {
    const list = [...inc];
    list[i] = e.target.value;

    if (list[i].length > 0) {
      setInc(list);
    }
  };

  useEffect(() => {
    setValues((prevValues) => ({ ...prevValues, ingredients: inc }));
  }, [inc]);

  /*setting description data*/
  const changeDescData = (e, i) => {
    const desclist = [...desc];
    desclist[i] = e.target.value;
    if (desclist[i].length > 0) {
      setDesc(desclist);
    }
  };

  useEffect(() => {
    setValues((prevValues) => ({ ...prevValues, description: desc }));
  }, [desc]);

  /*add more ingredients button functionality*/
  const addMore = (e, i) => {
    e.preventDefault();
    const newIngr = "";
    setInc([...inc, newIngr]);

    setValues({ ...values, ingrnumber: inc.length + 1 });
  };

  /*add description steps functionality*/
  const stepsadd = (e, i) => {
    e.preventDefault();
    const newStep = "";
    setDesc([...desc, newStep]);
  };

  /*submit function*/
  const submitData = (e) => {
    e.preventDefault();

    axios.post("https://lit-sierra-74086.herokuapp.com/recipe/addmore", values);

    alert("Recipe is posted");
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select
              native
              value={values.category}
              onChange={handleChange}
              label="Category"
              inputProps={{
                name: "category",
                id: "category",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Salads"}>Salads</option>
              <option value={"Soups"}>Soups</option>
              <option value={"Beef"}>Beef</option>
              <option value={"Pork"}>Pork</option>
              <option value={"Chicken"}>Chicken</option>
              <option value={"Fish"}>Fish</option>
              <option value={"Vegan"}>Vegan</option>
              <option value={"Sweets"}>Sweets</option>
            </Select>
          </FormControl>
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
        <TextField
          id="ingrnumber"
          name="ingrnumber"
          disabled
          className={classes.width32}
          label="Ingr. Number"
          variant="outlined"
          size="small"
          value={values.ingrnumber}
        />
        <div className="horizont-ingr">
          {inc.map((_, i) => {
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

        {desc.map((_, i) => {
          let stepnumber = i + 1;

          return (
            <TextField
              key={i}
              id="desc"
              name="desc"
              label={`Step ${stepnumber}`}
              multiline
              rows={4}
              defaultValue="Step description here"
              variant="outlined"
              required
              onChange={(e) => changeDescData(e, i)}
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

        <Button type="submit" variant="contained" color="secondary">
          Add Recipe
        </Button>
      </form>
    </>
  );
}
