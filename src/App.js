import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  // state form
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  });

  const [consult, saveConsult] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
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
            <div className='col m6 s12'>2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
