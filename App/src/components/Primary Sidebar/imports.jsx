import "./styles/control.css";
import "./styles/fonts.css";
import Select from "react-select";
import DownloadPDF from "../Downloading-formats/Download.jsx";
import { Link } from "react-router-dom";
import {PageSizer} from "../sub-components/Page-padding/pagePadding.jsx"
import {Checkboxes} from "../sub-components/check-boxes/check-boxes"
import ColorPicker from "../sub-components/color-picker/color-picker"
import {Fonts} from "../sub-components/Switch-fonts/switch-fonts"


export{
    Select,
    DownloadPDF,
    Link,
    PageSizer,
    Checkboxes,
    ColorPicker,
    Fonts
}