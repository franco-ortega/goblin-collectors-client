import { useEffect, useState } from 'react';
import { createGoblin, deleteGoblin, getGoblins } from '../services/request';

export const useFetch = (setState) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGoblins().then((res) => {
      setState(res);
      setLoading(false);
    });
  }, [setState]);

  const addGoblin = async (data) => {
    await createGoblin(data).then(() => {
      getGoblins().then((res) => setState(res));
    });
  };

  const removeGoblin = (id, setDelete) => {
    deleteGoblin(id).then((response) => {
      setDelete(response);
      getGoblins().then((res) => setState(res));
    });
  };

  return {
    loading,
    setLoading,
    addGoblin,
    removeGoblin
  };
};
