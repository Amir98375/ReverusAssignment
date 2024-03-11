// pages/index.js
import { useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import main styles
import './animation.css'; // Import animations



export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const [ageResponse, genderResponse, countryResponse] = await Promise.all([
        axios.get(`https://api.agify.io?name=${name}`),
        axios.get(`https://api.genderize.io?name=${name}`),
        axios.get(`https://api.nationalize.io?name=${name}`)
      ]);

      setAge(ageResponse.data.age);
      setGender(genderResponse.data.gender);
      setCountry(countryResponse.data.country[0]?.country_id || 'Unknown');
    } catch (error) {
      setError(`${error.response.data.error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container fade-in"> {/* Apply fade-in animation */}
      <h1 className="title">Name Guesser</h1>
      <form onSubmit={handleSubmit} className="form slide-in"> {/* Apply slide-in animation */}
        <label>
         
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input"
          placeholder='Enter Name Here' />
        </label>
        <button type="submit" disabled={!name} className="button">Press</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {age && <p className="result">{`Estimated Age: ${age}`}</p>} {/* Apply fade-in and color change animation */}
      {gender && <p className="result">{`Estimated Gender: ${gender}`}</p>} {/* Apply fade-in and color change animation */}
      {country && <p className="result">{`Estimated Country: ${country}`}</p>} {/* Apply fade-in and color change animation */}
    </div>
  );
}
