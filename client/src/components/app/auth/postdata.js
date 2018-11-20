export function PostData(type, userData) {
  let BaseURL = 'http://localhost:3002/';

  return fetch(BaseURL + type, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userData)
  }).then(res => {
    return res;
  });
}
