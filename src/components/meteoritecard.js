import React from "react";

const Meteoritecard = ({
  name,
  year,
  mass,
  recclass,
  fall,
  reclat,
  reclong,
}) => {
  const yearConvert = new Date(year).getFullYear();

  return (
    <span className="Meteorite_info_section">
      <ol>
        <li>{name}</li>
        <li>{yearConvert}</li>
        <li>{mass}</li>
        <li>{recclass}</li>
        <li>{fall}</li>
        <li>{reclat}</li>
        <li>{reclong}</li>
      </ol>
    </span>
  );
};

export default Meteoritecard;
