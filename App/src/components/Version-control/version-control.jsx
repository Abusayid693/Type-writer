import React from "react";
import { Link, axios, getPayLoad, File } from "./imports.jsx";


class SavedFiles extends React.Component {

  state = {
    Data: [],
    type: "Start version control",
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData(false);
  }

  getData = (isSaved) => {
    axios
      .get("/data")
      .then((response) => {
        const data = response.data;
        this.setState({ Data: data.reverse() });
        if (data.length)
          isSaved
            ? this.setState({ type: "version saved" })
            : this.setState({ type: "Save current version" });
        console.log("Data received");
      })
      .catch(() => {
        console.log("Data receiving error error");
      });
  };

  handleClick = () => {
    const lastSaved = this.state.Data[0].body;
    console.log("Last saved data : ", lastSaved);

    const payload = getPayLoad();

    if (lastSaved == payload.body) {
      alert("Already upto date");
      return;
    }
    this.getData(true);
    axios({
      url: "/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to the server");
      })
      .catch(() => {
        console.log("Data sending error");
      });
  };

  displayVersions = (data) => {
    if (!data.length) return null;
    return data.map((data) => <File data={data} />);
  };

  render() {
    return (
      <div className="saved-files panel">
        <div className="cheader">
          <p>saved files</p>
          <Link to="/main/">
            <button>control</button>
          </Link>
        </div>
        <div className="saved-versions">
          <button onClick={this.handleClick}>{this.state.type}</button>
          {this.displayVersions(this.state.Data)}
        </div>
      </div>
    );
  }
}

export default SavedFiles;


/** SUMMARY : Version  */