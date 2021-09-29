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

const StyledBox = styled.div`
  display: flex;
  padding: 2em 0 4em;
`;

const StyledCard = styled.div`
  background: white;
  padding: 1em;
  border-radius: 1em;
  width: 20em;
  box-shadow: 0 15px 35px 0 rgba(50, 50, 93, 0.06),
    0 5px 15px 0 rgba(50, 50, 93, 0.15);
  margin-left: 2em;
`;

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 2em;
  color: #161c2d;
  margin-bottom: 0.25em;
`;
const StyledSubTitle = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #506690;
  margin-bottom: 1em;
`;
const StyledList = styled.div`
  background-color: rgb(247, 248, 250);
  border: 1px solid rgb(237, 238, 242);
  padding: 12px 16px;
  border-radius: 16px;
  margin-top: 2em;
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25em;
`;
const StyledLabel = styled.div`
  display: row;
`;
const StyledLabelImage = styled.div``;
const StyledLabelToken = styled.div``;

const StyledValue = styled.div``;

const StyledHeading = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  color: #161c2d;
  margin-bottom: 1em;
  padding: 16px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

const StyledMedia = styled.img`
  width: auto;
  height: 50px;
  max-width: inherit;
  box-shadow: 0 0.08em 0.25em 0.075em rgba(0, 0, 0, 0.075);
  border-radius: 50%;
`;

export const Offerings = () => {
  return (
    <StyledBox>
      <StyledCard style={{ width: "30em" }}>
        <StyledHeading>
          We build and maintain the best index funds on Avalanche
        </StyledHeading>
        <StyledGrid>
          {tokens.map((i) => {
            return (
              <StyledItem>
                <StyledMedia src={i.src} alt="ava" />
              </StyledItem>
            );
          })}
        </StyledGrid>
      </StyledCard>
      {indices.map((i, k) => {
        return (
          <StyledCard key={k}>
            <StyledTitle>{i.name}</StyledTitle>
            <StyledSubTitle>{i.info}</StyledSubTitle>
            <IndexChart />
            <StyledList>
              {i.tokens.map((t, k) => {
                return (
                  <StyledRow key={k}>
                    <StyledLabel>
                      <StyledLabelImage></StyledLabelImage>
                      <StyledLabelToken>{t.symbol}</StyledLabelToken>
                    </StyledLabel>
                    <StyledValue>{t.weight}</StyledValue>
                  </StyledRow>
                );
              })}
            </StyledList>
          </StyledCard>
        );
      })}
    </StyledBox>
  );
};
