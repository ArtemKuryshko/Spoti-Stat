'use client';
import { useEffect, useState } from 'react';

export default function SpotifyTracks({ access_token }: { access_token: string }) {
  const [token, setToken] = useState<string | null>(null);
  

  useEffect(() => {
    localStorage.setItem('access_token', access_token);
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  // запити до Spotify API тут...

  return <></>;
}