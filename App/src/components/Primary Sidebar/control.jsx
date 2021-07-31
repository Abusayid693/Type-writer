import React, { useContext } from "react";
import {
  DownloadPDF,
  Link,
  PageSizer,
  Checkboxes,
  ColorPicker,
  Fonts,
} from "./imports.jsx";

const VERSIONS = "/main/saved-files";

class Container extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props) {
    super(props);
  }
// Just upper button and texts of the side-bar
  UpperContainer = () => {
    return (
    <div className="cheader">
      <p>C-Panel</p>
      <Link to={VERSIONS}>
        <button>control</button>
      </Link>
    </div>
    )
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="panel">
        <this.UpperContainer/>
        <Fonts />
        <DownloadPDF />
        <PageSizer />
        <Checkboxes />
        <ColorPicker />
      </div>
    );
  }
}

export { Container };
