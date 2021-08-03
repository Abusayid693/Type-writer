import { createTheme} from "@material-ui/core/styles";

// Some CSS
export const theme = createTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderRadius: 3,
          border: 0,
          color: "white",
          height: 48,
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          width: "100%",
          margin: " 30px 0",
        },
      },
    },
  });

  export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
      padding: 10,
      width: 120,
    }),
  };


  //   Downloadig options
  export const options = [
    { value: "Pdf", label: "Pdf Format" },
    { value: "Text", label: "Text Format" },
    { value: "Code", label: "Code block" },
  ];