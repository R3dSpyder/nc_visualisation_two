const Fetch_data = () => {
  return fetch("https://data.nasa.gov/resource/gh4g-9sfh.json").then((data) => {
    return data.json();
  });
};

export default Fetch_data;
