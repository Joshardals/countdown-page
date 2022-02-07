import Head from "next/head";
import styled from "styled-components";
import Footer from "./components/Footer";
import Time from "./components/Time";

export default function Home() {
  const dhms = { days: 8, hours: 23, minutes: 55, seconds: 41 };
  return (
    <Wrapper>
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Launch>WE'RE ARE LAUNCHING SOON</Launch>
      <Time />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: var(--white);
  background: url("/bg-stars.svg");
`;
const Launch = styled.div`
  margin: 10rem 0 5rem 0;
`;
