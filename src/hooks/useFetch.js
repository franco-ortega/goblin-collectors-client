import { useEffect, useState } from 'react';
import { getGoblins } from '../services/request';

export const useFetch = () => {
  console.log('fetching...');

  const [goblins, setGoblins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGoblins().then((res) => {
      setGoblins(res);
      setLoading(false);
    });
  }, []);

  return {
    goblins,
    setGoblins,
    loading,
    setLoading
  };
};
