import Meteoritecard from "./meteoritecard";
import React from "react";

const Meteorite_info = ({ meteorites }) => {

  // const filtered = meteorites.filter((meteorite) => {
  //   return meteorite.year !== NaN
  // })

  return meteorites.map((meteorite) => {
    return <Meteoritecard key={meteorite.id} {...meteorite} />;
  });

  //   return <p>This will be the meteorite info page</p>;
};

export default Meteorite_info;
