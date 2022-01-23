import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const baseURL = "https://api.nasa.gov/planetary/apod?api_key=q8Tae8I9G0Bc4qusMpLSYcxbG3R0469sowolCtPF";

/// YYYY-MM-DD
const todaysDate = new Date().toISOString().slice(0, 10);

export default function LandingPage () {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(todaysDate);
  
  useEffect(() => {
    axios.get(baseURL + `&date=${date}`).then((response) => {
      setData(response.data);
      
    });
  }, [date]);

  if (!data) return null;

  const onDateChange = (e) => {
    setDate(e.target.value);
  }



  return(
    <div className="landing-page">
      
      <div className="item-1">
        <h1>Astronomy Picture of the Day</h1>
        
        <nav>
          <Link to="/">Home</Link> 
          <Link to="archive">Archive</Link>
        </nav>

        <form>
          <label htmlFor="searchDate">Select Date: </label>
          <input type="date"  value={data.date} id="searchDate" onChange={onDateChange} />
        </form>
      </div>

      <div className="item-2">
        
       
        <div className="title">
          <h2>{data.title}</h2>
          <h3><span>Credits:</span> {!data.copyright ? "None given" : data.copyright}</h3>
        </div>
        <div className="description">
          <p><span>Explanation:</span> {data.explanation}</p>
        </div>
      </div>

      <div className="item-3">
        <img src={data.hdurl} alt="APOD" />
      </div>
    </div>

    
  )
}