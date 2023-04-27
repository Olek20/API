import './App.css';
import React, { useState } from 'react';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [summary, setSummary] = useState('');

  const apiUrl = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestData = {
      url: urlInput,
      type: 'article'
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '10883312bemsh4069016b65df521p145a51jsnce49fe2ede64',
        'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
      },
      body: JSON.stringify(requestData)
    };
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div id='main'>
            <h1>Streszczacz artykułów</h1>
      <div id='query'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url-input">Podaj adres URL artykułu:</label><br></br>
        <input type="text" id="url-input" value={urlInput} onChange={(event) => setUrlInput(event.target.value)} /><br></br>
        <button type="submit">Streść</button>
      </form>
      </div>
      {summary && <div id='result'>{summary}</div>}
    </div>
  );
}
export default App;
