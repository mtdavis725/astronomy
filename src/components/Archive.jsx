import { useEffect, useState } from 'react';
import axios from 'axios';
import ArchiveItem from './ArchiveItem'

const baseURL = "https://api.nasa.gov/planetary/apod?api_key=q8Tae8I9G0Bc4qusMpLSYcxbG3R0469sowolCtPF";
const today = new Date();

/// endDate is today YYYY-MM-DD
const endDate = new Date().toISOString().slice(0, 10);

/// startDate is one week prior  YYYY-MM-DD
const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).toISOString().slice(0, 10);

const dateQuery = `&start_date=${startDate}&end_date=${endDate}`;

export default function Archive () {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(baseURL + dateQuery).then((response) => {
      setData(response.data);
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
      console.error('There was an error!', error);
  });
  }, []);

  if (!data) return null;

  const archiveList = (data) => { 
    return (data.map(item => 
      <ArchiveItem date={item.date} title={item.title} copyright={item.copyright} explanation={item.explanation} url={item.hdurl} />
      ))
  }

  return(
    <div className="archive">
      <div className="item-1">
        <h1>Astronomy Picture of the Day Archive</h1>
      </div>
      { archiveList(data) }
    </div>
  )
}