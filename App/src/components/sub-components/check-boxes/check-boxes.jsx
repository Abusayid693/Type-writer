import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const themes = {
  language: {
    outline: "none",
    setOutline: () => {},
  },
  format: {
    format: "none",
    setFormat: () => {},
  },
};

// CONTEXT API
const OutlineContext = React.createContext(themes.language);
// CONTEXT API
const FormatContext = React.createContext(themes.format);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Checkboxes() {
  
  const [state, setState] = React.useState({
    have_Outline: false,
    paper_Format: false
  });

  const { outline, setOutline } = useContext(OutlineContext),
        { format, setFormat } = useContext(FormatContext),
         classes = useStyles();

  const handleChange_outline = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const target = event.target.name;
        if (!state.have_Outline) {
          setOutline(target);
          setState({ have_Outline: true });
        } else {
          setOutline("none");
          setState({ have_Outline: false });
        }   
  };


  const handleChange_format = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const target = event.target.name;
        if (!state.paper_Format) {
          setFormat(target);
          setState({ paper_Format: true });
        } else {
          setFormat("none");
          setState({ paper_Format: false });
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
                onChange={handleChange_outline}
                name="outline"
              />
            }
            label="Outline"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange_format} name="paper" />
            }
            label="Paper"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
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

export { OutlineContext, Checkboxes, FormatContext };
