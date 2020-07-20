import React, { useState } from 'react';

const Form = () => {
  // state form
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  });

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

  return (
    <form>
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
    </form>
  );
};

export default Form;
