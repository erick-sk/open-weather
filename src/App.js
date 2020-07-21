import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  // state form
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = '973055d5feb2286d2cb4446f4009ed9c';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const answer = await fetch(url);
        const result = await answer.json();

        saveResult(result);
        saveConsult(false);
      }
    };
    consultAPI();
  }, [consult]);

  return (
    <Fragment>
      <Header title='Open Weather' />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className='col m6 s12'>
              <Weather result={result} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
