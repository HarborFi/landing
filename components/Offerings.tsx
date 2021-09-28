import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { indices } from "constants/indices";

import IndexChart from "./Chart";

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
  font-size: 4em;
  color: #161c2d;
  margin-bottom: 0.25em;
  padding: 16px;
`;

export const Offerings = () => {
  return (
    <StyledBox>
      <StyledCard style={{ width: "30em" }}>
        <StyledHeading>Create, trade and manage crypto indices.</StyledHeading>
      </StyledCard>
      {indices.map((i) => {
        return (
          <StyledCard>
            <StyledTitle>{i.name}</StyledTitle>
            <StyledSubTitle>{i.info}</StyledSubTitle>
            <IndexChart />
            <StyledList>
              {i.tokens.map((t) => {
                return (
                  <StyledRow>
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
