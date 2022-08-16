import React from "react";

import { useState } from "react";

const Filter_bar = ({ setFilteredMeteorites, meteorites }) => {
  const [filter, setFilter] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    const filtered = meteorites.filter((meteorite) => {
      const filtered = filter.name;
      return meteorite[filtered] === filter.value;
    });
    console.log(filtered);
    setFilteredMeteorites(filtered);
    setFilter({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <button id="nameButton">Name</button>
      <div id="dropDownName" className="dropDownMenu">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={filter.value}
          onChange={(event) => {
            console.log(event.target.name, event.target.value);
            setFilter({ name: event.target.name, value: event.target.value });
          }}
        ></input>
      </div>
      <button id="yearButton">Year</button>
      <div id="dropDownYear" className="dropDownMenu">
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        ></input>
      </div>
      <button id="massButton">Mass</button>
      <div id="dropDownMass" className="dropDownMenu">
        <label htmlFor="mass">Mass:</label>
        <input
          id="mass"
          type="text"
          name="mass"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        ></input>
      </div>
      <button id="fellButton">Fell</button>
      <div id="dropDownFell" className="dropDownMenu">
        <label htmlFor="fell">Fell:</label>
        <input id="fell" type="radio" name="fell"></input>
      </div>
      <button id="classButton">Class</button>
      <div id="dropDownClass" className="dropDownMenu">
        <label htmlFor="class">Class:</label>
        <select id="class" type="checkbox" name="class">
          <option value="a">Test1</option>
          <option value="b">Test2</option>
          <option value="c">Test3</option>
        </select>
      </div>
      <button id="latitudeButton">Latitude</button>
      <div id="dropDownLatitude" className="dropDownMenu">
        <label htmlFor="latitude">Latitude:</label>
        <input
          id="latitude"
          type="text"
          name="latitude"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        ></input>
      </div>
      <button id="longitudeButton">Longitude</button>
      <div id="dropDownLongitude" className="dropDownMenu">
        <label htmlFor="longitude">Longitude:</label>
        <input
          id="longitude"
          type="text"
          name="longitude"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        ></input>
      </div>
    </form>
  );
};

export default Filter_bar;
