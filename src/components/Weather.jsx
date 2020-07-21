import React from 'react';

const Weather = ({ result }) => {
  // extract value
  const { name, main } = result;

  if (!name) return null;

  //degree kelvin
  const kelvin = 273.15;

  return (
    <div className='card-panel white col s12'>
      <div className='black-text'>
        <h2>The climate in {name} is: </h2>
        <p className='temperatura'>
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
        <p>
          Temperature Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
        <p>
          Temperature Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
