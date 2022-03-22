import React, { useEffect, useState } from 'react';
import { axiosGetData, sendData } from '../../actions/version-control-data';
import { File, getPayLoad, Link } from './imports.jsx';


function VersionControl() {
  const [Data, setData] = useState([]);
  const [type, setType] = useState('Start version control');

  useEffect(() => {
    getData(false);
  }, []);

  //------------ FETCHING DATA FROM THE SERVER -------------
  const getData = (isSaved) => {
    axiosGetData()
      .then((data) => {
        console.log('received data is gere', data);
        setData(data.reverse());
        if (data) isSaved ? setType('version saved') : setType('Save current version');
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    if(!Data.length) {
      setType('No availabe in beta')
      return;
    }
    const lastSaved = Data[0].body;
    const payload = getPayLoad();
    // If last saved version of file and current file are
    // same dont update on database
    if (lastSaved == payload.body) {
      alert('Already upto date');
      return;
    }
    sendData(payload); // ----------- SENDING DATA TO BE SERVER -----------------
    getData(true);
  };

  const displayVersions = (data) => {
    if (!data.length) return null;
    return data.map((data) => <File data={data} />);
  };

  return (
    <div className="saved-files panel">
      <div className="cheader">
        <p>saved files</p>
        <Link to="/main/">
          <button>control</button>
        </Link>
      </div>
      <div className="saved-versions">
        <button className='version-btn' onClick={handleClick}>{type}</button>
        {displayVersions(Data)}
      </div>
    </div>
  );
}

export default VersionControl;
