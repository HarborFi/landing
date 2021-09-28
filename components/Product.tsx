import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  //   padding: 0 1em;
  //   @media screen and (min-width: 768px) {
  //     padding: 0 2em;
  //   }
  //   @media screen and (min-width: 1024px) {
  //     padding: 0 4em;
  //   }
`;

const StyledBackground = styled.div`
  background-image: linear-gradient(#161c2d, #161c2d);
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
  height: 50em;
  margin: 10em 0;
`;

const StyledBox1 = styled.div``;

export const Product = () => {
  return (
    <StyledSection>
      <StyledBackground>
        <StyledBox1 />
      </StyledBackground>
    </StyledSection>
  );
};
