import { useEffect, useState } from 'react';
import {
  createGoblin,
  deleteGoblin,
  getGoblins,
  updateGoblin
} from '../services/request';

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

  const editGoblin = async (data, id) => {
    await updateGoblin(data, id).then(() => {
      getGoblins().then((res) => setState(res));
    });
  };

  const removeGoblin = async (id, setDelete) => {
    await deleteGoblin(id).then((response) => {
      setDelete(response);
      getGoblins().then((res) => setState(res));
    });
  };

  return {
    loading,
    setLoading,
    addGoblin,
    editGoblin,
    removeGoblin
  };
};
