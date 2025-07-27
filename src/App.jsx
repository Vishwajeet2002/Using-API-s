import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setData(response.data);
    console.log(response.data);
  };

  return (
    <>
      <button onClick={getData}>Get Data</button>
      <div className="image">
        {data.map((elem, idx) => (
          <div key={idx} className="card">
            <img src={elem.download_url} alt={`By ${elem.author}`} />
            <p>Author: {elem.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
