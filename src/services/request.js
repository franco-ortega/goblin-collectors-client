const { REACT_APP_API_URL } = process.env;

export const getGoblins = async () => {
  return await fetch(REACT_APP_API_URL)
    .then((res) => res.json())
    .then((res) => res.sort((a, b) => a.goblinId - b.goblinId));
};

export const createGoblin = async (data) => {
  await fetch(REACT_APP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json);
};

export const updateGoblin = async (id, data) => {
  return await fetch(`${REACT_APP_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json);
};

export const deleteGoblin = async (id) => {
  return await fetch(`${REACT_APP_API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json);
};

const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

const goblinRequest = async (method, data, id = '') => {
  console.log('making a request');
  console.log('ID: ', id);

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

export const getGoblins2 = () => goblinRequest('GET');
export const createGoblin2 = (data) => goblinRequest('POST', data);
export const updateGoblin2 = (data, id) => goblinRequest('PUT', data, id);
export const deleteGoblin2 = (id) => goblinRequest('DELETE', null, id);

// const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

// const request = (path, method, body) => {
//   const headers = WITHOUT_BODY_METHODS.includes(method)
//     ? {}
//     : {
//         'Content-Type': 'application/json'
//       };

//   return fetch(`${REACT_APP_API_URL}${path}`, {
//     method,
//     headers,
//     credentials: 'include',
//     body: JSON.stringify(body)
//   }).then((res) => {
//     // console.log(res);
//     return res;
//   });
//   // .then((res) => Promise.all([res.ok, res.json()]))
//   // .then(([ok, json]) => {
//   //   console.log(json);
//   //   if (!ok) throw json;
//   //   return json;
//   // });
// };

// export const postGoblin = (path, body) => request(path, 'POST', body);
// export const getGoblins = (path) => request(path, 'GET');
// export const putGoblin = (path, body) => request(path, 'PUT', body);
// export const deleteGoblin = (path) => request(path, 'DELETE');
