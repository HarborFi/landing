import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const StyledCard = styled.div`
  transform: rotateX(0deg);
  border-radius: 40px;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
`;

const StyledTitle = styled.div`
  font-size: 3em;
  font-weight: 700;
  padding: 70px 40px 0;
  @media screen and (min-width: 1024px) {
    font-size: 72px;
  }
`;

const StyledSpace = styled.div`
  height: 35em;
  background-image: url("Apps3.png");
  background-position: 50% 100%;
  background-size: cover;
  border-radius: 40px;
`;

export const Hero = () => {
  return (
    <StyledHero>
      <StyledCard>
        <StyledTitle>
          Crypto index products.
          <br /> On Avalanche.
        </StyledTitle>
        <StyledSpace />
      </StyledCard>
    </StyledHero>
  );
};
