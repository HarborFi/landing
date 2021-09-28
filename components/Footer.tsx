import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { footerMenu } from "../constants/menus";

const StyledFooter = styled.div`
  background-color: #161c2d;
  padding: 0 1em;
  @media screen and (min-width: 768px) {
    padding: 0 2em;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 4em;
  }
`;

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(27, 42, 78, 0.5);
  padding: 3em 0;
`;
const StyledGroup = styled.div``;
const StyledBannerTitle = styled.div`
  color: white;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.25em;
`;
const StyledBannerSubTitle = styled.div`
  font-size: 1.1em;
  color: #869ab8;
`;

const StyledButton = styled.div`
  padding: 1.5em 1.5em;
  font-size: 1em;
  border-radius: 0.375em;
  color: #fff;
  border: 1px solid #6c8aec;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  background-color: #6c8aec;
  &:hover {
    color: #fff;
    background-color: #6c8aec;
  }
`;

const StyledMenu = styled.div`
  padding: 6em 0;
  display: flex;
  justify-content: flex-start;
`;
const StyledMenuCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;
const StyledMenuColLabel = styled.div`
  color: #506690;
  font-weight: 600;
  font-size: 0.8em;
  margin-bottom: 0.75em;
`;
const StyledMenuColItem = styled.div`
  font-weight: 400;
  color: #869ab8;
  margin-bottom: 0.75em;
`;

const StyledInfo = styled.div``;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledBanner>
        <StyledGroup>
          <StyledBannerTitle>QUAD now live on Pangolin</StyledBannerTitle>
          <StyledBannerSubTitle>
            Head over to Pangolin exchange and get some tokens to stake.
          </StyledBannerSubTitle>
        </StyledGroup>
        <StyledButton>Buy QUAD</StyledButton>
      </StyledBanner>
      <StyledMenu>
        <StyledGroup>
          <StyledInfo>Logo and shit</StyledInfo>
        </StyledGroup>
        {footerMenu.map((group) => {
          return (
            <StyledMenuCol>
              <StyledMenuColLabel>{group.label}</StyledMenuColLabel>
              {group.items.map((item) => {
                return <StyledMenuColItem>{item.name}</StyledMenuColItem>;
              })}
            </StyledMenuCol>
          );
        })}
      </StyledMenu>
    </StyledFooter>
  );
};
