import React from "react";
import GoodsList from "./GoodsList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <GoodsList />
        </div>
      </div>
    </div>
  );
};

export default App;
