import React from "react";
import CardView from "components/CardView";

const Meteo = ({ list }) => {
  console.log(list);
  return (
    <>
      <CardView list={list} />
    </>
  );
};

export default Meteo;
