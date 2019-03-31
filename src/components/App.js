import React from "react";
import GoodsList from "./GoodsList";
import Home from "./Home";
import GoodsDetail from "./GoodsDetail";
import Form from "./Form";
import { BrowserRouter, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/GoodsDetail" exact component={GoodsDetail} />
          <Route path="/GoodsList" exact component={GoodsList} />
          <Route path="/Form" exact component={Form} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
