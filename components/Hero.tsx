import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  padding: 6em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 4em;
  font-weight: 700;
  text-align: center;
  color: #161c2d;
  margin-bottom: 0.25em;
`;

const StyledSubTitle = styled.div`
  color: #869ab8;
  text-align: center;
  font-size: 1.35em;
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 1.5em;
`;

const StyledButton = styled.div`
  padding: 1.5em 1.5em;
  font-size: 1em;
  border-radius: 0.375em;
  color: white;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  background-color: #3ce39b;
  &:hover {
    color: #fff;
    background-color: #28d98d;
  }
`;

export const Hero = () => {
  return (
    <StyledHero>
      <StyledTitle>Crypto Index Products</StyledTitle>
      <StyledSubTitle>
        Quads is a DeFi protocol for buying and trading crypto index products on
        the Avalanche network.
      </StyledSubTitle>
      <StyledButton>Buy QUAD</StyledButton>
    </StyledHero>
  );
};
