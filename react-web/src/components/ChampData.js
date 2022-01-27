import { useState } from "react";
import ChampCard from "./ChampCard.js";
import TitleCard from "./TitleCard";
const ChampData = (props) => {
  const [order, setOrder] = useState("Ranking");
  const [deleted, setDeleted] = useState(new Set());
  const onClickWinrate = () => {
    setOrder("winrate");
  };
  const onClickSample = () => {
    setOrder("sample");
  };
  const onClickName = () => {
    setOrder("name");
  };
  const onClickRanking = () => {
    setOrder("Ranking");
  };

  return (
    <div>
      <TitleCard
        ocName={onClickName}
        ocSample={onClickSample}
        ocRanking={onClickRanking}
        ocWinrate={onClickWinrate}
      />
      {props.data
        .filter((val) => {
          if (props.search === "") {
            return val;
          } else if (
            val.name
              .toLowerCase()
              .includes(props.search.toString().toLowerCase())
          ) {
            return val;
          }
          return null;
        })
        .filter((val) => {
          if (!deleted.has(val.name)) {
            return val;
          }
          return null;
        })
        .sort(function (a, b) {
          var keyA, keyB;
          if (order === "name") {
            keyA = a.name;
            keyB = b.name;
            return keyA.localeCompare(keyB);
          } else if (order === "winrate") {
            keyA = a.winrate;
            keyB = b.winrate;
            return keyB - keyA;
          } else if (order === "sample") {
            keyA = a.sample;
            keyB = b.sample;
            return keyB - keyA;
          } else {
            return 0;
          }
        })
        .map((task, index) => (
          <ChampCard
            key={index}
            rank={index}
            name={task.name}
            winrate={task.winrate + "%"}
            sample={task.sample}
            setDeleted={setDeleted}
            deleted={deleted}
          />
        ))}{" "}
    </div>
  );
};

export default ChampData;
