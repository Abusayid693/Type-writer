import React, { useContext } from "react";
import Select from "react-select";

// Context to store session data globally
const FontsContext = React.createContext({
    font: "none",
    setFont: () => {},
  });
  /* React Hook that gives you access to the fonts type user selected in 
   * Main page to update 
  */

  const options = [
    { value: "Montserrat, sans-serif", label: "Montserrat" },
    { value: "Roboto, sans-serif", label: "Roboto" },
    { value: "Tajawal, sans-serif", label: "Tajawal" },
    { value: "Cairo, sans-serif", label: "Cairo" },
    { value: "Open Sans, sans-serif", label: "Open Sans" },
    { value: "Poppins, sans-serif", label: "Poppins" },
  ];
  
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
      padding: 10,
    }),
  };
  
  export default function Fonts() {
  
    const [state, setState] = React.useState({
      selectedOption: null,
    });
   
    const { font, setFont } = useContext(FontsContext);

    const handleChange = (selectedOption) => {
      var a = selectedOption;
      // Changing value of react hook value with new font type
      setFont(a.value)     
    };
  
    return (
      <Select
        styles={customStyles}
        className="drop"
        value={state.selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select fonts"
      />
    );
  }

  export {Fonts,FontsContext}