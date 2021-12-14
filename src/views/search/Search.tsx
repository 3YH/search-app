import { Box } from '@mui/material';
import { getSearchResult } from 'lib/api/spotify';
import { SearchResult } from 'lib/types/SearchResult';
import React, { useState } from 'react';
import LayoutContainer from './components/layout/container/LayoutContainer';
import TopBar from './components/layout/top-bar/TopBar';
import Results from './components/results/Results';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
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
    //After check event iterate over checks list and update state
    let newArray = [...checks, event.target.value];
    if (checks.includes(event.target.value)) {
      newArray = newArray.filter((type) => type !== event.target.value);
    }
    setChecks(newArray);
  };

  const search = async () => {
    //Prevent searching instantly OnChange by calling fetch in setTimeout
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
        } else {
          Promise.reject(response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
    }, 800);
  };

  return (
    <LayoutContainer>
      <TopBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          component="form"
          sx={{
            p: '8px 6px',
            m: '40px 0 5px 0',
            display: 'flex',
            alignItems: 'center',
            width: 500,
          }}
        >
          <InputBase
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="input"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'search Spotify' }}
          />
          <SearchIcon />
        </Paper>
        <Box>
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
        </Box>
      </Box>
      <Results result={result} />
    </LayoutContainer>
  );
}
