import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { indices } from "constants/indices";

import IndexChart from "./Chart";

import Ava from "../assets/tokens/ava.png";
import Joe from "../assets/tokens/joe.png";
import Png from "../assets/tokens/png.png";
import Qi from "../assets/tokens/qi.png";
import Snob from "../assets/tokens/snob.png";
import Yak from "../assets/tokens/yak.png";

const tokens = [Ava, Joe, Png, Qi, Snob, Yak];

const StyledSection = styled.section`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  @media screen and (min-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const StyledContainer = styled.div`
  height: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  column-gap: 1em;
  row-gap: 2em;
  height: 100%;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 2fr);
  }
  @media screen and (min-width: 1024px) {
    column-gap: 2em;
  }
`;

const StyledCard = styled.div`
  transform: rotateX(0deg);
  border-radius: 40px;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-size: 2em;
  font-weight: 600;
  padding: 1em 1em 0 1em;
`;

const StyledPrice = styled.div`
  padding: 0.5em 1.25em 0 1.25em;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 1em;
`;

const StyledGroup = styled.div``;

export const Quads = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledGrid>
          <StyledCard>
            <StyledGroup>
              <StyledTitle>DeFi</StyledTitle>
              <StyledPrice>$23.11</StyledPrice>
            </StyledGroup>
            <IndexChart />
          </StyledCard>
          <StyledCard>
            <StyledGroup>
              <StyledTitle>Metaverse</StyledTitle>
              <StyledPrice>$23.11</StyledPrice>
            </StyledGroup>
            <IndexChart />
          </StyledCard>
          <StyledCard>
            <StyledGroup>
              <StyledTitle>VIX</StyledTitle>
              <StyledPrice>$23.11</StyledPrice>
            </StyledGroup>
            <IndexChart />
          </StyledCard>
          <StyledCard>
            <StyledGroup>
              <StyledTitle>Stable Yield</StyledTitle>
              <StyledPrice>$23.11</StyledPrice>
            </StyledGroup>
            <IndexChart />
          </StyledCard>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};
