import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { withStyles}  from "@material-ui/core/styles";


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
  function valuetext(value) {
    const elem = document.querySelector(".Whole");
    if (elem === null) return;
    var a = value / 2 +5+ "px";
    elem.style.padding = a;
  }
  return (
    <div className="slider">
      <Typography id="discrete-slider-custom" gutterBottom>
        Page padding
      </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export { PageSizer };
