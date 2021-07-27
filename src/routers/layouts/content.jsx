import React from "react";
import { Route } from "react-router-dom";
import MM00 from "../MM00";
import MM01 from "../MM01";
import MM02 from "../MM02";
import MM03 from "../MM03";
import styled from "styled-components";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/create" component={MM01} />
      <Route exact path="/detail/:id" component={MM02} />
      <Route exact path="/update/:id" component={MM03} />
    </WholeWrapper>
  );
};

export default Content;
