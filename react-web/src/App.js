import Header from "./components/Header";
import DisplayData from "./components/DisplayData";
import Search from "./components/Search";
import { Container } from "./components/styles/Container.styled";
import { useState } from "react";

function App() {
  const onClickLog = () => {
    setSite("log_data.json");
  };
  const onClickUgg = () => {
    setSite("ugg_data.json");
  };
  const onClickOpgg = () => {
    setSite("opgg_data.json");
  };
  const onClickAggregate = () => {
    setSite("aggregate_data.json");
  };
  const [site, setSite] = useState("aggregate_data.json");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header
        title="Sample Game Data"
        subtitle="Collected from op.gg, u.gg, and leagueofgraphs.com"
      />
      <Container>
        <Search
          setSearch={setSearch}
          onClickUgg={onClickUgg}
          onClickLog={onClickLog}
          onClickOpgg={onClickOpgg}
          onClickAggregate={onClickAggregate}
        />
        <DisplayData filename={site} search={search} />;
      </Container>
    </div>
  );
}

export default App;
