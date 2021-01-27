import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './api/spotify';
import './App.css';
import Login from './components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayer } from './contexts/DataLayer';

const spotifyApi = new SpotifyWebApi()

function App() {
  const [{token}, dispatch] = useDataLayer()

  useEffect(() => {
      const hash = getTokenFromUrl()
      const _token = hash.access_token
      
      if(_token) {
        spotifyApi.setAccessToken(_token)

        dispatch({
          type: 'SET_TOKEN',
          token: _token
        })

        spotifyApi.getMe().then((user) => {
          dispatch({
            type: "SET_USER",
            user
          })
        })

        spotifyApi.getUserPlaylists().then(playlists => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists
          })
        })
      }
      window.location.hash = ""
    }, [])
    console.log(token)

  return (
    <div className="app">
      { token ?
        <Player/>
        :
        <Login />
      }
    </div>
  );
}

export default App;
