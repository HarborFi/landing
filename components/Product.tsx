import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const StyledCard = styled.div`
  padding: 40px 40px;
  transform: rotateX(0deg);
  border-radius: 40px;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  background: radial-gradient(
      ellipse at 5% 5%,
      #fec833 0%,
      rgba(254, 200, 51, 0) 75%
    ),
    radial-gradient(ellipse at 95% 5%, #fdc1a7 0%, rgba(253, 193, 167, 0) 75%),
    radial-gradient(ellipse at 95% 95%, #e4699a 15%, rgba(228, 105, 154, 0) 75%),
    radial-gradient(ellipse at 5% 95%, #eb5551 30%, rgba(235, 85, 81, 0) 75%);
  filter: saturate(1.1);
`;

const StyledText = styled.div`
  color: white;
  font-size: 6em;
  font-weight: 700;
  line-height: 1;
`;

export const Product = () => {
  return (
    <StyledSection>
      <StyledCard>
        <StyledText>
          Buy <br />
          trade <br />
          and <br />
          launch crypto indexes.
        </StyledText>
      </StyledCard>
    </StyledSection>
  );
};
