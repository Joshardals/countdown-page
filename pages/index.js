import Head from "next/head";
import styled from "styled-components";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Launch>WE'RE ARE LAUNCHING SOON</Launch>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  color: var(--white);
  background: url("/bg-stars.svg");
`;
const Launch = styled.div``;
