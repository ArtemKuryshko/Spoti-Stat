'use client';
import { useEffect } from 'react';

export default function LocalStorageWriter({ accessToken }: { accessToken: string }) {
  useEffect(() => {
    localStorage.setItem('access_token', accessToken);
  }, [accessToken]);

  return null;
}