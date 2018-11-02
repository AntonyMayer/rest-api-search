export function storeData(payload) {
  return {
    type: 'FETCH_DATA',
    payload: payload
  };
}