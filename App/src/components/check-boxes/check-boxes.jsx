import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false
      });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    alert(event.target.name)
    document.querySelector(".ruller").style.borderBottom= "1.7px solid rgb(0, 0, 0)"
  };

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name="checkedA"
      />
        <Checkbox
        checked={state.checkedB}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name="checkedB"
      />
        <Checkbox
        checked={state.checkedC}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name="checkedC"
      />
        <Checkbox
        checked={state.checkedD}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name="checkedD"
      />
    </div>
  );
}

