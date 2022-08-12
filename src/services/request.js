const { REACT_APP_API_URL } = process.env;

const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

const goblinRequest = async (method, path, data) => {
  const headers = WITHOUT_BODY_METHODS.includes(method)
    ? {}
    : {
        'Content-Type': 'application/json'
      };

  const response = await fetch(`${REACT_APP_API_URL}${path}`, {
    method,
    headers,
    body: JSON.stringify(data)
  })
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;
      return json;
    });

  if (method === 'GET') response.sort((a, b) => a.goblinId - b.goblinId);

  return response;
};

export const getGoblins = (path) => goblinRequest('GET', path);
export const createGoblin = (path, data) => goblinRequest('POST', path, data);
export const updateGoblin = (path, data) => goblinRequest('PUT', path, data);
export const deleteGoblin = (path, data) => goblinRequest('DELETE', path, data);
