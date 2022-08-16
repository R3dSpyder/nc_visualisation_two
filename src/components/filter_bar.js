import React from "react";

import { useState } from "react";

const Filter_bar = ({ setQuery }) => {
  const [filter, setFilter] = useState({});
  const [checked, setChecked] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery("")
    let query = ""
    if(filter.name === 'year'){
      query = `?${filter.name}=${filter.value}-01-01T00:00:00.000`
    } else {
    query = `?${filter.name}=${filter.value}`
    }
    console.log(query)
    setQuery(query)
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
          onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value })
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
          onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
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
          onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}
        ></input>
      </div>
      <button id="fellButton">Fell</button>
      <div id="dropDownFell" className="dropDownMenu">
        <label htmlFor="fell">Fell:</label>
        <input id="fell" type="text" name="fall" placeholder="Fell/Found" onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}></input>
      </div>
      <button id="classButton">Class</button>
      <div id="dropDownClass" className="dropDownMenu">
        <label htmlFor="class">Class:</label>
        <select id="class" type="checkbox" name="recclass"  onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}>
          <option value="LL5">Test1</option>
          <option value="H6">Test2</option>
          <option value="L6" onClick={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}>Test3</option>
        </select>
      </div>
      <button id="latitudeButton">Latitude</button>
      <div id="dropDownLatitude" className="dropDownMenu">
        <label htmlFor="latitude">Latitude:</label>
        <input
          id="latitude"
          type="text"
          name="reclat"
          onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}
        ></input>
      </div>
      <button id="longitudeButton">Longitude</button>
      <div id="dropDownLongitude" className="dropDownMenu">
        <label htmlFor="longitude">Longitude:</label>
        <input
          id="longitude"
          type="text"
          name="reclong"
          onChange={(event) => {
            setFilter({ name: event.target.name, value: event.target.value });
          }}
        ></input>
      </div>
    </form>
  );
};

export default Filter_bar;
