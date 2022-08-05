const { REACT_APP_API_URL } = process.env;

const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

const goblinRequest = async (method, data, id = '') => {
  const headers = WITHOUT_BODY_METHODS.includes(method)
    ? {}
    : {
        'Content-Type': 'application/json'
      };

  const response = await fetch(`${REACT_APP_API_URL}/${id}`, {
    method,
    headers,
    body: JSON.stringify(data)
  })
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;
      return json;
    });

  console.log(response);

  if (method === 'GET') response.sort((a, b) => a.goblinId - b.goblinId);

  return response;
};

export const getGoblins = () => goblinRequest('GET');
export const createGoblin = (data) => goblinRequest('POST', data);
export const updateGoblin = (data, id) => goblinRequest('PUT', data, id);
export const deleteGoblin = (id) => goblinRequest('DELETE', null, id);
