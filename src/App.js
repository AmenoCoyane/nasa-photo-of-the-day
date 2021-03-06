import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Paragraph from "./components/Paragraph"
import Header from "./components/Header"


function App() {
  let [data, setData] = useState([]);
  const me = "robert allen"
  const sup = "sup sup sup sup"

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RQrVpxmXLAcf777lkZ2c16jShyxKZpmKW5bCCmU0')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <Header sup={sup}/>
      <Paragraph data={data}/>
    </div>
  );
}

export default App;
