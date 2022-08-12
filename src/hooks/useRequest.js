import { useEffect, useState } from 'react';
import {
  createGoblin,
  deleteGoblin,
  getGoblins,
  updateGoblin
} from '../services/request';

export const useRequest = (setState) => {
  const [loading, setLoading] = useState(false);
  const goblinPath = '/api/v1/goblins';

  useEffect(() => {
    setLoading(true);
    getGoblins(goblinPath).then((res) => {
      setState(res);
      setLoading(false);
    });
  }, [setState]);

  const addGoblin = async (data) => {
    await createGoblin(goblinPath, data).then(() => {
      getGoblins(goblinPath).then((res) => setState(res));
    });
  };

  const editGoblin = async (id, data) => {
    await updateGoblin(`${goblinPath}/${id}`, data).then(() => {
      getGoblins(goblinPath).then((res) => setState(res));
    });
  };

  const removeGoblin = async (id, setDelete) => {
    await deleteGoblin(`${goblinPath}/${id}`).then((response) => {
      setDelete(response);
      getGoblins(goblinPath).then((res) => setState(res));
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
