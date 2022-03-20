import { NextPage } from "next";
import Head from "next/head";
// import { useEffect } from "react";
import Header from "./Coponents/header/Header";
import InfoScreen from "./Coponents/infoscreen/InfoScreen";
import Map from "./Coponents/map/Map";

const Home: NextPage = () => {
  // useEffect(() => {
  //   fetch("http://localhost:8080/")
  //     .then((resp) => resp.json)
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <Head>
        <title>IP Tracker Coding Challange</title>
      </Head>
      <Header />
      <InfoScreen />
      <Map />
    </div>
  );
};

export default Home;
