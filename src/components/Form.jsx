import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ search, saveSearch, saveConsult }) => {
  const [error, saveError] = useState(false);

  // extracting city and country
  const { city, country } = search;

  // function that places the elements in the state
  const handleChange = (e) => {
    // update state
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // When user pick submit to form
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (city.trim() === '' || country.trim() === '') {
      saveError(true);
      return;
    }

    saveError(false);

    // to pass app.js
    saveConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message='All fields are required' /> : null}
      <div className='input-field col s12'>
        <input
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={handleChange}
        />
        <label htmlFor='city'>City: </label>
      </div>
      <div className='input-field col s12'>
        <select
          name='country'
          id='country'
          value={country}
          onChange={handleChange}
        >
          <option value=''>-- Select a country --</option>
          <option value='US'>United States</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>Spain</option>
          <option value='PE'>Peru</option>
        </select>
        <label htmlFor='country'>Country: </label>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Search Weather'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveConsult: PropTypes.func.isRequired,
};

export default Form;
