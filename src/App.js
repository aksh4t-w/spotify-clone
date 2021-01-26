import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './api/spotify';
import './App.css';
import Login from './components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

const spotifyApi = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
      const hash = getTokenFromUrl()
      const _token = hash.access_token
      
      if(_token) {
        setToken(_token)
        spotifyApi.setAccessToken(_token)
        spotifyApi.getMe().then((user) => {
          console.log(user)
        })
      }
      window.location.hash = ""
  }, [])

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
