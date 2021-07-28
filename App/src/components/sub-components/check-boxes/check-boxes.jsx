import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Checkboxes() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    outline: false,
    paper: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const target = event.target.name;
    switch (target) {
      case "outline":
        document.querySelector(".Whole").classList.toggle("outline");
        break;
      case "paper":
        document.querySelector(".Whole").classList.toggle("paper-like");
        break;
    }
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Options</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange}
                name="outline"
              />
            }
            label="Outline"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="paper" />
            }
            label="Paper-like"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
