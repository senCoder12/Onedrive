import React, { useState } from "react";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";
// import oneDriveAPI from "onedrive-api"
// const oneDriveAPI = require("onedrive-api");

export default function App() {
  const [urlList, setUrl] = useState([]);
  const [nameList, setName] = useState([]);
  return (
    <div className="App" style={{ margin: "auto", width: "fit-content", textAlign: "center" }}>
      <ReactOneDriveFilePicker
        clientID="23901c7e-f196-4e71-baea-0ca7ff62257f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          setUrl((uri) => {
            let urlList1 = result.value.map((e) => {
              return e.webUrl;
            })
            return urlList1;
          });
          setName((uri) => {
            let nameList1 = result.value.map((e) => {
              return e.name.split(".")[0];
            })
            return nameList1;
          });
          console.log(result);
        }}
        onCancel={(result) => {

        }}
      >
        <button style={{ margin: "10px", padding: "6px 20px" }}>Pick file</button>
      </ReactOneDriveFilePicker>
      {
        nameList.map((name, idx) => (
          <>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>File Name</span>: {name} <br/><br/>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>File Link: <a href={urlList[idx]} target="_blank"><h3>{urlList[idx]}</h3></a></span>
            <hr />
          </>
        ))
      }
      {
        !urlList.length && (<>
          <h3>No file Picked</h3>
        </>
        )
      }

    </div>
  );
}