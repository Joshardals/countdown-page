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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  display: flex;
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
`;
const SocialImg = styled.img``;

export default Footer;
