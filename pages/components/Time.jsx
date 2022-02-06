import { useState, useEffect } from "react";
import styled from "styled-components";

const Time = ({ dhms }) => {
  // const { days = 0, hours = 0, minutes = 0, seconds = 0 } = dhms;
  // const [[dys, hrs, mins, secs], setTime] = useState([8, 23, 55, 41]);
  // const tick = () => {
  //   if (dys === 0 && hrs === 0 && mins === 0 && secs === 0) {
  //     reset();
  //   } else if (mins === 0 && secs === 0) {
  //     setTime(() => {
  //       [dys, hrs - 1, 59, 59];
  //     });
  //   } else if (secs === 0) {
  //     setTime(() => {
  //       [dys, hrs, mins - 1, 59];
  //     });
  //   } else {
  //     setTime(() => {
  //       [dys, hrs, mins, secs - 1];
  //     });
  //   }
  // };

  // const reset = () => {
  //   setTime([
  //     parseInt(days),
  //     parseInt(hours),
  //     parseInt(minutes),
  //     parseInt(seconds),
  //   ]);
  // };

  // useEffect(() => {
  //   // const timerId = setInterval(() => tick(), 1000);
  //   // return () => clearInterval(timerId);
  // });
  return (
    <Wrapper>
      <ItemWrapper>
        <Item>08</Item>
        <Footer>Days</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>23</Item>
        <Footer>Hours</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>55</Item>
        <Footer>Minutes</Footer>
      </ItemWrapper>
      <ItemWrapper>
        <Item>41</Item>
        <Footer>Seconds</Footer>
      </ItemWrapper>
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
  padding: 1rem;
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
