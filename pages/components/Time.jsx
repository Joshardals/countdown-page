import React from "react";
import styled from "styled-components";

const Time = () => {
  return (
    <Wrapper>
      <Item>08</Item>
      <Item>23</Item>
      <Item>55</Item>
      <Item>41</Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Item = styled.div`
  position: relative;
  margin: 0 0.7rem 0 0.7rem;
  background: var(--dark-desaturated-blue);
  background: linear-gradient(
    to bottom,
    var(--dark-desaturated-blue) 50%,
    rgb(132, 134, 169, 0.3) 50%
  );
  color: var(--soft-red);
  padding: 1rem;
  font-size: 3rem;
  border-radius: 5px;
  box-shadow: 0px 5px 3px 0px var(--blue-black);

  @media (max-width: 425px) {
    margin: 0 0.5rem 0 0.5rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 48%;
    left: -1px;
    height: 5%;
    width: 5%;
    background: #000;
    border-radius: 999px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 48%;
    right: -1px;
    height: 5%;
    width: 5%;
    background: #000;
    border-radius: 999px;
  }
`;
export default Time;
