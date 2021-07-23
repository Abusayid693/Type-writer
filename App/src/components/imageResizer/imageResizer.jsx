import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./imageResizer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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
  }
];

class DiscreteSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialize();
    // this.valuetext();
  }

  initialize() {}
  valuetext(value) {
    var a= value/100
    console.log(a);
    var b="scale("+a+")";
  var temp=document.querySelector("canvas");
  if(temp==null) return;
  else
   temp.style.transform = b;
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
          step={6}
          valueLabelDisplay="auto"
          marks={marks}
        //   onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { DiscreteSlider };
