import { useState, useEffect } from "react";
import ChampData from "./ChampData";

const DisplayData = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch(props.filename, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setData(myJson);
        });
    };
    getData();
  }, [props.filename]);
  return <ChampData data={data} search={props.search} />;
};

export default DisplayData;
