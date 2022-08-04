const { REACT_APP_API_URL } = process.env;

export const getGoblins = async () => {
  return await fetch(REACT_APP_API_URL).then((res) => res.json());
};

export const postGoblin = async (data) => {
  return await fetch(REACT_APP_API_URL, {
    method: 'POST',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }).then((res) => res.json);
};

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
