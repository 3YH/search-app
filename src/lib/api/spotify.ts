const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SEARCH_QUERY_ENDPOINT = 'https://api.spotify.com/v1/search';

//Authentication flow: generate access token and use in following request
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: refresh_token,
      grant_type: 'refresh_token',
    }),
  });

  return response.json();
};

export const getSearchResult = async (query: string, checks: string[]) => {
  const { access_token } = await getAccessToken();
  const string = checks.join(',');
  const encodedChecks = encodeURIComponent(string);

  const queryString = `${SEARCH_QUERY_ENDPOINT}?q=${query}&type=${encodedChecks}`;

  return fetch(queryString, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
