import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

// CONTEXT API
const PaddingContext = React.createContext({
  padding: " 5px 10px 30px 10px;",
  setPadding: () => {},
});
/* React Hook that gives you access to the  data user selected
 * for Main page to update
 */

/* -------------------- Inbuild styles for slider ------------------- */

const PrettoSlider = withStyles({
  root: {
    color: "#000",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "rgb(209, 203, 203)",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

function PageSizer() {
  const { padding, setPadding } = useContext(PaddingContext);

  const GetSliderValue = (value) => {
    const a = value / 2 + 5 + "px";
    setPadding(a); /*--------- updating value of context ----------- */
  };

  return (
    <div className="slider">
      <Typography id="discrete-slider-custom" gutterBottom>
        Page padding
      </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        getAriaValueText={GetSliderValue}
      />
    </div>
  );
}

export { PageSizer, PaddingContext };

// SUMMARY : We used context to pass values of slider to main page
