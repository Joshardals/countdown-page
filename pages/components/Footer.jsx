import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <SocialContainer>
        <SocialLink href="https://web.facebook.com/joshardals/">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
        <SocialLink href="#">
          <FontAwesomeIcon icon={faPinterest} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/joshardals/">
          <FontAwesomeIcon icon={faInstagram} />
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
`;
const SocialLink = styled.a`
  margin: 0 1rem 0 1rem;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  color: var(--grayish-blue);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--soft-red);
  }
`;
const Author = styled.div`
  color: var(--grayish-blue);
  letter-spacing: 1px;
  text-align: center;
  font-size: 12px;
  margin-top: 0.8rem;
  a {
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--soft-red);
    }
  }
`;
export default Footer;
