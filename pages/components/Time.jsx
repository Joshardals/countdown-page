import React from "react";
import styled from "styled-components";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <ItemWrapper>
        <Item>{zeroPad(days)}</Item>
        <Footer>Days</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>{zeroPad(hours)}</Item>
        <Footer>Hours</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>{zeroPad(minutes)}</Item>
        <Footer>Minutes</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>{zeroPad(seconds)}</Item>
        <Footer>Seconds</Footer>
      </ItemWrapper>
    </>
  );
};

const Time = () => {
  return (
    <Wrapper>
      <Countdown
        date={Date.now() + 777600000}
        intervalDelay={1}
        renderer={renderer}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const ItemWrapper = styled.div``;
const Item = styled.div`
  position: relative;
  margin: 0 0.7rem 1.5rem 0.7rem;
  background: var(--dark-desaturated-blue);
  background: linear-gradient(
    to bottom,
    var(--dark-desaturated-blue) 50%,
    rgb(132, 134, 169, 0.3) 50%
  );
  color: var(--soft-red);
  width: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 3rem;
  border-radius: 5px;
  box-shadow: 0px 5px 3px 0px var(--blue-black);

  @media (max-width: 425px) {
    margin: 0 0.5rem 1.5rem 0.5rem;
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
const Footer = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  color: var(--grayish-blue);
`;
export default Time;
