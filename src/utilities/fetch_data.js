const Fetch_data = (query) => {
  return fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json${query}`).then((data) => {
    return data.json();
  });
};

export default Fetch_data;
