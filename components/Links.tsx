import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const StyledCard = styled.div`
  padding: 70px 70px;
  transform: rotateX(0deg);
  border-radius: 40px;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  background: black;
`;

const StyledItems = styled.div`
  color: white;
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  margin-bottom: 0.25em;
  &:hover {
    color: rgb(187, 186, 186);
  }
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 5em;
`;

const StyledBar = styled.div`
  width: 30px;
  border-radius: 5px;
  background-size: 100% 100%;
  &:first-child {
    background-image: linear-gradient(180deg, #3996fa, #f4b82b, #f59548);
    height: 100px;
  }
  :nth-child(2) {
    background-image: linear-gradient(
      180deg,
      #dc7ecb,
      #ed85bf,
      #f38979,
      #f5a53b,
      #e7b239
    );
    height: 180px;
  }
  &:nth-child(3) {
    background-image: linear-gradient(180deg, #a177ff, #7d83ff, #3197ff);
    height: 250px;
  }
  &:nth-child(4) {
    background-image: linear-gradient(
      180deg,
      #dc7ecb,
      #ed85bf,
      #f38979,
      #f5a53b,
      #e7b239
    );
    height: 120px;
  }
  &:nth-child(5) {
    background-image: linear-gradient(180deg, #4fba4e, #97c030, #f5b926);
    height: 80px;
  }
`;

export const Links = () => {
  return (
    <StyledSection>
      <StyledCard>
        <StyledItems>CoinGecko</StyledItems>
        <StyledItems>Explorer</StyledItems>
        <StyledItems>Discord</StyledItems>
        <StyledItems>Telegram</StyledItems>
        <StyledItems>Blog</StyledItems>
        <StyledBox>
          <StyledBar />
          <StyledBar />
          <StyledBar />
          <StyledBar />
          <StyledBar />
        </StyledBox>
      </StyledCard>
    </StyledSection>
  );
};
