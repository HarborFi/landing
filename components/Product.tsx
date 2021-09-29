import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Offerings } from "./Offerings";

const StyledSection = styled.section`
  height: 50em;
  margin: 0em 0 10em;
  position: relative;
  z-index: 0;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(#161c2d, #161c2d);
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
  }
`;

const StyledContainer = styled.div`
  overflow: hidden;
  padding: 0 1em;
  @media screen and (min-width: 768px) {
    padding: 0 2em;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 4em;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 12em;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 20em;
  }
`;

export const Product = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Offerings></Offerings>
      </StyledContainer>
    </StyledSection>
  );
};
