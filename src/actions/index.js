export function fetchData(payload) {
  return {
    type: 'FETCH_DATA',
    payload: payload
  };
}

export function filterData(payload) {
  return {
    type: 'FILTER',
    payload: payload
  };
}

export function resetData(payload) {
  return {
    type: 'RESET',
    payload: payload
  };
}