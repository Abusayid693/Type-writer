import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./imageResizer.css";

const marks = [
  {
    value: 0,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 100,
    label: "100",
  },
];

class DiscreteSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  valuetext(value) {
    var a = value / 100 + 0.13;
    console.log(a);
    var b = "scale(" + a + ")";
    var temp = document.querySelectorAll(".captured"),
      length = temp.length;
    if (temp[length - 1] == null) return;
    else
      temp[length - 1].style.transform = b;
  }

  render() {
    return (
      <div className="slider">
        <Typography id="discrete-slider-custom" gutterBottom>
          Custom marks
        </Typography>
        <Slider
          defaultValue={40}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    );
  }
}

export { DiscreteSlider };
