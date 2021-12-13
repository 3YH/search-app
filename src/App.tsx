import React, { useState } from 'react';
import './App.css';
import { getSearchResult } from 'lib/api/spotify';
import { SearchResult } from 'lib/types/SearchResult';
import { ArtistItem } from 'lib/types/ArtistItem';
import { TrackItem } from 'lib/types/TrackItem';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [checks, setChecks] = useState<string[]>(['track', 'artist']);
  const [searchTextTimeout] = useState(null);
  const [result, setResult] = useState<SearchResult>();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setSearchTerm(enteredName);
    search();
  };

  const handleCheckbox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray = [...checks, event.target.value];
    if (checks.includes(event.target.value)) {
      newArray = newArray.filter((type) => type !== event.target.value);
    }
    setChecks(newArray);
  };

  const search = async () => {
    if (searchTextTimeout) {
      clearTimeout(searchTextTimeout);
    }

    setTimeout(async () => {
      if (searchTerm) {
        const response = await getSearchResult(searchTerm, checks);

        if (response.ok) {
          const data = response.json();
          const items = await data;
          setResult(items);
          console.log(items);
        } else {
          Promise.reject(response);
        }
      }
    }, 800);
  };

  return (
    <div className="App">
      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
        className="input"
      />

      <input
        type="checkbox"
        name="tracks"
        value="track"
        onChange={handleCheckbox}
        defaultChecked
      />
      <label htmlFor="tracks">Tracks</label>
      <input
        type="checkbox"
        name="artist"
        value="artist"
        onChange={handleCheckbox}
        defaultChecked
      />
      <label htmlFor="artists">Artists</label>

      {result && result.tracks && result.tracks?.items.length > 0
        ? result.tracks?.items.map((item: TrackItem, idx) => (
            <li key={idx} className="item">
              <span className="item-id">{item.name}</span>
            </li>
          ))
        : null}

      {result && result.artists && result.artists.items.length > 0
        ? result.artists.items.map((item: ArtistItem, idx) => (
            <li key={idx} className="item">
              <span className="item-id">{item.name}</span>
            </li>
          ))
        : null}
    </div>
  );
}

export default App;
