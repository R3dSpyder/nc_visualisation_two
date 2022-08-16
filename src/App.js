import "./App.css";
import React from "react";
import Title from "./components/title";
import About from "./components/about";
import Filter_bar from "./components/filter_bar";
import Meteorite_info from "./components/meteorite_info_plane";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Sort_bar from "./components/sort";
import { useState, useEffect } from "react";
import Fetch_data from "./utilities/fetch_data";
import MapChart from "./components/worldMap";

function App() {
  const [meteorites, setMeteorites] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    Fetch_data(query).then((data) => {
      setMeteorites(data);
    });
  }, [meteorites]);
  return (
    <>
      <section className="container">
        <section id="page_title">
          <header>
            <Title />
          </header>
        </section>
        <section id="about_us_plane">
          <About className="About" />
        </section>
        <section id="filter_plane">
          <Filter_bar
            className="Filter_bar"
            setQuery={setQuery}
          />
          <Sort_bar className="Sort_bar" />
        </section>
        <section id="main_map_plane">
          <Meteorite_info
            className="Meteorite_info_section"
            meteorites={meteorites}
          />
         {/* <MapChart className="map" /> */}
        </section>
        <section id="footer_plane">
          <Links className="Links" />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
