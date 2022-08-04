const { REACT_APP_API_URL } = process.env;

const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

const request = (path, method, body) => {
  const headers = WITHOUT_BODY_METHODS.includes(method)
    ? {}
    : {
        'Content-Type': 'application/json'
      };

  return fetch(`${REACT_APP_API_URL}${path}`, {
    method,
    headers,
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;
      return json;
    });
};

export const postGoblin = (path, body) => request(path, 'POST', body);
export const getGoblins = (path) => request(path, 'GET');
export const putGoblin = (path, body) => request(path, 'PUT', body);
export const deleteGoblin = (path) => request(path, 'DELETE');
