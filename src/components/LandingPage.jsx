import { useEffect, useState } from 'react';
import loadingIcon from '../images/loading-icon.png';
import axios from 'axios';

const baseURL = "https://api.nasa.gov/planetary/apod?api_key=q8Tae8I9G0Bc4qusMpLSYcxbG3R0469sowolCtPF";

/// Format Date to always return correct Date regardless of time zone
const dateUnformatted = new Date();
const myTZO = 300;
const dateFormatted = new Date(dateUnformatted.getTime() + (60000*(dateUnformatted.getTimezoneOffset()-myTZO)));

/// Convert Date to string YYYY-MM-DD
const todaysDate = dateFormatted.toISOString().slice(0, 10); 

export default function LandingPage () {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(todaysDate);
  const [loading, setLoading] = useState(true); 
  const [displayModal, setDisplayModal] = useState(false);
  
  useEffect(() => {
    axios.get(baseURL + `&date=${date}&thumbs=true`).then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
      console.error('There was an error!', error);
      setLoading(false);
  });
  }, [date]);

  if (!data) return null;

  const onDateChange = (e) => {
    e.preventDefault();
    if(e.target.value > todaysDate) {
      setLoading(false);
      alert(`Invalid date entry: Selected date entry cannot be past ${todaysDate}`)
    } else {
      setLoading(true);
      setDate(e.target.value);
    }
  }

  return(
    <div className="landing-page"> 
      <div className="item-1">
        <h1>Astronomy Picture of the Day</h1>
      </div>

      <div className="item-2">
        <form>
          <label htmlFor="searchDate">Select Date: </label>
          <input type="date" value={data.date} id="searchDate" onChange={onDateChange} /> 
          { loading ? <p>Loading...</p> : <p style={{display: "none"}}></p> }
        </form>
        <div className="title">
          <h2>{data.title}</h2>
          <p className='copyright'><span>Credits:</span> {!data.copyright ? "None given" : data.copyright}</p>
        </div>
        <div className="description">
          <p><span>Explanation:</span> { !data.explanation ? "None given" : data.explanation }</p>
        </div>
      </div>

      <div className="item-3">
        { loading ?
        <div className='loading-image'>
          <img src={loadingIcon} className="rotate" alt="moon" />
          <h2>Loading...</h2>
        </div> :
        data.hdurl ? 
          <img src={data.hdurl} alt={data.date + "APOD"} onClick={() => setDisplayModal(true)} /> : 
          <div className="media">
            <iframe src={data.url + "&loop=1"} title={data.date + "APOD Video"} frameBorder="0" allowFullScreen></iframe>
          </div>  
          }
          { displayModal && 
          <div className="modal">
            <span className="close" onClick={() => setDisplayModal(false)} >&times;</span>
            <div id="caption">
              <h2>{data.title}</h2>
            </div>
            <img className="modal-content" src={data.hdurl} alt={data.date + "APOD"} />
          </div> }
      </div> 
    </div>
    
  )
}