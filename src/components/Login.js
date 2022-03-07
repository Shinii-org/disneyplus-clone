import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional few
          with a Disney+ subscription. As of 02/20/22, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 7rem;
  min-height: calc(100vh - 7rem);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    position: absolute;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
const CTA = styled.div`
  padding: 8rem 4rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
  max-width: 65rem;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  background-color: #0063e5;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5rem;
  text-align: center;
  border-radius: 4px;
  color: #f9f9f9;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  letter-spacing: 1.5px;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  &:hover {
    background-color: #0483ee;
  }
  &:active {
    transform: translateY(2px);
  }
`;
const Description = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
  margin-top: 1.5rem;
`;
export default Login;
