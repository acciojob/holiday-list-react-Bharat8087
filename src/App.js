import React from 'react';

const vacationCities = [
  { name: 'Jaipur', country: 'India' },
  { name: 'New Delhi', country: 'India' },
  { name: 'Goa', country: 'India' },
  { name: 'Mumbai', country: 'India' },
  { name: 'Agra', country: 'India' },
  { name: 'Shimla', country: 'India' },
  { name: 'Kolkata', country: 'India' },
  { name: 'Bangalore', country: 'India' },
  { name: 'Chennai', country: 'India' },
  { name: 'Hyderabad', country: 'India' },
  { name: 'Varanasi', country: 'India' },
  { name: 'Udaipur', country: 'India' },
  { name: 'Amritsar', country: 'India' },
  { name: 'Pune', country: 'India' }
];

function App() {
  const indianCities = vacationCities.filter(city => city.country === 'India');

  return (
    <div>
      <h1>Indian Vacation Cities</h1>
      <ol>
        {/* Render the Indian cities in an ordered list */}
        {indianCities.map((city, index) => (
          <li key={`location${index + 1}`}>{city.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
