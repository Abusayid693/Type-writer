import "./styles/control.css";
import "./styles/fonts.css";
import Select from "react-select";
import DownloadPDF from "../Downloading-formats/Download.jsx";
import { Link } from "react-router-dom";


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

export{
    Select,
    DownloadPDF,
    Link,
    options,
    customStyles

}