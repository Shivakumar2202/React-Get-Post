import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request-forms
  const [formdata, setFormdata] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formdata,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div>
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          placeholder="name"
          name="formdata"
          value={formdata}
          onChange={(e) => setFormdata(e.target.value)}
        ></input>
        <input type="submit" value="testform"></input>
        <p id="para"></p>
      </form>
    </div>
  );
};
export default App;
