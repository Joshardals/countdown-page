import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <SocialContainer>
        <SocialLink href="#">
          <SocialImg src="/icon-facebook.svg" />
        </SocialLink>
        <SocialLink href="#">
          <SocialImg src="/icon-pinterest.svg" />
        </SocialLink>
        <SocialLink href="#">
          <SocialImg src="/icon-instagram.svg" />
        </SocialLink>
      </SocialContainer>

      <Author>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
          target="_blank"
          rel="noreferrer noopener"
          className="author"
        >
          Frontend Mentor
        </a>
        <br />
        Coded by{" "}
        <a
          className="author"
          href="https://www.frontendmentor.io/profile/Joshardals"
          target="_blank"
          rel="noreferrer noopener"
        >
          Joshua Bamidele
        </a>
      </Author>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 14rem;
  background: url("/pattern-hills.svg") no-repeat;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const SocialLink = styled.a`
  margin: 0 1rem 0 1rem;
  cursor: pointer;
`;
const SocialImg = styled.img``;
const Author = styled.div`
  color: var(--grayish-blue);
  letter-spacing: 1px;
  text-align: center;
  font-size: 12px;
  a {
    color: var(--grayish-blue);
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: var(--white);
    }
  }
`;
export default Footer;
